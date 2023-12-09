const FooterItem=({title,content}:{title:string,content:string[]})=>{
       return(
        <div className="mr-10 mt-6 ms-6 mb-6 md:m-12 text-white">    
    
            <div className="text-m font-medium mb-2">
                {title}
            </div>      
            <ul >
                {content.map( (content, index) => (
                <li key={index}> {content} </li>) )
                   }
            </ul>            
    </div>
    );
};
export default FooterItem;

