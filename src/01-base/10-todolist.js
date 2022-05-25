/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 13:51:22
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 14:11:51
 */

import React, { Component } from "react";
import "./css/01-index.css";

export default class App extends Component {
  a = 100;
  myRef = React.createRef();

  state = {
    list: [
      {
        id: 1,
        text: "aa",
      },
      {
        id: 2,
        text: "bb",
      },
      {
        id: 3,
        text: "cc",
      },
    ],
  };

  render() {
    return (
      <div>
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

        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {/* {item.text} */}

              {/* 富文本展示  输入的是带标签的代码片段*/}
              <span dangerouslySetInnerHTML={{ __html: item.text }}></span>

              <button onClick={this.handleDelClick.bind(this, index)}>
                Del1
              </button>
              <button onClick={() => this.handleDelClick(index)}>Del2</button>
            </li>
          ))}
        </ul>
        {/* {方法一}  条件渲染 添加删除*/}
        {this.state.list.length === 0 ? <div>暂无待办事项1</div> : null}
        {/* {方法二} 添加删除*/}
        {this.state.list.length === 0 && <div>暂无待办事项2</div>}
        {/* {方法三} 显示影藏 */}
        <div className={this.state.list.length === 0 ? "" : "hidden"}>
          暂无待办事项3
        </div>
        <div
          style={{ display: this.state.list.length === 0 ? "block" : "none" }}
        >
          待办事项
        </div>
      </div>
    );
  }

  handleClick2 = () => {
    console.log("click2", this.myRef.current.value);

    //不要直接修改状态，可能会造成不可预期的问题
    // this.state.list.push(this.myRef.current.value);
    // let newList = this.state.list; //引用赋值 浅拷贝
    // newList.push(this.myRef.current.value); //引用赋值，还是会影响原来的数据list

    /* 深copy */
    let newList = [...this.state.list];
    let newList2 = this.state.list.slice();

    newList.push({
      id: Math.random() * 10000, //生成不同的id
      text: this.myRef.current.value,
    });
    this.setState({
      list: newList,
    });

    // newList2.push(this.myRef.current.value);
    // this.setState({
    //   list: newList1,
    // });

    //清空输入框
    this.myRef.current.value = "";
  };

  handleDelClick(index) {
    console.log("delete-", index);
    let newList = this.state.list.slice(); //使用concat()也可以
    newList.splice(index, 1); // 从index开始删除一个元素
    this.setState({
      list: newList,
    });
  }
}
