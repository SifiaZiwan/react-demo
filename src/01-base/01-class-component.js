/*
 * @Author: Sofia Xie
 * @Date: 2022-05-20 21:50:30
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-20 22:18:52
 */

// class Base {
//   constructor() {}

//   funA() {
//     console.log("function a");
//   }
//   funB() {}
// }

// class BaseB extends Base {
//   childFunA() {}
// }

// let base = new Base();
// console.log(base.funA);

import React from "react";

class APP extends React.Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
        <div>
          <ul>
            <li>aaa</li>
            <li>bbbb</li>
          </ul>
        </div>
        <div>
          <span>footer</span>
        </div>
      </div>
    );
  }
}

export default APP;
