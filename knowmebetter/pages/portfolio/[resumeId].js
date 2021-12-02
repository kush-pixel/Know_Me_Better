import { Fragment } from "react";
import { Intro, About } from "../../components/Intro";
import { Projects } from "../../components/Work";
import { Header } from "../../components/Header";

export default function PortfolioDetail(props) {
  const resume = props.resumeData.resume[0];
  const repos = props.repos;
  const githubURL = `https://github.com/${resume.github}`;
  const emailURL = `mailto:${resume.email}`;
  // console.log('Rishabh');
  // console.log(emailURL);
  // console.log('kush Patel');
  // console.log(repos);
  // console.log(resume);

  //SEO
  const SEO = {
    title: resume.fullname,
    description: resume.description,
  };

  //intro
  const intro = {
    title: resume.fullname,
    description: resume.title,
    image:
      resume.imageURI ||
      "https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA=",
    buttons: [
      {
        title: "Github",
        link: githubURL,
        isPrimary: true,
      },
      {
        title: "LinkedIn",
        link: resume.linkedin,
        isPrimary: false,
      },
      {
        title: "Email",
        link: emailURL,
        isPrimary: false,
      },
    ],
  };

  //about
  const about = {
    title: resume.fullname,
    description: resume.description,
  };

  //projects
  const projects = {

    github: githubURL,
    cards: repos,
  };

  // console.log(repos);

  return (
    <Fragment>
      <Header seo={SEO} />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />

      <Projects github={projects.github} cards={projects.cards} />
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
  // console.log(data);
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
