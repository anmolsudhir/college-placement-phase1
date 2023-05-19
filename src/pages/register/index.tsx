import FormSection from '@/components/formsection/FormSection'
import info from '@/assests/info/info'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import Layout from '@/components/layout/Layout'

export default function Form (){
  const theme = useSelector((state : RootState) => state.theme.theme)
  return (
    <Layout info={info} notSidebar={false}>
      <Container $theme={theme}>
        <FormSection />
      </Container>
    </Layout>
  );
}