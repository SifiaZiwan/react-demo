/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 13:19:55
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 13:49:37
 */

/* 循环渲染 */
/* 如无必要， 勿增实体： 原生JS有的，就不要新建 */
import React, { Component } from "react";

export default class APP extends Component {
  state = {
    list: [111, 222, 333],
    listObj: [
      {
        id: 1,
        value: "111",
      },
      {
        id: 2,
        value: "222",
      },
      {
        id: 3,
        value: "333",
      },
    ],
  };
  render() {
    let newList = this.state.list.map((item) => (
      <li key={item + "_id"}>{item}</li>
    ));
    let newListObj = this.state.listObj.map((item) => (
      <li key={item.id}>{item.value}</li>
    ));
    return (
      <div>
        <ul>{newList}</ul>
        <ul>{newListObj}</ul>
      </div>
    );
  }
}

/* 为了列表的复用和重排，设置key值，提高性能
理想的key值， item.id 唯一的标识

不涉及到列表的增加、删除、重排，key值设置成索引是没有问题的
*/

let list = ["aa", "bb", "cc"];

let newList = list.map((item) => `<li>${item}</li>`);

console.log(newList.join(""));
