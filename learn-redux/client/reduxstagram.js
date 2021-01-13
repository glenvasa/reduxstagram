import React from "react";
import { render } from "react-dom";

import Main from "./components/Main";

// Import css - webpack handling css loading so we don't need link to stylesheet in index.html
// Webpack will embed a style tag in the js
import css from "./styles/style.styl";

render(<Main />, document.getElementById("root"));
