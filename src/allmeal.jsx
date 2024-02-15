import React from "react";
import { Link } from "react-router-dom";
import Allmealmykafe from "./AllData"
function Allmeal() {
    const breakfastItems = Allmealmykafe.breakfast;
    const lunchItems = Allmealmykafe.lunches;
    const dinnerItems = Allmealmykafe.dinner;
    const dessertItems=Allmealmykafe.dessert;
  return (
    <div className="row">
         <br/>
        <h2 className="meal2"></h2>
      {breakfastItems.map((de, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="parentdiv">
            <div className="divimage mt-3" style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }}>
              <Link to={`/singlemeal/${de.id}`} key={de.id}>  <img src={de.imageURL} alt={de.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
</Link>
            </div>
            <p className="mealfood">{de.name}</p>
            <p className="textprice"><span>تومان</span> {de.price} </p>
          </div>
        </div>
      ))}


      <br/>
      <h2 className="meal2">ناهار</h2>


      {lunchItems.map((de, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="parentdiv">
            <div className="divimage mt-3" style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }}>
              <img src={de.imageURL} alt={de.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
            </div>
            <p className="mealfood">{de.name}</p>
            <p className="textprice"><span>تومان</span> {de.price} </p>
          </div>
        </div>
      ))}


<br/>
      <h2 className="meal2">شام</h2>


      {dinnerItems.map((de, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="parentdiv">
            <div className="divimage mt-3" style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }}>
              <img src={de.imageURL} alt={de.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
            </div>
            <p className="mealfood">{de.name}</p>
            <p className="textprice"><span>تومان</span> {de.price} </p>
          </div>
        </div>
      ))}




<br/>
      <h2 className="meal2">دسر</h2>


      {dessertItems.map((de, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="parentdiv">
            <div className="divimage mt-3" style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }}>
              <img src={de.imageURL} alt={de.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
            </div>
            <p className="mealfood">{de.name}</p>
            <p className="textprice"><span>تومان</span> {de.price} </p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Allmeal;