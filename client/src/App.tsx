import { Button, Text } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let valid = true
    const testServer = async () => {
      const response = await axios.get('/health')
      if(valid){

        alert(response.data)
      }
    }
    testServer()
    return () => {
      valid = false
    }
  },[])
  return (
    <div className="App">
      <Text data-testid="count-txt">Count is {count}</Text>
      <Button onClick={() => setCount((c) => c + 1)} data-testid="count-btn">
        Increase count
      </Button>
    </div>
  );
}

export default App
