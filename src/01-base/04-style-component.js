/*
 * @Author: Sofia Xie
 * @Date: 2022-05-20 22:39:24
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-20 23:11:50
 */

import React, { Component } from "react";
import "./css/01-index.css"; //导入css模块，webpack 的支持

export default class App extends Component {
  render() {
    let myname = "Sofia Xie";
    let obja = {
      backgroundColor: "yellow",
      height: "50px",
      fontSize: "20px",
    };
    return (
      <div>
        {10 + 20} -{myname} <br />
        {10 > 20 ? "aaa" : "bbb"}
        {/* test comments */}
        <div style={obja}>11111</div>
        <div style={{ background: "red" }}>2222</div>
        <div className="active">3333</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" />
      </div>
    );
  }
}
