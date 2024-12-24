import buildClient from "../api/build-client";

const home = ({currentUser}) => {
  return currentUser ? (
    <div>
      <h1>You are Signed In</h1>
    </div>
  ) : (
    <div>
      <h1>You are NOT Signed In</h1>
    </div>
  );
};

home.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client
    .get("/api/users/currentuser")
    .catch((err) => console.log(err));
  console.log("Hello From Home Ser");
  return data;
};

export default home;

//ingress-nginx-controller.ingress-nginx.svc.cluster.local
