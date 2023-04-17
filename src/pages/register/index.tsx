import { useState } from 'react'
import TopBar from '@/components/topbar/TopBar'
import FormSection from '@/components/formsection/FormSection'
import { Container } from './styles'

export default function Form (){

  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return  <Container $theme={theme}>
            <TopBar handleTheme={handleTheme} theme={theme}/>
            <FormSection theme={theme}/>
          </Container>
}