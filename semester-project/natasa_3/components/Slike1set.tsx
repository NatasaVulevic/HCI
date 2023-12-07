import slika5 from '/public/slika1.jpg'
import slika2 from '/public/skika5.jpg'
import slika3 from '/public/prima-spavanje.jpg'
import slika4 from '/public/etherma-grijanje-terasa.jpg'

import Image from "next/image";
//spac
const Slike1set=()=>{
    return(
    <div className='md:flex w-full md:space-0.5'>
      
         <div className='flex sm:space-1'>
            <Image className='box-border md:h-72 md:w-72  h-36 w-36 mx-1.5' src={slika5} alt="slika"/>
            <Image className='box-border md:h-72 md:w-72 h-36 w-36 mx-1.5' src={slika2} alt="slika"/>
        </div>
        <div className='flex my-2.5 md:my-0'>
            <Image className='box-border md:h-72 md:w-72 h-36 w-36 mx-1.5' src={slika3} alt="slika"/>
            <Image className='box-border md:h-72 md:w-72 h-36 w-36 mx-1.5' src={slika4} alt="slika"/>
        </div>
       
      
     
    </div>
    )
}
export default Slike1set;
 {/*   <Image className='shrink h-72 w-72' src={slika5} alt="slika"/> */}
  {/*  <Image className='box-border h-72 w-72' src={slika2} alt="slika"/> */}
        {/* <Image className='box-border h-72 w-72'src={slika3} alt="slika"/>
        <Image className='box-border h-72 w-72'src={slika4} alt="slika"/> */}  
        
        
        {/*  <div className='box-border md:h-72 md:w-72 sd:h-36 sd: w-36 mx-1.5'>
        <Image className='object-fill md:h-72 w-72 ' src={slika2} alt="slika"/></div>

      
         <div className='box-border h-72 w-72 mx-1.5'>
        <Image className='object-fill h-72 w-72 ' src={slika3} alt="slika"/></div>
         <div className='box-border h-72 w-72 mx-1.5'>
        <Image className='object-fill h-72 w-72 ' src={slika4} alt="slika"/></div> */}