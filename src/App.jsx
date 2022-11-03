import React, { PureComponent } from "react";
import Home from "./components/Home";
import Info from "./components/Info";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <Info />
      </div>
    );
  }
}

export default App;
