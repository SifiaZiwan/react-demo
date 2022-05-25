/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 12:30:28
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 12:45:33
 */

import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  mytext = "mytext";
  myRef = React.createRef();
  render() {
    return (
      <div>
        {/* <input ref={this.mytext} /> */}
        <input ref={this.myRef} />
        <button
          onClick={() => {
            // 严格模式下refs不能用
            // console.log("click1", this.refs.mytext.value);
            console.log("click1", this.myRef.current.value);
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick2.bind(this)}>add2-bind</button>
      </div>
    );
  }

  handleClick2() {
    console.log("click2", this.myRef.current.value);
  }
}
