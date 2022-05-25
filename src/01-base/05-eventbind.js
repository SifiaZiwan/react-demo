/*
 * @Author: Sofia Xie
 * @Date: 2022-05-20 23:13:14
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 12:10:17
 */

import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input type="text" />
        <button
          onClick={() => {
            console.log("click", this.a);
          }}
        >
          add--逻辑简单可以使用
        </button>
        {/*加() 自动执行， 不加就需要click后才执行
        不推荐使用
        
        */}
        <button onClick={this.handleClick2}>add2-不推荐使用</button>
        {/* { bind() 改变(修正)this指向，但是不自动执行， 所以这里只能使用bind, 不能用call 和 apply*/}
        <button onClick={this.handleClick2.bind(this)}>add2-1</button>
        <button onClick={this.handleClick3}>add3-推荐</button>
        <button onClick={() => this.handleClick4()}>add4--推荐使用-传参</button>
      </div>
    );
  }

  /* 
  call(): 改变this指向，自动执行函数
  appky(): 改变this指向，自动执行函数
  bing(): 改变this指向，不会自动执行函数
  */

  handleClick2() {
    // this指向， 谁调用我 我就指向谁
    console.log("click2", this); // 不能访问a  this.指向 undefined， 肯定不指向App
  }

  handleClick3 = () => {
    //箭头函数不关心谁调用我， this指向保持和该函数所在的作用域保持一致
    console.log("click3", this.a);
  };

  handleClick4 = () => {
    //即使不是箭头函数， 也能被add4调用， 因为add4中的click 是箭头函数调用的
    console.log("click4", this.a);
  };
}

let obj1 = {
  name: "obj1",
  getName() {
    console.log(this.name);
  },
};
let obj2 = {
  name: "obj2",
  getName() {
    console.log(this.name);
  },
};
obj1.getName.call(obj2); // 强行把obj1中的this指向改为 obj2, 改变this指向并且自动执行
obj1.getName.apply(obj2); // 强行把obj1中的this指向改为 obj2, 改变this指向并且自动执行
obj1.getName.bind(obj2)(); // bind() 改变this指向，但是不自动执行}
obj2.getName();

// class A {
//   constructor() {
//     this.a = "aaa";
//     this.b = "bbb";
//   }

//   c = "cccc";

//   funA() {
//     console.log("function a");
//   }

//   funB() {
//     console.log("function b");
//   }

//   funC() {
//     console.log("function c");
//   }
// }
