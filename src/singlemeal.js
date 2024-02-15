import { useParams } from "react-router";
import singlemu from "./dateSm";  

const Singlemeal=()=>{

   
    const { smid } = useParams();
    const dsm = singlemu().find(item => item.id === smid);


    return(

        <div >
       <span style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center" ,}} > :آموزش<p style={{display:"flex",justifyContent:"center",color:"brown",marginRight:"10px"}}>{dsm.name}</p></span>


       <p className="Textm">{dsm.discribe}</p>



        </div>
    )

}


export default Singlemeal;