import Link from "next/link";

function Cart() {
    return (
        <main className="flex flex-col items-center text-4xl p-14 h-full">
            
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  className="w-80 h-80 fill-blue-950/50">
               
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 
            48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  <p className="text-xl text-blue-950 font-serif text-center m-4 "><div className="font-bold" > Your Cart is empty!</div> <br/>
                   Your cart is ready to be filled with the furniture and decor that will make your space uniquely yours.  </p>
                   {/*  <svg xmlns="http://www.w3.org/2000/svg"  className="h-8 w-8  fill-blue-950/50 " viewBox="0 0 24 24">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
</svg>  */}
                    <Link  className="px-5 py-2 " href="/app/all/page.tsx" >
                  <button className="px-5 py-2 m-2 grid place-self-center bg-blue-900 text-white md:text-xl rounded-sm" >Shop now</button></Link>
                </main>
    );
}
export default Cart;
