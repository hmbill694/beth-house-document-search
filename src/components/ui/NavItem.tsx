export type NavItemProps = {
  text?: string | undefined
  children?: JSX.Element | undefined
  href?: string | undefined
}

export default function NavItem({ text, children, href }: NavItemProps) {
  return href ? (
    <a class="btn btn-ghost" href={href}>
      {text && <span>{text}</span>}
      {children}
    </a>
  ) : (
    <button class="btn btn-ghost">
      {text && <span>{text}</span>}
      {children}
    </button>
  )
}