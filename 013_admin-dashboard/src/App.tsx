import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/App/app.css";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default App;
