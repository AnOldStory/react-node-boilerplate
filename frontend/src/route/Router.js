import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "container/main/MainContainer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Routes>
            hello
            <Route path="/" element={<MainContainer/>} />
            <Route path="/hello/*" element={<MainContainer/>} />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
