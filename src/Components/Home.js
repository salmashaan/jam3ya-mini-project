import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="hero-area bg_cover">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 offset-xl-7 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="hero-content">
              <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                Jam3ya Site
              </h2>

              <div className="hero-btns">
                <a
                  href="#courses"
                  className="main-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <Link to="/jam3ya-list">Jam3yas</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
