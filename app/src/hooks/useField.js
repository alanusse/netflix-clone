import { useState } from 'react'

const useField = ({
  type,
  initialValue = '',
  placeholder
}) => {
  const [value, setValue] = useState(initialValue)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChange = e => {
    setValue(e.target.value)
  }

  const removeError = () => setErrorMessage(null)

  const resetValue = () => setValue('')

  return {
    type,
    value,
    placeholder,
    onChange,
    errorMessage,
    setErrorMessage,
    removeError,
    resetValue
  }
}

export default useField
