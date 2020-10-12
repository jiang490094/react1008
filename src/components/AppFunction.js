// 導入其它的模組
import React, { useState } from 'react'

function AppFunction() {
  // 呼叫useState勾子，設定初始化值為0，total跟setTotal為解構賦值，各接一個值
  //解構賦值是減寫法，專為物件跟陣列設計ex.(原本)const arr = [1,2].let a = arr[0].let b = arr[1]。(解構賦值版)const [a,b]=arr
  // 回傳一組getter(獲取值)和setter(設定值)陣列
  //useState是鉤子就像函式
  const [total, setTotal] = useState(0)

  // return 值即元件的 render 方法，只能有一個根元素進行render
  // 多個元件需要用<>...</>(React.Fragment)包住
  return (
    <>
      {/* JSX語法中加註解 */}
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  )
}

// 輸出元件(函式)
export default AppFunction
