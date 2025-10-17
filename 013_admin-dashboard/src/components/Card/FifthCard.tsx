import Card from "./Card";

const FifthCard = () => {
  return (
    <>
      <Card classname="fifth_card">
        <div className="card_header">
          <p>Expenses and Income</p>
        </div>
        <div className="card_body">
          <div className="number">
            <p>Expenses</p>
            <p>75%</p>
            <p className="blur">0.05%</p>
          </div>
          <div>
            <p>vs</p>
          </div>
          <div className="number">
            <p>Income</p>
            <p>40%</p>
            <p className="blur">0.05%</p>
          </div>
        </div>
        <span className="card_bar"></span>
      </Card>
    </>
  );
};

export default FifthCard;
