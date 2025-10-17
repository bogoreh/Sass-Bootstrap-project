import creditcard from "../../assets/creditcard.png";

const ImageCard = () => {
  const divStyle = {
    backgroundImage: `url(${creditcard})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "200px",
    width: "50%",
  };

  return <div style={divStyle}></div>;
};

export default ImageCard;
