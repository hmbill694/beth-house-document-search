import { Children, PropsWithChildren } from "beth-stack/jsx"

export type DrawerProps = PropsWithChildren<{
  drawerOptions: { content: string, href: string }[]
  id: string
}>

export default function Drawer({ children, drawerOptions, id }: DrawerProps) {
  return (
    <div class="drawer lg:drawer-open bg-base-200">
      <input id={id} type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        {children}
        <label for={id} class="btn btn-primary drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-300 text-base-content w-80 p-4">
          {drawerOptions.map(ele => <li><a href={ele.href}>{ele.content}</a></li>)}
        </ul>
      </div>
    </div>
  )
}