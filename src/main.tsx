import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App.tsx";
const mode = import.meta.env.MODE;

const optionsBuild = {
  customElement: () => {
    class MyCustomElement extends HTMLElement {
      connectedCallback() {
        ReactDOM.render(<App />, this);
      }
    }
    customElements.define("app-film-item", MyCustomElement);
  },
  root: () => {
    ReactDOMClient.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  },
};
optionsBuild[mode === "custom-element" ? "customElement" : "root"]();
