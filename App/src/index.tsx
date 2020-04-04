import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { initializeIcons } from '@uifabric/icons';
import Hello from "./components/hello";


//hydrate,用于服务器和客户端的渲染
require("./index.css");

initializeIcons();
ReactDOM.render(
    <Hello />,
    document.getElementById("app-react")
);
(module as any).hot.accept();