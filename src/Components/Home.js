import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <div className="hero-image">
        <div className="hero-text">
          <h3>Welcome to Society HS!</h3>
          <br />
          <hr />
          <br />
          <h6>
            {" "}
            A place to join and gather with like-minded indivuals to help make
            the world a better place.
          </h6>
          <br />
          <p>One jam3ya at a time...</p>
        </div>
      </div>
    </section>
  );
}
