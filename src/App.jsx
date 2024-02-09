import React from 'react'
import Header from './Components/Header/Header';

import { lazy, Suspense } from "react";
import { Main, PostDetails, Users } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const Post = lazy(() => import("./pages/Post/Post"));
    return (
        <Router>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/users" element={<Users />} />
                    <Route
                        path="/post"
                        element={
                            <Suspense
                                fallback={
                                    <div>
                                        {" "}
                                        <h1>Loading ... </h1>
                                    </div>
                                }
                            >
                                <Post />
                            </Suspense>
                        }
                    />
                    <Route path="/post/:id" element={<PostDetails />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
