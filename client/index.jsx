import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
  }
  render() {
    return (
      // <Fragment>
        <div>
          <p>hi</p>
        </div>
      // </Fragment>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));