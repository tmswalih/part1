import { useState } from 'react'

const Statistics = ({good,neutral,bad,total}) => {

  if (total==0){
    return(
      <div>
        <br />
        No feedback given
      </div>
    )
  }
  else{

  
  
  return(
    <div>
      
      <h1>statistics</h1>
      <p>good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
     
      all {total} <br></br>
      average {(good-bad)/total}<br></br>
      positive {(good/total)*100}%</p>
    </div>
  )
}
}




const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] =useState(0)
  

  const handleGood = () =>{
    const updatedGood = good + 1;
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
  }  
   

  const handleneutral = () =>{
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good+updatedNeutral+bad);
  }

  const handlebad = () =>{
    const updatedBad = bad + 1;
    setBad(updatedBad)
    setTotal(good+neutral+updatedBad)
  }
  console.log('Totalfin',total)
  return (
    <div>
      <h1>give feedback</h1><br />
      <button onClick={handleGood}>good</button>
      <button onClick={handleneutral}>neutral</button>
      <button onClick={handlebad}>bad</button>

      <Statistics good ={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

export default App