import { useState, useEffect } from 'react'
import { Text } from 'react-native'

const Relogio = () => {
  const [hora, setHora] = useState<Date>(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return <Text>{hora.toLocaleTimeString()}</Text>
}

export default Relogio