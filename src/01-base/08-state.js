/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 12:50:33
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 13:17:35
 */

import React, { Component } from "react";

export default class App extends Component {
  a = 1;

  /* //方法一：
   state = {
    mytext: "收藏",
    myShow: true,
  }; */

  /* 方法二 */
  constructor() {
    super();
    this.state = {
      mytext: "收藏",
      myShow: true,
      myName: "Sofia xie",
    };
  }

  render() {
    return (
      <div>
        <h1>欢迎来到React开发学习 - {this.state.myName}</h1>
        {/* {收藏->取消收藏， 使用的简单变量，onclick时改变变量值在React中不可用
        需要用状态state来实现} */}
        <button
          onClick={() => {
            // this.state.mytext = "取消"; //不可以直接改变状态 需要使用setstate间接修改
            this.setState({
              // mytext: "取消收藏",
              myShow: !this.state.myShow,
              myName: "Xiao ming",
            }); //间接修改
            if (this.state.myShow) {
              console.log("收藏的逻辑");
            } else {
              console.log("取消收藏的逻辑");
            }
          }}
        >
          {this.state.myShow ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}
