import "../../styles/Body/body.css";
import FifthCard from "../Card/FifthCard";
import FirstCard from "../Card/FirstCard";
import FourthCard from "../Card/FourthCard";
import ImageCard from "../Card/ImageCard";
import SecondCard from "../Card/SecondCard";
import SixthCard from "../Card/SixthCard";
import ThirdCard from "../Card/ThirdCard";
import MaterialIcon from "../Icon/MaterialIcon";

const Body = () => {
  return (
    <div className="body-container">
      <div className="bodyleft">
        <div className="body_header">
          <div className="user_name">
            <p className="header">Hello, Jhon .D</p>
            <p className="description">Lorem ipsum dolor sit.</p>
          </div>
          <div className="search_icon">
            <div>
              <MaterialIcon icon="search" />
            </div>
          </div>
        </div>
        <div className="leftbody">
          <div className="row-one">
            <FirstCard />
            <ImageCard />
          </div>
          <div className="row-one">
            <SecondCard />
            <ThirdCard />
          </div>
          <div className="row-one">
            <FourthCard />
          </div>
        </div>
      </div>
      <div className="bodyright">
        <FifthCard />
        <SixthCard />
      </div>
    </div>
  );
};

export default Body;
