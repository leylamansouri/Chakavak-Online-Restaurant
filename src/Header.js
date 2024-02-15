import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link , Outlet} from "react-router-dom"

 function Header(){



    return(
       <div >
         <h3 className='d-flex justify-content-center mt-5 pb-2'>رستوران چکاوک</h3>
        
         <div className='underline'></div>
                <nav className=' navbar p-3 d-flex justify-content-center flex-row-reverse'>
                      <Link to="/Allmeal"> تمام وعده ها</Link>
                      <Link to="/Breakfast">صبحانه</Link>
                      <Link to="/Lunch">ناهار</Link>
                      <Link to="/Dinner">شام</Link>
                      <Link to="Dessert">دسر</Link>
                </nav>
<Outlet/>

       </div>




    )
}
export default Header;