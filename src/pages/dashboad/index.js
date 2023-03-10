import Overview from "./../../Components/Overview/Overview";
import Categories from "./../../Components/Categories/Categories";
import Product from "./../../Components/Product/Product";
//import Price from "./../../Components/Price/Price";
import Logs from "./../../Components/Logs/Logs";
import Activity from "./../../Components/Activity/Activity";

const DashboardPge = () => {
  return (
    <div id="dahboardPage">
      <div className="first_bloc">
        <Overview />
        <Categories />
        <Product />
      </div>
      <div className="second_bloc">
        <Activity />
    
      </div>
      <Logs />
    </div>
  );
};

export default DashboardPge;
