import React from "react";

function About() {
  return (
    <div
      className="container card"
      style={{
        scrollBehavior: "smooth",
        paddingTop: "20px",
        width: "70rem",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
      }}
      id="about">
      <h3 style={{ fontFamily: "roboto" }}>About Us</h3>
      <p style={{ padding: "20px 20px 40px 20px" }}>
        We at{" "}
        <span style={{ fontFamily: "cursive", color: "#cc5500" }}>
          Kurama Airlines
        </span>{" "}
        believe in serving our customers with the grace and sanctity. Founded by
        Veedee and Derco in 2021, our esteemed organisation prides in industry
        leading flights in terms of comfort and hospitality while being
        economical and affordable.
      </p>
    </div>
  );
}

export default About;
