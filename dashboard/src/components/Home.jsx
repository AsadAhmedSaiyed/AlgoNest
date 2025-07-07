import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const {id} = useParams();
  return (
    <>
      <TopBar id={id}/>
      <Dashboard />
    </>
  );
};

export default Home;
