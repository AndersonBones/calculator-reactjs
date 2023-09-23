import { useState } from 'react'
import { Calculator } from './components/Calculator'
import styles from './App.module.css'
import Buttons from './data/Buttons'

function App() {
  

  return (
  
    <Calculator buttons={Buttons}></Calculator>
    
  )
}

export default App
