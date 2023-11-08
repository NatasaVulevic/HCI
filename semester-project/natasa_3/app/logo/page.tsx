import { Notable } from 'next/font/google';

function Logo() {
    const notable = Notable({
        weight: '400',
        subsets: ['latin'],
        
      })
      
    return (
        <div className={notable.className}>
           The shop
        </div>
    );
}
export default Logo;