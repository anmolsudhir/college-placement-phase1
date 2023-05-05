import { RootState } from '@/store/store'
import {Container, LandingDiv, LoginDiv} from './styles'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Home() {
  const theme = useSelector((state : RootState) => state.theme.theme)
  const colors = useSelector((state : RootState) => state.colors)

  return (
    <Container $theme={theme} $colors={colors}>
      <LandingDiv>
        Hi
      </LandingDiv>
      <LoginDiv>
        Hello
      </LoginDiv>
      {/* <Link href={'/register'}>
        <Button>
          Hi
        </Button>
      </Link> */}
    </Container>
  )
}
