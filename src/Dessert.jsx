import React from "react";
import { Link, Router } from "react-router-dom";


function Dessert(){



        const dessert=[
            {name:'دسر ترایفل  ' , id:'1', price:'220000',imageURL:require('./picture/traifel.jpeg')},
            {name:' دسر توت فرنگی ' , id:'2', price:'220000',imageURL:require('./picture/deser-toot-farangi-min.jpg')},
            {name:'   دسر فرنگی شکلاتی ' , id:'3', price:'240000',imageURL:require('./picture/farangi-sh.jpg')},
         
            ]
    
    
    
            return (
                <div className="row ">
                    {dessert.map((de, index) => (
                        <div  key={index} className=" col-12 col-sm-6 col-md-4  col-lg-3 ">
                          <div className="parentdiv " >
                          <div className="divimage mt-3" style={{width:'100%' , maxwidth:'250px',margin:'0 auto'}}>
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
    
    
    export default Dessert;


