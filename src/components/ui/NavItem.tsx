export type NavItemProps = {
  text?: string | undefined
  children?: JSX.Element | undefined
  href: string
}

export default function NavItem({ text, children, href }: NavItemProps) {
  return (
    <a class="btn btn-ghost" href={href}>
      {text && <span>{text}</span>}
      {children}
    </a>
  )
}