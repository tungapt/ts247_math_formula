# ts247_math_formula

> module export math formula

[![NPM](https://img.shields.io/npm/v/ts247_math_formula.svg)](https://www.npmjs.com/package/ts247_math_formula) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ts247_math_formula
```

## Usage

```jsx
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
```

## License

tungapt © [tungld](https://github.com/tungld)
# ts247_math_formula
