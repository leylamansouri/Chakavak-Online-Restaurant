import { Link , Outlet} from "react-router-dom"

const Footer = () => {
    const imgurlm = require("./picture/ittle.png");
    return (
      <div className="row footer">
        <div className="col-12 text-center col-md-4 d-flex flex-column footermeal">
          <Link to="/Allmeal">تمام وعده ها</Link>
          <Link to="/Breakfast">صبحانه</Link>
          <Link to="/Lunch">ناهار</Link>
          <Link to="/Dinner">شام</Link>
          <Link to="/Dessert">دسر</Link>
        </div>
        <div className="col-12 text-center col-md-4 infor">
          <span className="contact">:اطلاعات تماس</span>
          <span style={{color:' #6818e7'}}>+98-09026773840</span>
          <span style={{color:' #6818e7'}}>leila.ma.1414@gmail.com</span>
        </div> 
        <div className="col-12 text-center  col-md-4 imglogod">
          <img src={imgurlm} className="img-fluid" />
        </div>
      </div>
    );
  };
export default Footer;