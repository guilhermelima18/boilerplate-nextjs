import * as S from './styles'

type MainProps = {
  title?: string
  description?: string
}

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="https://github.com/guilhermelima18.png"
        alt="Imagem de uma pessoa"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
