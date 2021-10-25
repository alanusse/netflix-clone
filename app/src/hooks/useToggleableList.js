import { useState } from 'react'

const useToggleableList = () => {
  const [showed, setShowed] = useState(null)

  const setActive = id => {
    showed === id
      ? setShowed(null)
      : setShowed(id)
  }

  return {
    showed,
    setActive
  }
}

export default useToggleableList
