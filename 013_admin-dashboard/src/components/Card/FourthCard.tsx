import Card from "./Card";
import MaterialIcon from "../Icon/MaterialIcon";
import User from "../User/user";

const FourthCard = () => {
  return (
    <>
      <Card classname="fourth_card">
        <div className="card_header">
          <p>Last Transaction</p>
          <div>
            <p style={{ textDecoration: "underline" }}>Newest</p>
            <p>Oldest</p>
          </div>
        </div>
        <span className="hr-style"></span>
        <div className="user_list">
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Bessie Cooper</p>
                <p className="date">02, May 2022</p>
              </div>
            </div>
            <div className="single_right">
              <p>3,000</p>
              <MaterialIcon
                style={{ marginTop: "auto", marginBottom: "auto" }}
                icon="more_vert"
              />
            </div>
          </div>
          <span className="hr-style"></span>
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Bessie Cooper</p>
                <p className="date">02, May 2022</p>
              </div>
            </div>
            <div className="single_right">
              <p>3,000</p>
              <MaterialIcon
                style={{ marginTop: "auto", marginBottom: "auto" }}
                icon="more_vert"
              />
            </div>
          </div>
          <span className="hr-style"></span>
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Bessie Cooper</p>
                <p className="date">02, May 2022</p>
              </div>
            </div>
            <div className="single_right">
              <p>3,000</p>
              <MaterialIcon
                style={{ marginTop: "auto", marginBottom: "auto" }}
                icon="more_vert"
              />
            </div>
          </div>
          <span className="hr-style"></span>
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Bessie Cooper</p>
                <p className="date">02, May 2022</p>
              </div>
            </div>
            <div className="single_right">
              <p>3,000</p>
              <MaterialIcon
                style={{ marginTop: "auto", marginBottom: "auto" }}
                icon="more_vert"
              />
            </div>
          </div>
          <span className="hr-style"></span>
        </div>
      </Card>
    </>
  );
};

export default FourthCard;
