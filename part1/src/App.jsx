import { use } from 'react'
import { useEffect, useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const StatisticLine = (props) => {
    return (
      <div>
        {props.text} {props.value} 
      </div>
    )
}

const Statistics = (props) => {
   if (props.all === 0) {
    return <div> No feedback given </div>
   }

    return (<div>
      <StatisticLine text="good" value = {props.good}/>
      <StatisticLine text="neutral" value = {props.neutral}/>
      <StatisticLine text="bad" value = {props.bad}/>
      <StatisticLine text="all" value = {props.all}/>
      <StatisticLine text="average" value = {props.average}/>
      <StatisticLine text="positive" value = {props.positive}/>
    </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
   }

   const handleBadClick = () => {
    setBad(bad + 1)
   }

   useEffect(() => {
      setAll(good + neutral + bad)
     }, [good, neutral, bad])

    useEffect(() => {
      if(all > 0) {
       setAverage((good - bad) / all)
       setPositive((good / all) * 100)
      }
    }, [all])

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <h2> statistics </h2>
      <Statistics
         good = {good}
         neutral = {neutral}
         bad = {bad}
         all = {all}
         average = {average}
         positive = {positive}
      />
    </div>
  )
}


export default App