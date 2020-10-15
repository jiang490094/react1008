// 導入其它的模組
import React, { useState } from 'react'

const [twd, setTwd] = useState(0)
const [usd, setUsd] = useState(0)

const twd2Usd = (twd) => (twd * 0.0343).toFixed(4)
// const usd2Twd = (usd) => (usd > 0 ? (usd / 0.0343).toFixed(4) : 0)

function MyButtonOne(props) {
  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(e) => {
          // 先得到更動後的值
          const newTwd = e.target.value
          // 再設定兩個 
          setTwd(newTwd)
          setUsd(twd2Usd(newTwd))
        }}
      />
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOne
