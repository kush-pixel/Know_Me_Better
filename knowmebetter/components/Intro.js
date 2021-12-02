import React from "react";
import getConfig from "next/config";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className="bg-secondary py-5 px-5">
      <div className="container">
        <div className=" row align-items-center">
          <div className="col-sm-6">
            <h1 className="text-primary fw-bold display-3">Hi, I am {title}</h1>
            <p>{description}</p>
            <div className="text-center">
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link key={index} href={value.link}>
                    <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                  </Link>
                ) : (
                  <Link key={index} href={value.link}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary my-1 mx-3"
                    >
                      {value.title}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <img
              className="img-fluid my-3 card-image"
              width="250"
              height="250"
              src={image}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//I dont know what this is, but removing it crashes the app. Not checking rn.
export const About = ({ title, description }) => {
  return (
    <div id="about" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">Who am I?</h1>
        <h3>I am {title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};
