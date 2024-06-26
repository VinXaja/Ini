import Layout from "./layout/Layout";
import Main from "./page/Main";
import About from "./page/About";
import GuestBook from "./page/GuestBook";
import "./App.css";
import React, { Fragment } from "react";
import {Routes, Route} from "react-router-dom";
import Faq from './page/Faq'
import AskMe from './page/AskMe'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<Faq />}></Route>
            <Route path="guest-book" element={<GuestBook />} />
            <Route path="askme" element={<AskMe />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
