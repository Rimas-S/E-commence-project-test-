import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page__showcase container flex">
        <h4>collection brand name</h4>
        <h1>SUMMER COLLECTION</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eius</h3>
        <button onClick={() => navigate('/shop')} className="home-page__showcase--btn">VIEW COLLECTION</button>
      </div>
    </div>
  );
};

export default Home;
