// 導入其它的模組
import React, { useState } from 'react'

function App(props) {
  const [hieght, setHieght] = useState(0)
  const [weight, setWeight] = useState(0)

  const weight2Hieght = (weight) => (weight / (Hieght * Hieght)).toFixed(2)
  const hieght2Weight = (hieght) => (weight / (Hieght * Hieght)).toFixed(2)

  return (
    <>
      身高：
      <input
        type="text"
        value={hieght}
        onChange={(e) => {
          // 先得到更動後的值
          const newHieght = e.target.value / 100
          // 再設定兩個需要設定的狀態值
        }}
      />
      <br />
      體重：
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          // 先得到更動後的值
          const newWeight = e.target.value
          // 再設定兩個需要設定的狀態值
          setWeight(newWeigh)
          setHight(twd2Usd(newTwd))
        }}
      />
      <br />
      <button>確認</button>
      <br />
      <input></input>
    </>
  )
}

// 輸出元件(函式)
export default App


import React, { useState } from 'react'

function BMI(props) {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calcBMI = (h, w) =>
    h > 0 && w > 0 ? (w / Math.pow(h / 100, 2)).toFixed(1) : 0

  return (
    <>
      你目前的身高（公分）：
      <br />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      你目前的體重（公斤）：
      <br />
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <button onClick={() => setBmi(calcBMI(+height, +weight))}>計算</button>
      <br />
      BMI：{bmi}
    </>
  )
}

export default BMI
