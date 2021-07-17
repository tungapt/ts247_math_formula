import React from 'react'

import {Ts247MathFormula } from 'ts247_math_formula'
import 'ts247_math_formula/dist/index.css'


const getCode = (code) => {
  console.log(code);
}
const App = () => {
  return(
    <>
      <Ts247MathFormula handleGetCode={(code) => getCode(code)} />
    </>
  ) 
}

export default App
