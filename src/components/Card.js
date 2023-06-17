import {useState} from "react";
function Card({id,name,info,price,image,removetour}){
    
    const [readmore,setReadmore]=useState(false);
    const description= readmore ? info :`${info.substring(0,200)}....`

    function readmoreHandler()
    {
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            
            <div className="tour-info">
                <div className="tour-details">
                    <h2 className="tour-price">₹ {price}</h2>
                    <h2 className="tour-name">{name}</h2>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
            </div>
            
            
            <button className="btn-red" onClick={()=> removetour(id)}>Not Interseted</button>
            
        </div>
        
        ) 
}
export default Card;