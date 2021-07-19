import React from 'react'

import {Ts247MathFormula } from 'ts247_math_formula'
import 'ts247_math_formula/dist/index.css'

const App = () => {
  const getCode = (code) => {
    console.log(code);
  }
  return(
    <>
      <Ts247MathFormula getCode={(code) => getCode(code)}/>
    </>
  ) 
}

export default App
