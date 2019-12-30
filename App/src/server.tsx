import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import * as React from "react";
import { renderStatic } from '@uifabric/merge-styles/lib/server';

import Hello from "./components/hello";


let { html, css } = renderStatic(() => {
    return renderToString(
        <Hello />
    );
});

let html_doc=`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <style>${css}</style>
    <title>Typescript-React-Template</title>
</head>

<body>
    <div id="app-react">
    ${html}
    </div>
    <script src="vendor.js"></script>
    <script src="client.js"></script>
</body>

</html>
`;

console.log(html_doc);