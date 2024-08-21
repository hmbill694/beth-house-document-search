import { Children, PropsWithChildren } from "beth-stack/jsx"

export type DrawerProps = PropsWithChildren<{
  drawerOptions: { content: string, href: string }[]
  id: string
}>

export default function Drawer({ children, drawerOptions, id }: DrawerProps) {
  return (
    <div class="drawer bg-base-200 flex-1">
      <input id={id} type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {children}
      </div>
      <div class="drawer-side">
        <label for={id} aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-300 text-base-content w-80 p-4 h-full">
          {drawerOptions.map(ele => <li><a href={ele.href}>{ele.content}</a></li>)}
        </ul>
      </div>
    </div>
  )
}