import { useState,useEffect,useRef} from 'react'
import {ReactComponent as Tumbler}  from'./tumbler.svg'
import {ReactComponent as Twitter} from './twitter.svg'
import Quote from './Quote'
import './App.css'

function App() {
  
 const[quote,setQuote]=useState({})
 const[quoteData, setQuoteData]=useState(()=>[])
 const [colorValue,setColorValue]=useState(randomNumber())
 const[changeClass,setChangeClass]=useState(false)
 const [hovered, setHovered]=useState(false)
const ref=useRef(null)
  useEffect(()=>{
   async function fetchReq(){
    const res= await fetch("https://type.fit/api/quotes");
    const data=await res.json()
     setQuoteData(data)
    
   }
    
    fetchReq()

 },[])


 useEffect(()=>{
    if(quoteData.length>0){
    const randomValue=Math.floor(Math.random()*quoteData.length)
    setQuote(quoteData[randomValue])
    
   
  }
 
 },[quoteData])

 useEffect(()=>{
  document.body.style.backgroundColor=colorValue
 },[quote])

  function randomNumber(){
    const randomNum=()=>Math.floor(Math.random()*128)
    return (`rgb(${randomNum()},${randomNum()},${randomNum()}`)

  }
function nextQuote(){
  const randomValue=Math.floor(Math.random()*quoteData.length-1)
  const value=quoteData[randomValue]
  setChangeClass(prev=>!prev)
  setTimeout(() => {
    setQuote(value)
    setColorValue(randomNumber())
   
  }, 600);
 
  setTimeout(() => {
    setChangeClass(prev=>!prev)
  }, 600);

}
function checkHover(){
  setHovered(prev=>!prev)
}
 


  return (
    <div className="App" >
      <div className='wrapper'>
    
      <Quote
      {...quote}
       colorValue={colorValue}
       changeClass={changeClass}
       
          />
        <div className={`author  ${changeClass ? "hide" : ""}`}  style={{color:colorValue}}><span >- {quote.author}</span></div>
      <div className='buttonDiv'>
                <div className='links'  style={{backgroundColor: colorValue}}> <Tumbler fill="white"  height={25}/></div>
        <div className='links'  style={{backgroundColor: colorValue}}>  <Twitter fill="white" height={25} /></div>
        <button className='NextQuote'  onMouseEnter={checkHover} onMouseLeave={checkHover}style={{backgroundColor:colorValue}} onClick={nextQuote}>Next Quote</button>
        </div>  
        </div>
        <div className='footer' > <span>by</span><a href="https://github.com/tesfatesfaye">   Tesfa</a></div>
      </div>
      
    
      
  )
}

export default App
