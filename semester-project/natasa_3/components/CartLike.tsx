import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";

const CartLike=()=>{
    return(
<ul className="inline flex ">
<li> <Link href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
<li> <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li> 
</ul>
);
};
export default CartLike;