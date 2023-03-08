import "./App.scss";
import "./sass/global.scss";
import Leftside from "./Components/Leftside/Leftside";
import DashboardPge from "./pages/dashboad";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Leftside />
      </div>
      <div className="rightside">
        <DashboardPge />
      </div>
    </div>
  );
}

export default App;
