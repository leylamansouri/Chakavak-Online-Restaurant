import React from "react";
import { Link } from "react-router-dom";


function Breakfast(){
    const breakfast=[
        {name:'املت',id:'1',price:'120000',imageURL:require('./picture/omlet.jpg')},
        {name:'کره و مربا',id:'2', price:'140000',imageURL:require('./picture/moraba2.jpg')},
        {name:'چای و پنیر',id:'3',price:'150000',imageURL:require('./picture/cheese2.jpg')},
        {name:'صبحانه ویژه چکاوک',id:'4',price:'160000',imageURL:require('./picture/spasial2.jpg')},
        {name:'نیمرو و چای ',id:'5',price:'145000',imageURL:require('./picture/breakfastw.jpg')}


    ]
    return (
        <div className="row">
            {breakfast.map((b, index) => (
                <div  key={index} className="col-12 col-sm-6  col-md-4 col-lg-3 ">
                  <div className="parentdiv " >
                  <div className="divimage mt-3" style={{ width: '100%', maxWidth: '230px', margin: '0 auto' }}>
                        <img src={b.imageURL} alt={b.name} style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
                    </div>                    <p className="mealfood">{b.name}</p>
               <p className="textprice"><span>تومان</span> {b.price} </p>
                  </div>
                </div>
            ))}
        </div>
    );
}

export default  Breakfast;