import Card from "./Card";
import MaterialIcon from "../Icon/MaterialIcon";
import User from "../User/user";

const SixthCard = () => {
  return (
    <>
      <Card classname="sixth_card">
        <div className="card_header">
          <p>Latest Spending</p>

          <MaterialIcon
            style={{ marginTop: "auto", marginBottom: "auto" }}
            icon="more_vert"
          />
        </div>

        <div className="user_list">
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Online Store</p>
                <p className="date">02, May 2022, 9:00AM</p>
              </div>
            </div>
          </div>
          <span className="hr-style"></span>
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Pay the hospital</p>
                <p className="date">02, May 2022, 9:00AM</p>
              </div>
            </div>
          </div>
          <div className="single_user">
            <div className="single_left">
              <div>
                <User />
              </div>
              <div className="user__name">
                <p className="name">Tickets</p>
                <p className="date">02, May 2022, 9:00AM</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SixthCard;
