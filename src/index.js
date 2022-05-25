/*
 * @Author: Sofia Xie
 * @Date: 2022-05-20 21:29:02
 * @Last Modified by: Sofia Xie
 * @Last Modified time: 2022-05-21 21:15:19
 */
// console.log("hello world!");

import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./01-base/12-Tab-maizuo";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App></App>);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App></App>
//   </React.StrictMode>,
//   document.getElementById("root")
// ); // 把1111 渲染到index.html中的 root节点中
// ReactDOM.render(<App4></App4>, document.getElementById("root")); // 把1111 渲染到index.html中的 root节点中
// ReactDOM.render(<App2></App2>, document.getElementById("root")); // 把1111 渲染到index.html中的 root节点中
// ReactDOM.render(<App2 />, document.getElementById("root")); // 把1111 渲染到index.html中的 root节点中
// ReactDOM.render(<App></App>, document.getElementById("root")); // 把1111 渲染到index.html中的 root节点中

// ReactDOM.render(<div> 1111 </div>, document.getElementById("root")); // 把1111 渲染到index.html中的 root节点中

// ReactDOM.render(
//   React.createElement(
//     "div",
//     {
//       id: "idname",
//       class: "classname",
//     },
//     "2222"
//   ),
//   document.getElementById("root")
// );

/*

JSX = js +xml

*/
