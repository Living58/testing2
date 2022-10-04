import { useState } from 'react'

export const Counter = () => {

const [color, setColor] = useState("blue");
    
    function colorChange() {
        setColor("purple");
    }

    function pinkChange() {
        setColor("pink");
    }

  return (
    <div>
      <p style={{ color }}>Farge</p>
      <button onClick={colorChange}>Purple</button>
      <button onClick={pinkChange}>Pink</button>
    </div>
  )
}