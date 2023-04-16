import { useState } from 'react'
import TopBar from '@/components/topbar/TopBar'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:brown;
    width: 100%;
    height: 100%;
`

export default function Form (){

  const [theme, setTheme] = useState('dark')

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return  <Container>
            <TopBar handleTheme={handleTheme} theme={theme}/>
          </Container>
}