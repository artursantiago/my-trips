import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do React e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, Next e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
