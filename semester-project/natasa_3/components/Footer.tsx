import FooterItem from "./FooterItem";
import SocialnIcons from "./SocialNIcons";
const Footer=()=>{
    return(
        <footer className=" bg-slate-800 text-white p-2 " >
            <div className=" grid grid-cols-2 md:grid-cols-5  ">
        
                <div className="">
                    <FooterItem title={"ABOUT US"} content={["About us", "Join our team"]}/>
                </div> {/*  md:ml-0*/}
                <div className="md:relative md:right-12"> 
                        <FooterItem title={"CUSTOMER SERVICE"} content={["Customer information", "Delivery","Returns"]}/>
                </div>{/*  md:mr-0 relative right-12*/}
                <div className="">
                    <FooterItem title={"CONTACT"} content={["Contact us", "Find store","Book appointment","As a professional"]}/>
                </div> {/* flex justify-center */}
            
                <div className="  content-center ml-6  md:col-start-5 md:col-end-6 md:content-end">
                    <SocialnIcons />
                </div>   
                  {/*  grid col-start-2 col-end-3relative items-end m-2 md:right-8*/}    
            </div>
  
        <div className="flex justify-center">
               copyright © 2023 nateo
        </div>
  
      </footer>
    )
}
export default Footer;