import React from "react";
import { Link } from "react-router-dom";
const Lunch=()=>{
    const lunches=[
{name:'قرمه سبزی' , id:'1', price:'220000',imageURL:require('./picture/gorme.jpg')},
{name:'قیمه بادمجان' , id:'2', price:'220000',imageURL:require('./picture/gheyme (2).jpg')},
{name:'جوجه کباب ' , id:'3', price:'240000',imageURL:require('./picture/jogeh.jpg')},
{name:'کوبیده گوسفندی ' , id:'4', price:'290000',imageURL:require('./picture/kobideh.jpg')},
{name:'ماهی قزل آلا ' , id:'5', price:'320000',imageURL:require('./picture/fish.jpg')}

]


return (
    <div className="row">
        {lunches.map((l, index) => (
            <div  key={index} className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <div className="parentdiv " >
              <div className="divimage mt-3" style={{width:'100%', maxWidth:'230px', margin:'0 auto'}}>
                <img src={l.imageURL} alt={l.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
                </div>
                <p className="mealfood">{l.name}</p>
           <p className="textprice"><span>تومان</span> {l.price} </p>
              </div>
            </div>
        ))}
    </div>
);

}

export default Lunch;