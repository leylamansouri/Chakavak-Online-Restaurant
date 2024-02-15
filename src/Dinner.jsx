import React from "react";
import { Link } from "react-router-dom";


const Dinner=()=>{

    const dinner=[
        {name:'کشک بادمجان ' , id:'1', price:'220000',imageURL:require('./picture/kashkb.jpg')},
        {name:'میرزا قاسمی ' , id:'2', price:'220000',imageURL:require('./picture/mirza-ghassemi.jpeg')},
        {name:' آبدوغ و خیار ' , id:'3', price:'240000',imageURL:require('./picture/ab-doogh-khiyar.jpg')},
        {name:'  خوراک مرغ ' , id:'4', price:'290000',imageURL:require('./picture/khoresh-morgh.jpg')},
        {name:'  بشقاب سبزیجات ' , id:'5', price:'320000',imageURL:require('./picture/veg.jpg')}
        
        ]



        return (
            <div className="row">
                {dinner.map((d, index) => (
                <div key={index} className="col-12 col-sm-6  col-md-4 col-lg-3">
                <div className="parentdiv">
                    <div className="divimage mt-3" style={{ width: '100%', maxWidth: '230px', margin: '0 auto' }}>
                        <img src={d.imageURL} alt={d.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
                    </div>
                    <p className="mealfood">{d.name}</p>
                    <p className="textprice">
                        <span>تومان</span> {d.price}
                    </p>
                </div>
            </div>
            
                ))}
            </div>
        );

}


export default Dinner;