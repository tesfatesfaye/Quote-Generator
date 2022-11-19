import './App.css'
import { useEffect ,useRef} from 'react'
import {ReactComponent as Quotes} from "./quotes.svg"
function Quote(props){
    const ref=useRef(null)
   
    // useEffect(()=>{
        
    //     ref.current.classList.add("hide")
    //     setTimeout(()=>{
          
    //         ref.current.classList.remove("hide")
    //     },600)
       
    // },[props.text])

    return(
        <div className='quoteDiv'> 
        
        <h2 className={`hOne ${props.changeClass ? "hide" : ""}`} ref={ref} style={{color:props.colorValue}}><Quotes fill={props.colorValue} fillOpacity={1}stroke={props.colorValue} width={20} height={30} />  {props.text}</h2>
       
        </div>
    )
}

export default Quote