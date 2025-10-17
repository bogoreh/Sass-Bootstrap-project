import Card from "./Card";
import MaterialIcon from "../Icon/MaterialIcon";

const cardNames = [
  {
    name: "Macbook",
  },
  {
    name: "Bicycle",
  },
  {
    name: "Motorcycle",
  },
  {
    name: "Iphone 14 pro max",
  },
];

const SecondCard = () => {
  return (
    <>
      <Card classname="second_card">
        <div className="card_header">
          <p>List of items to buy</p>
        </div>
        <div className="card_body">
          <div className="time_container">
            <div className="time_div">
              <p className="time">02:00</p>
              <p className="det">Lorem, ipsum.</p>
            </div>
            <MaterialIcon
              style={{ marginTop: "auto", marginBottom: "auto" }}
              icon="navigate_next"
            />
            <div className="time_div">
              <p className="time">05:00</p>
              <p className="det">Lorem, ipsum.</p>
            </div>
          </div>
          <div className="checkbox_container">
            <div className="checkbox_header">
              <div className="checkbox_header-1">
                <MaterialIcon
                  className="icon_"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "#a6a5ad",
                  }}
                  icon="task_alt"
                />
                <p>Shopping list</p>
              </div>
              <div className="checkbox_header-1">
                <MaterialIcon
                  className="icon_"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "#a6a5ad",
                  }}
                  icon="add"
                />
                <p>Add item</p>
              </div>
            </div>
            <div className="checkbox_body">
              {cardNames.map((item) => (
                <div key={item.name} className="checkbox_c">
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>{item.name}</p>
                  </div>
                  <MaterialIcon
                    style={{ marginTop: "auto", marginBottom: "auto" }}
                    icon="more_vert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SecondCard;
