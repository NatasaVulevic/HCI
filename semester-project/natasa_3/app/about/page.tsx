const playfairDisplay = Playfair_Display({
    weight: ["400", "800"],
    subsets: ["latin"],
    variable: "--font-playfair",
  });
import { cn } from "@/lib/utils";
import {
    Inter,
    Roboto,
    Roboto_Condensed,
    Playfair_Display,
  } from "next/font/google";
  //import slika1 from "/public/modern_220318-special-orders2357.jpg"
  import slika1 from "/public/dnevna12.jpg"  
import Image from "next/image";
 
 function About() {
    return(
        <div className=" flex lg:flex-row flex-col m-8 sm:my-10 sm:mx-8 lg:justify-around">
           
                <div className=" bg-blue-950/60 p-10 h-2/3 self-center lg:self-start mt-8 lg:mt-0 lg:mr-4">
                   <Image src={slika1} alt="aa"/>                    
                </div>
            
            <div className="lg:w-1/2 w-full order-first lg:order-last bg-white lg:ml-4 p-4">

                <div className={cn(" text-center text-4xl sm:text-5xl font-serif font-extrabold text-blue-950 sm:m-12 m-10 ", 
                          playfairDisplay.className)}>
                    About us
                </div>

                <div className=" pb-8 px-4 text-black">
                Our journey began with a simple belief that furniture is not just about function; it&apos;s a reflection of your 
                lifestyle, a canvas for self-expression, and a key to creating spaces you&apos;ll love.<p><br/>Founded by two enthusiasts,
                 Nateo was born out of a shared vision to redefine the furniture shopping experience. Our mission is to 
                 curate a collection that goes beyond the ordinary, offering you a diverse range of styles, materials, and inspirations.
                  Every piece we showcase is a testament to our dedication to craftsmanship, innovation, and timeless design.</p><br/><p>
At Nateo, we believe in the power of spaces to inspire, comfort, and tell a story. Our team of passionate designers and
 furniture enthusiasts meticulously selects each item in our collection, ensuring that it not only meets our high standards but also resonates 
 with the varied tastes of our discerning clientele.
More than just a furniture store, we aspire to be your trusted partner in creating living environments that reflect your personality and aspirations.
 Our commitment to customer satisfaction goes beyond the sale, we are here to assist, inspire, and make your journey to a well-furnished home or
  workspace enjoyable and fulfilling.</p><br/><p>
 Learn about our values, meet the faces behind the brand, and discover the stories that make each piece in our collection truly special.
 Thank you for choosing Nateo, where every piece is 
not just furniture; it&apos;s an expression of you.</p>
                </div>
            </div>
        </div>
    )
};
export default About;