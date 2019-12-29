import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import * as React from "react";
import { renderStatic } from '@uifabric/merge-styles/lib/server';

import Hello from "./components/hello";


let { html, css } = renderStatic(() => {
    return renderToString(
        <Hello />
    );
});

console.log(css);
console.log(html);