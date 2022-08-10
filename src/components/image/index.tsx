import { Container, Frame } from "./styled"

type Props = {
  src: string
  alt?: string
  className?: string
  gap?: string
}

export const Image: React.FC<Props> = ({ className, src, alt, gap }) => {
  return (
    <Container $gap={gap} className={className}>
      <img alt={alt} src={src}/>
      <Frame />
    </Container>
  )
}