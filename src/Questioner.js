import {useEffect, useRef } from "react";

const Questioner = ({values,setValues,location,prompts,handleMove,loading,error,setError}) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [prompts[location]]: e.target.value
    })
  }

  const keyDownHandler = event => {
    if (event.key === 'Enter' || event.key === 'Tab'){
      handleMove("inc");
    }
  }

  useEffect(() => {
    inputRef.current.focus();
    document.addEventListener("keydown",keyDownHandler)
    return () => {
      document.removeEventListener("keydown",keyDownHandler)
    }
  },[values,location])

  let loc = prompts[prompts[location]]

  // don't render this if loading
  if (loading) {
    return null
  }

  return (
    <section id="Questioner" >
      <label name={prompts[location]}>
        A {prompts[location]}
      </label>
      <input 
        ref = {inputRef}
        type="text" 
        value={values[`${prompts[location]}`] ? 
            values[`${prompts[location]}`] 
            : ""
          } 
        onChange={(e) => handleChange(e)}
        className={error && "input-error"}
      />
    </section>
  )
}

export default Questioner;