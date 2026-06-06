import { useEffect, useState } from 'react'

function Petals() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const createPetal = () => {
      const id = Date.now() + Math.random()
      const left = Math.random() * 100
      const animationDuration = 5 + Math.random() * 5
      const size = 20 + Math.random() * 15

      setPetals((prev) => [...prev, { id, left, animationDuration, size }])

      setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== id))
      }, animationDuration * 1000)
    }

    const interval = setInterval(createPetal, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="petals">
      {petals.map((petal) => (
        <img
          key={petal.id}
          className="petal"
          src={`${import.meta.env.BASE_URL}cherryblossom.png`}
          alt=""
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Petals
