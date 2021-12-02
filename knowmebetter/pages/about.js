import { getSession, useSession } from "next-auth/client";

function About({ data }) {
  const [session] = useSession();
  console.log({ session });

  return <h1>Welcome to About Page!</h1>;
}

export default About;
//Server Side Authentication to Render This page at Server side
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         //Securing Pages Server Side
//         //TO use a env variable to redirect url here instead of hard coding
//         //Append Redirect url to signin auth
//         destination: "/api/auth/signin?callbackUrl=http://localhost:3000/about",
//         //Not perm applicable only when user is not logged in!
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       data: "Welcome to About Section",
//       session,
//     },
//   };
// }
