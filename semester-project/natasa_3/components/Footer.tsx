import FooterItem from "./FooterItem";
import SocialnIcons from "./SocialNIcons";
const Footer=()=>{
    return(
        <footer className=" bg-slate-800 text-white p-2 " >
        <div className=" grid grid-cols-2 md:grid-cols-5 p-2 ">
  
       <div className="md:ml-0">
           <FooterItem title={"ABOUT US"} content={["About us", "Join our team"]}/>
        </div>
           <div className="md:mr-0 relative right-12"> 
            <FooterItem title={"CUSTOMER SERVICE"} content={["Customer information", "Delivery","Returns"]}/></div>
           <FooterItem title={"CONTACT"} content={["Contact us", "Find store","Book appointment","As a professional"]}/>
  
          <div className="  items-end m-2 grid col-start-2 col-end-3 md:col-start-5 md:col-end-6 relative md:right-8 ">
              <SocialnIcons />
            </div>         
       </div>
  
        <div className="flex justify-center">
               copyright © 2023 nateo
        </div>
  
      </footer>
    )
}
export default Footer;