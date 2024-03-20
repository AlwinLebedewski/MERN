import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyInput from './MyInput'

function App() {
const[ data, setdata] = useState("poczatek")

  return (
    <>
    <div>
    
      <h1>Pobieranie danych</h1>
      <h2>dane pobrane od dziecka:{data}</h2>
      <MyInput changeData={setData}/>
     
    </div>
    </>
  )
}

export default App
