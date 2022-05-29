import Body from "./components/Body/Body";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Jumbotron";
import "./stylesheets/application.sass";

function App() {
  return (
    <Layout>
      <Main />
      <Body />
    </Layout>
  );
}

export default App;
