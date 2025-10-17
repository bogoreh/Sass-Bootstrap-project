import "../../styles/Sidebar/sidebar.css";
import MaterialIcon from "../Icon/MaterialIcon";

const nav_icons = [
  {
    name: "home",
  },
  {
    name: "notifications",
  },
  {
    name: "schedule",
  },
  {
    name: "group",
  },
  {
    name: "credit_card",
  },
  {
    name: "settings",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_header">
        <div className="sidebar_logo">
          <p>S.</p>
        </div>
        <div className="sidebar_icon">
          <MaterialIcon icon="storefront" />
        </div>
      </div>
      <div className="sidebar_body">
        {nav_icons.map((items) => (
          <div key={items.name} className="sidebar_body_container">
            <MaterialIcon icon={items.name} />
          </div>
        ))}
      </div>
      <div className="sidebar_footer">
        <div className="user_container">
          <img src="" alt="" />
        </div>
        <div className="login_icon">
          <MaterialIcon color="" icon="login" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
