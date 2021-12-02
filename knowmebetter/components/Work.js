import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

export const Projects = ({ github, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">{Projects}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.repo}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>
        <div className="text-center">
          <a href={github}>
            <button type="button" className="btn btn-outline-light">
              See More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, description, icons, link }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ width: "20rem" }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="text-end">
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="icon-style mx-1"
              icon={faGithub}
              size="2x"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
