import React, { useState, useEffect, useRef } from 'react'

function MyTimerFunc(props) {
  const [date, setDate] = useState(new Date())
  const [total, setTotal] = useState(0)
  const [on, setOn] = useState(false)
  const [value, setValue] = useState(1)

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      window.clearInterval(timerID)
    }
  }, [date])

  // 錯誤用法
  // 需要改用useInterval
  // 參考：https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
  const handleClickEverySeconds = (increment) => {
    setOn(!on)
    setValue(increment)
    // setInterval(() => {
    //   console.log('handleClickEverySeconds')
    //   setTotal(total + value)
    // }, 1000)
  }

  useInterval(() => {
    if (on) {
      setTotal(total + value)
    }
  }, 1000)

  return (
    <>
      <h2>{date.toLocaleTimeString()}</h2>
      <h1 onClick={() => handleClickEverySeconds(2)}>{total}</h1>
    </>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

export default MyTimerFunc
