import { useState } from 'react'
import TopBar from '@/components/topbar/TopBar'
import FormSection from '@/components/formsection/FormSection'
import { Container } from './styles'

export default function Form (){

  const [theme, setTheme] = useState('light')
  const [mobile, setMobile] = useState(false)

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleMobile = () => {
    setMobile(mobile ? false : true)
  }

  return  <Container $theme={theme}>
            <TopBar handleMobile={handleMobile} handleTheme={handleTheme} theme={theme}/>
            <FormSection handleMobile={handleMobile} mobile={mobile} theme={theme}/>
          </Container>
}