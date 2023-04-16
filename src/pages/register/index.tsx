import { useState } from 'react'
import TopBar from '@/components/topbar/TopBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props : any) => props.$theme === 'light' ? '#F1F1F1' : '#0f0f0f'};
`

export default function Form (){

  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return  <Container $theme={theme}>
            <TopBar handleTheme={handleTheme} theme={theme}/>
          </Container>
}