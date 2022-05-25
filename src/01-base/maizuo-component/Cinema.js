/*
 * @Author: Sofia Xie
 * @Date: 2022-05-21 21:40:10
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 23:02:02
 */

import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  constructor() {
    super();

    this.state = {
      cinemaList: [],
      bakCinemaList: [],
    };
    //请求数据
    //axios 第三方库，专门用于请求数据
    // axios
    //   .get(
    //     "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1568096"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1506712",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653138821200093936386049","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        console.log(res.data.data.cinemas);
        this.setState({
          cinemaList: res.data.data.cinemas,
          bakCinemaList: res.data.data.cinemas,
        });
      })
      .catch((res) => {
        // console.log(res);
      });
  }

  // state = {
  //   cinemaList: [],
  //   bakCinemaList: [],
  // };

  //后面生命周期函数 更合适发送ajax请求

  render() {
    // render 函数会重复执行多次，所以不好在这里拿api数据
    return (
      <div>
        <input onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }

  handleInput = (event) => {
    console.log("input", event.target.value);
    let newCinemaList = this.state.bakCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );

    this.setState({
      cinemaList: newCinemaList,
    });

    console.log(newCinemaList);
  };
}

/* 
 filter
*/

let arr = ["aaa", "bbb", "ccc"];
let newArr = arr.filter((item) => item.includes("a"));
console.log(newArr);
