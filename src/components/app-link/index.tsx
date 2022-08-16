type Props = {
  href: string
  target?: string
  className?: string
}

export const AppLink: React.FC<Props> = ({ className, href, target, children }) => {
  return (
    <a 
      className={className}
      href={href}
      target={target || '_self'}
    >
      {children}
    </a>
  )
}
