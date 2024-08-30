import React from "react";
import Router from "./Router";

declare global {
  interface Window {
    config: any;
  }
}
window.config = window.config || {};

const App = () => {
  return <Router />;
};

export default App;
