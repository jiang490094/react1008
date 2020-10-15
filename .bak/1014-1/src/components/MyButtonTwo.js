// 導入其它的模組
import React, { useState } from 'react'

const [twd, setTwd] = useState(0)
const [usd, setUsd] = useState(0)

// const twd2Usd = (twd) => (twd * 0.0343).toFixed(4)
const usd2Twd = (usd) => (usd > 0 ? (usd / 0.0343).toFixed(4) : 0)

function MyButtonTwo(props) {
  return (
    <>
      美金：
      <input
        type="text"
        value={usd}
        onChange={(e) => {
          // 先得到更動後的值
          const newUsd = e.target.value
          setUsd(newUsd)
          setTwd(usd2Twd(newUsd))
        }}
      />
    </>
  )
}

// 輸出元件(函式)
export default MyButtonTwo
