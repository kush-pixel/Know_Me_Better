import { Fragment } from "react";
import Head from "next/head";

export default function FinalResume(props) {
  const resume = props.resumeData.resume[0];
  const repos = props.repos;

  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="../styles/resume.module.css" />
      </Head>
      <div className="m-5 d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "#f5f5f5",
            height: "100%",
            maxWidth: "1000px",
          }}
        >
          <div class="row">
            <div class="col text-left m-2">
              <h3>{resume.title}</h3>
              <h4>{resume.fullname}</h4>
            </div>
            <div class="col m-2" style={{ textAlign: "right" }}>
              <p>Phone number - {resume.phone}</p>
              <p>Email Id - {resume.email}</p>
              <p>City - {resume.city}</p>
              <p>Country - {resume.country}</p>
            </div>
          </div>
          <div className="row m-2">
            <p>{resume.description}</p>
          </div>
          <div className="row m-2">
            <h3>Github Repos</h3>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {repos.map((value, index) => (
                <div className="col-5 m-2">
                  <div class="card" style={{ height: "150px" }}>
                    <div class="card-body">
                      <h3 class="card-title">{value.repo}</h3>
                      <p class="card-text">{value.description}</p>
                      <a href="#" class="card-link"></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const resumeId = context.query.resumeId;
  const response = await fetch(
    `http://localhost:3000/api/getResumeDetail/${resumeId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  //Github API stuff
  const githubUsername = data.resume[0].github;

  const repos = await fetch(
    `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`,
    {
      method: "GET",
    }
  );
  const reposData = await repos.json();

  return {
    props: {
      resumeData: data,
      repos: reposData,
    },
  };
}
