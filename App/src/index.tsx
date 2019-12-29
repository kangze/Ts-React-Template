import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';

//hydrate,用于服务器和客户端的渲染

require("./index.css");

class App extends React.Component<any, any>
{
    public render() {
        return (
            <div>我来测试一些东西</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app-react")
);
module.hot.accept();