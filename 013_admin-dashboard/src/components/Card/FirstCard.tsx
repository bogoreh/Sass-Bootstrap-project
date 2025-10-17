import MaterialIcon from "../Icon/MaterialIcon";
import Card from "./Card";
import coins from "../../assets/coins.png";
import purplechart from "../../assets/purplechart_.2.jpg";

const FirstCard = () => {
  return (
    <Card classname="first_card">
      <div className="card_header">
        <p>Balance Statements</p>
        <div>
          <button>
            <p>Filter</p>
            <MaterialIcon
              style={{ marginTop: "auto", marginBottom: "auto" }}
              icon="expand_more"
            />
          </button>
        </div>
      </div>
      <div className="first_cardbody">
        <div className="first_left">
          <div>
            <p className="cash">$564</p>
            <div className="coin">
              <img src={coins} alt="" />
              <p>
                Lorem, ipsum <br /> dolor.
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="first_right">
          <img src={purplechart} alt="" />
        </div>
      </div>
    </Card>
  );
};

export default FirstCard;
