import React,{useState} from 'react'
import style from './styles.module.css'
import $mathjaxData from './mathJax.json'

export const Ts247MathFormula = ({getCode}) => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
    getCode(code)
  } 
  return (
      <div className={style.ts247MathFormula}>
          <div className={style.previewMathJax}>{code}</div>
          <ul>
              {
                  $mathjaxData.map((item,index) => {
                    return(
                      <li key={index} onClick={() => setCode(item.value)}>
                        <span dangerouslySetInnerHTML={{__html: item.image}} ></span>
                      </li>
                    )
                  })
              }
          </ul>
          <textarea value={code} onChange={(e) => handleChange(e)}></textarea>
      </div>
  );
}