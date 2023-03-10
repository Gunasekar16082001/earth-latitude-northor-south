// import React from "react";

// function App() {
// window.navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error)
// );

//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import LocationDisply from "./LocationDisply";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>The error message: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          my latitude is {this.state.latitude}
          <LocationDisply latitude= {this.state.latitude} />
        </div>
      );
    } else {
      return <div>Loading....</div>;
    }
  }
}

export default App;
