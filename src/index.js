import React from "react";
import ReactDOM from "react-dom";

const fName = "Nuaj";
const lName = "Hassel";
const currentDate = new Date();
const year = currentDate.getFullYear();
import "./styles.css";

const customStyle = {
  color: "royalblue",
  paddingLeft: 40
};

const img1 = "https://picsum.photos/200/400?random=1a";
const img2 = "https://picsum.photos/200/400?random=2a";
const img3 = "https://picsum.photos/200/400?random=3a";

//practicing inline styling and css styling in react component

ReactDOM.render(
  <div className="App">
    <h1 className="heading" style={{ padding: 40 }}>
      Fotos al azar cada vez que refrescas la página
    </h1>
    <ul>
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img1} />
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img2} />
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img3} />
    </ul>

    <h3 className="firma" style={{ paddingLeft: 40 }}>
      Created by {fName} {lName}
    </h3>
    <p style={customStyle}>💀Copyright {year}💀 </p>
  </div>,

  document.getElementById("root")
);
