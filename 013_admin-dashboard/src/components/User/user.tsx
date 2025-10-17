import "../../styles/User/user.css";
import user from "../../assets/user.jpeg";

const User = () => {
  return (
    <div className="circle-container">
      <img src={user} alt="User" className="circle-image" />
    </div>
  );
};

export default User;
