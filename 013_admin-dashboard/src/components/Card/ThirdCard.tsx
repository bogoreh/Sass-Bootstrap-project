import Card from "./Card";
import MaterialIcon from "../Icon/MaterialIcon";
import User from "../User/user";

const ThirdCard = () => {
  return (
    <>
      <Card classname="third_card">
        <div className="card_header">
          <p>Esther Howard</p>
        </div>
        <div className="chat_box">
          <div className="user1">
            <div>
              <div className="chat">Are you ready?</div>
              <User />
            </div>
          </div>
          <div className="user2">
            <div>
              <User />
              <div className="chat">Yes, I am ready</div>
            </div>
          </div>
        </div>
        <div className="text_area">
          <div className="text_area_container">
            <textarea
              placeholder="write message here"
              name=""
              id=""
              cols={57}
              rows={3}
            ></textarea>
            <div>
              <div className="text_area_icon">
                <MaterialIcon icon="sentiment_satisfied" />
                <MaterialIcon icon="link" />
              </div>
              <button>Send Now</button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ThirdCard;
