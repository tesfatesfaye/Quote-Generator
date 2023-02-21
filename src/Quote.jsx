import './App.css'
import {ReactComponent as Quotes} from "./assets/quotes.svg"
function Quote(props){
   
   
   
    return(
        <div className='quoteDiv'> 
        
        <h2 className={`hOne ${props.changeClass ? "hide" : ""}`}  style={{color:props.colorValue}}>
            <Quotes fill={props.colorValue} fillOpacity={1}stroke={props.colorValue} width={20} height={30} />
              {props.text}</h2>
       
        </div>
    )
}

export default Quote