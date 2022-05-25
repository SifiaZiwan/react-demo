/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 21:05:39
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 21:10:57
 */

import React, { Component } from "react";

export default class APP extends Component {
  state = {
    myHtml: `<div>
    <h1>后端来的数据</h1>
    <div>content</div>
    <div>footer</div>
  </div>`,
  };
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.myHtml }}></div>
      </div>
    );
  }
}
