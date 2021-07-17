import React from 'react'
import style from './styles.module.css'
import $mathjaxData from './mathJax.json'

// 
export const Ts247MathFormula = ({handleGetCode}) => {
  return (
      <div className={style.ts247MathFormula}>
          <ul>
              {
                  $mathjaxData.map((item,index) => {
                    return(
                      <li key={index} onClick={() => handleGetCode(item.value)}>
                        <span dangerouslySetInnerHTML={{__html: item.image}} ></span>
                      </li>
                    )
                  })
              }

          </ul>
      </div>
  );
}