/*
 * @Author: Sofia Xie
 * @Date: 2022-05-20 22:25:52
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-20 22:36:57
 */

import { render } from "@testing-library/react";
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <ChildNavBar></ChildNavBar>
      </div>
    );
  }
}

class ChildNavBar extends Component {
  render() {
    return <div>ChildNavbar</div>;
  }
}

function Swiper() {
  return <div>Swiper</div>;
}

const Tabbar = () => <div>Tabbar</div>;
// const Tabbar = () => {
//   return <div>Tabbar</div>
// }

export default class Nest extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}
