import { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/resume.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";

export default function GetData() {
  //Session
  const [session] = useSession();
  const router = useRouter();

  // define state
  const [fullname, setfullname] = useState("");
  const [github, setgithub] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");

  //get the values and display it on next page
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      router.push("/");
    }
    const github = session.user.name;

    const imageURI = session.user.image;

    const githubData = await fetch(`https://api.github.com/users/${github}`, {
      method: "GET",
    });

    const githubDataJson = await githubData.json();
    const avatar = githubDataJson.avatar_url;

    const bodyQuery = {
      resumeData: {
        fullname: fullname,
        title: title,
        description: description,
        email: email,
        phone: phone,
        city: city,
        country: country,
        github: github,
        linkedin: linkedin,
        imageURI: avatar,
      },
    };

    console.log("before api call");
    let response = await fetch("/api/uploadResumeDetails", {
      method: "POST",
      body: JSON.stringify(bodyQuery),
    });

    const response2 = await response.json();

    const resumeId = response2.resume._id;

    router.push(`/portfolio/${resumeId}`);
  };

  //Create a form to get data from the user
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
      <div className="m-5">
        <div className="row">
          <div className="col">
            <h1>Form</h1>
            {/* Form */}
            <form action="" onSubmit={handleSubmit}>
              {/* Full Name */}

              <div className="mb-3">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  id="fullname"
                  onChange={(e) => setfullname(e.target.value)}
                />
                <div class="form-text">Enter your Full Name.</div>
              </div>

              {/* Title */}
              <div className="mb-3">
                <label htmlFor="title">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  onChange={(e) => settitle(e.target.value)}
                />
                <div class="form-text">Enter your Job Title.</div>
              </div>

              {/* Github */}
              {/* <div className="mb-3">
                <label htmlFor="title">Github Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  id="github"

                  onChange={(e) => setgithub(e.target.value)}
                />
                <div class="form-text">Enter your Github Username.</div>
              </div> */}

              {/* Linkedin */}
              <div className="mb-3">
                <label htmlFor="title">Linkedin Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  id="linkedin"
                  onChange={(e) => setlinkedin(e.target.value)}
                />
                <div class="form-text">Enter your Linkedin URL.</div>
              </div>

              {/* Description */}

              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="3"
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
                <div class="form-text">Enter a description of yourself.</div>
              </div>

              {/* Contact Details */}

              <div className="mb-3">
                <div class="row">
                  <div class="col">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label htmlFor="email">Email Id</label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Address */}

              <div className="mb-3">
                <div class="row">
                  <div class="col">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      onChange={(e) => setcity(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      onChange={(e) => setcountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col">
            <h1>Resume</h1>
            {/* Resume layout */}

            <div style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
              <div class="row">
                <div class="col text-left m-2">
                  <h3>{title}</h3>
                  <h4>{fullname}</h4>
                </div>
                <div class="col m-2" style={{ textAlign: "right" }}>
                  <p>Phone number - {phone}</p>
                  <p>Email Id - {email}</p>
                  <p>City - {city}</p>
                  <p>Country - {country}</p>
                </div>
              </div>
              <div className="row m-2">
                <p>{description}</p>
              </div>
              <div className="row m-2">
                <h3>Github Repos</h3>
                <div className="row mb-3">
                  <div className="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Github repo</h5>
                        <p class="card-text">Repo description</p>
                        <a href="#" class="card-link">
                          Repo link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Github repo</h5>
                        <p class="card-text">Repo description</p>
                        <a href="#" class="card-link">
                          Repo link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Github repo</h5>
                        <p class="card-text">Repo description</p>
                        <a href="#" class="card-link">
                          Repo link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Github repo</h5>
                        <p class="card-text">Repo description</p>
                        <a href="#" class="card-link">
                          Repo link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
//Server Side Authentication to Render This page at Server side
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        //Securing Pages Server Side
        //TO use a env variable to redirect url here instead of hard coding
        //Append Redirect url to signin auth
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/getdata",
        //Not perm applicable only when user is not logged in!
        permanent: false,
      },
    };
  }
  return {
    props: {
      redirect: {
        destination: "/getdata",
        session,
      },
    },
  };
}
