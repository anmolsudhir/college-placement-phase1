import TopBar from '@/components/topbar/TopBar'
import FormSection from '@/components/formsection/FormSection'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

export default function Form (){
  const theme = useSelector((state : RootState) => state.theme.theme)

  return  (<Container $theme={theme}>
            <TopBar/>
            <FormSection/>
          </Container>)
}