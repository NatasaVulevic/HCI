import Image from "next/image";
import slika31 from "/public/logo4.jpg";
import Link from "next/link";


const Logo=()=>{
    return(       
      <Link href="/"> <Image  className="h-16 w-28 rounded-sm" src= {slika31} alt="link"/> </Link>     
    )
}
export default Logo;
