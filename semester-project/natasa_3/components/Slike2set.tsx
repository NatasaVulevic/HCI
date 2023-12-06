import Image from "next/image";
import slika6 from 'public/Frame 30.png'
import slika7 from 'public/Frame 30 (1).png'
import slika8 from 'public/Frame 49.png'



const Slike2set=()=>{
    return(
    <div className=' my-20 md:flex w-full '>
        
        {/* <Image className=" ms:hidden md:h-80 " src={slika6} alt="slika"/> */}
        <Image className="ms:h-40 md:h-80 md:flex-1" src={slika7} alt="slika"/>
        <Image className="ms:h-40  md:h-80 md:flex-1" src={slika8} alt="slika"/>

     
    </div>
    )
    
}
export default Slike2set;