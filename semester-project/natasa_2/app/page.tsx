import Image from "next/image";
//import styles from "./home.module.css"
import slika1 from "/public/slika4.png";
export default function Home() {
 /*  const divStyle = {    
    backgroundImage: url('/public/slika4'),
  }; */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div  /* className={styles.frame1} */ >
       {/*  <h1 className="text-3xl font-bold mb-8 text-center">Home page</h1> */}
         <Image src={slika1} alt="Slika" />           
      </div>
    </main>
  );
}
//app/slika4.png layout="fill"  <div style={{width: '100%', height: '100%', position: 'relative'}s 
//<Image src="/path/to/image.jpg" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="contain"/>
///* className="mr-2" */