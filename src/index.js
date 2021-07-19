import React,{useState,useEffect} from 'react'
import style from './styles.module.css'
import $mathjaxData from './mathJax.json'

export const Ts247MathFormula = ({getCode}) => {
  const [code, setCode] = useState("");

  const handleSetCode = (value) => {
    setCode(code+value);
    getCode(code)
  }

  const handleChange = (e) => {
    setCode(e.target.value)
    getCode(code)
  }

  useEffect(() => {
    getCode(code);
  });
  
  return (
      <div className={style.ts247MathFormula}>
          <div className={style.previewMathJax}>{code}</div>
          <ul className={style.listMathJax}>
              {
                  $mathjaxData.map((item,index) => {
                    return(
                      <li key={index} onClick={() => handleSetCode(item.value)}>
                        <span dangerouslySetInnerHTML={{__html: item.image}} ></span>
                      </li>
                    )
                  })
              }
          </ul>
          <textarea className={style.inputMathJax} placeholder="Nhập công thức" value={code} onChange={(e) => handleChange(e)}></textarea>
      </div>
  );
}