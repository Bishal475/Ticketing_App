import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/headers";

const AppCompoent = ({ Component, pageProps, currentUser }) => {
  return( 
    <div>
        <Header currentUser={currentUser}/>
        <Component {...pageProps} />
    </div>
);
};

AppCompoent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client
    .get("/api/users/currentuser")
    .catch((err) => console.log(err));
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return {
    pageProps,
    ...data
  };
};

export default AppCompoent;
