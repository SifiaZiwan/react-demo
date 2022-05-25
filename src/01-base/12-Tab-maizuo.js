/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 21:15:24
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 21:52:29
 */

/* 实现类型https://m.maizuo.com/v5/#/films/comingSoon */

import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuo-component/Film";
import Cinema from "./maizuo-component/Cinema";
import Consult from "./maizuo-component/Consult";
import MyCenter from "./maizuo-component/MyCenter";

export default class APP extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "资讯",
      },
      {
        id: 4,
        text: "我的",
      },
    ],
    currentIndex: 0,
  };

  which() {
    // return 111;
    switch (this.state.currentIndex) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Consult></Consult>;
      case 3:
        return <MyCenter></MyCenter>;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {/* {this.state.currentIndex === 0 && <Film></Film>}
        {this.state.currentIndex === 1 && <Cinema></Cinema>}
        {this.state.currentIndex === 2 && <Consult></Consult>}
        {this.state.currentIndex === 3 && <MyCenter></MyCenter>} */}
        {
          // 表达式- 支持函数表达式
          this.which()
        }
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.currentIndex === index ? "active" : ""}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleClick(index) {
    console.log(index);
    this.setState({
      currentIndex: index,
    });
  }
}
