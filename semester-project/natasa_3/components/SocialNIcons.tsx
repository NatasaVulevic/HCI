import Image from "next/image";
import slika11 from "/public/image 9.png";
import slika22 from "/public/image 10.png";
import slika33 from "/public/image 11.png";



const SocialnIcons=()=>{
    return(
        <div className="flex  ">
        <Image  className="h-10 w-10 m-4" src= {slika11} alt="link"/>
        <Image className="h-10 w-10 m-4" src= {slika22} alt="facebook"/>
        <Image className="h-10 w-10 m-4" src= {slika33} alt="instagram"/>
        </div>
    );
};
export default SocialnIcons;