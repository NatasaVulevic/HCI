import { Inter } from 'next/font/google';
const inter = Inter({
    //weight: '900',
    subsets: ['latin'],
    
  })
const Text1=()=>{
    return(
    <div className='flex justify-center p-15 my-20 text-s md:text-xl font-medium gap-10 space-x-4'>
        <h3 >DISCOVER YOUR PERFECT SPACE</h3>
       </div> )
    };
    export default Text1;