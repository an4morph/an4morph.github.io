type Props = {
  href: string
  target?: string
}

export const AppLink: React.FC<Props> = ({ href, target, children }) => {
  return (
    <a 
      href={href}
      target={target || '_self'}
    >
      {children}
    </a>
  )
}
