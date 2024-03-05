import { Notable } from 'next/font/google';
import { cn } from "@/lib/utils";


const notable = Notable({
    weight: '400',
    subsets: ['latin'],
 })

const Logo=()=>{
    return(
        <div className={notable.className}>
        The shop
     </div>
    )
}
export default Logo;