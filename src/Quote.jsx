import './App.css'
import { useEffect ,useRef} from 'react'
import {ReactComponent as Quotes} from "./quotes.svg"
function Quote(props){
    const ref=useRef(null)
   
    useEffect(()=>{
        
        ref.current.classList.add("invisible")
        setTimeout(()=>{
          
            ref.current.classList.remove("invisible")
        },200)
       
    },[props.text])

    return(
        <div className='quoteDiv'> 
        
        <h2 ref={ref}className='hOne' style={{color:props.colorValue}}><Quotes fill={props.colorValue} fillOpacity={1}stroke={props.colorValue} width={20} height={30} />  {props.text}</h2>
       
        </div>
    )
}

export default Quote