import { useState,useEffect } from 'react'
import Quote from './Quote'
import './App.css'

function App() {
  
 const[quote,setQuote]=useState({})
 const[quoteData, setQuoteData]=useState(()=>[])
  
  useEffect(()=>{
   async function fetchReq(){
    const res= await fetch("https://type.fit/api/quotes");
    const data=await res.json()
     setQuoteData(data)
    
   }
    
    fetchReq()

 },[])

 useEffect(()=>{
  console.log(quoteData)
  if(quoteData.length>0){
    const randomValue=Math.floor(Math.random()*quoteData.length)
    setQuote(quoteData[randomValue])
   
  }
 
 },[quoteData])

function nextQuote(){
  const randomValue=Math.floor(Math.random*quoteData.length)
  setQuote(quoteData[randomValue])
}
  return (
    <div className="App">
      <div className='wrapper'>
      <Quote
       text={quote.text}
       author={quote.author}
      />
      </div>
      
    
      </div>
  )
}

export default App
