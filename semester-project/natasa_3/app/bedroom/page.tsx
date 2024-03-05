
/* import slika21 from "/public/bed2.jpg"; 
import slika22 from "/public/bed3.jpg"; 
import slika23 from "/public/bed10.jpeg"; 
import slika24 from "/public/bed6.jpg"; 
import slika25 from "/public/bed7.jpeg"; 
import slika26 from "/public/bed8.jpeg"; 
 */
import Proizvod from "@/components/Proizvod";
import Proizvodi from "@/lib/contentfulClient";
interface Type{
    id:string;
    category:string;
    subcategory:string;
    name:string;
    price:string;
    currency:string;
    url:string;};

//import GetAll from "@/lib/contentfulClient";
const  Spavaca_soba = async ()=>{

    /* const Proizvodi=await GetAll(); 
    const Bedroom :Type[]= Proizvodi.filter((proizvod)=>{return(proizvod.subcategory=="Bedroom")}); */
    const proizvodi= await Proizvodi();      
   
    const Bedroom_proizvodi= proizvodi.Bedroom;
    console.log("drugi pokusaj"); 
  
   //console.log(proizvodi.Bedroom);
     
   return(
   <div className="px-6 py-6 grid grid-cols-3 grid-rows-2">
        
    {Bedroom_proizvodi.map((proizvod)=>{return(
       <div key={proizvod.id}> 
        <Proizvod url={proizvod.url}  nazivProizvoda={proizvod.name} cijena={proizvod.price}/>
        </div>
        );})}   
    
    </div>
    );
  };
  export default Spavaca_soba; 