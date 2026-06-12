import { createRoot } from "react-dom/client";

const jsxHeading = <h1>Hello World JSX</h1>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(jsxHeading);
