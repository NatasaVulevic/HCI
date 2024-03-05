import { Notable } from 'next/font/google';

const notable = Notable({
    weight: '400',
    subsets: ['latin'],
 })

function Logo(){  
    return (
        <div className={notable.className} >
           The shop
        </div>
    );
}
export default Logo;
