import { useState,useEffect,useRef, Component} from 'react'
import {FaTumblr} from 'react-icons/fa'
import {ReactComponent as Twitter} from './assets/twitter.svg'
import Quote from './Quote'
import './App.css'

function App() {
  
 const[quote,setQuote]=useState({})
 const[quoteData, setQuoteData]=useState(()=>[])
 const [colorValue,setColorValue]=useState(()=>randomNumber())
 const[changeClass,setChangeClass]=useState(false)

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
 const Components={
  FaTumblr:()=>FaTumblr
 }

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
                <div className='links'  style={{backgroundColor: colorValue}}> <FaTumblr color='white' style={{fill: 'white'}} htmlColor ="pink" size='1.5rem'/></div>
        <div className='links'  style={{backgroundColor: colorValue}}>  <Twitter fill="white" height={25} /></div>
        <button className='NextQuote'  style={{backgroundColor:colorValue}} onClick={nextQuote}>Next Quote</button>
        </div>  
        {Components.FaTumblr}
        </div>
        <div className='footer' > <span>by</span><a href="https://github.com/tesfatesfaye">   Tesfa</a></div>
      </div>
      
    
      
  )
}

export default App
