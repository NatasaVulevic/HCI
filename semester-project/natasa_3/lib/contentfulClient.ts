interface Type{
    id:string;
    category:string;
    subcategory:string;
    name:string;
    price:string;
    currency:string;
    url:string;};
  
   interface ProductItem{
    sys:{id:string;};
    category:string;
    subcategory:string;
    name:string;
    price:string;
    currency:string;
   image:{url:string;};
   };
   
    interface ProductCollResponse{
           itemCollection :{ items:ProductItem[];}
    };

const getAllProducts=`query Item{
    itemCollection{
      items{
        sys{id}
        category
        subcategory
        name
        price
        currency
        
        image{url}
    }}
}`;
  //const CONTENTFUL_SPACE_ID="g1r7hbuovrtj";
//const CONTENTFUL_ACCESS_TOKEN="rf1MhBuoDIpZjyJUlZ6mL7YpNz_PxC6SNu489_b8HFw";  
//const CONTENTFUL_ACCESS_TOKEN="AaDtne2bnrpGWYEa9OIFmyotLeKQMvPNFXFYMZbexsI";  


const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const GetAll = async ():Promise<Type[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: getAllProducts }),
      });
  //ona stala
      // Get the response as JSON, cast as ProductCollectionResponse
       const body = (await response.json()) as {
        data: ProductCollResponse;
      };
  
      // Map the response to the format we want
      const produkti: Type[] =
        body.data.itemCollection.items.map((item) => ({
         id: item.sys.id, 
         category: item.category,
         subcategory: item.subcategory,
         name:item.name,
         price:item.price,
         currency:item.currency,
         url: item.image.url,
         
        })) ;  

  
      return produkti;
    } catch (error) {
      console.log(error);
  
      return [];
    } 
  };
    //export default GetAll;
      const Proizvodi= async()=>{
      const Proizvodi=await GetAll(); 
     // console.log(Proizvodi);
      const Bedroom = Proizvodi.filter((proizvod)=>proizvod.subcategory=="Bedroom");
      const Kuhinja_proizvodi=Proizvodi.filter((proizvod)=>proizvod.subcategory=="Kitchen");
      const Living_proizvodi=Proizvodi.filter((proizvod)=>proizvod.subcategory=="Living_room");

     
      const produkt={Kuhinja_proizvodi,Bedroom,Living_proizvodi,Proizvodi};
      


      return produkt;     
      
    };
    export default Proizvodi;  