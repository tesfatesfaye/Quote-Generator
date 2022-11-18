import './App.css'

function Quote(props){



    return(
        <div className='quoteDiv'> 
        
        <h1 className='hOne'>"{props.text}</h1>
        
        </div>
    )
}

export default Quote