import NavItem from "./NavItem"

export type NavBarProps = {
  navStart: JSX.Element | undefined
}

export default function NavBar({ navStart }: NavBarProps) {
  return (
    <nav class="navbar bg-base-200">
      <div class="navbar-start">
        {navStart}
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl" href="/">Recall</a>
      </div>
      <div class="navbar-end flex gap-5">
        <NavItem text="Chat with your Documents" href="/chat">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </NavItem>
      </div>
    </nav>
  )
}