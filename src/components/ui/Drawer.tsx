import { Children, PropsWithChildren } from "beth-stack/jsx";

export type DrawerProps = PropsWithChildren<{
  drawerOptions: { content: string; href: string }[];
  id: string;
}>;

export default function Drawer({ children, drawerOptions, id }: DrawerProps) {
  return (
    <div class="drawer flex-1 bg-base-200">
      <input id={id} type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">{children}</div>
      <div class="drawer-side">
        <label
          for={id}
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu h-full w-80 bg-base-300 p-4 text-base-content">
          {drawerOptions.map((ele) => (
            <li>
              <a href={ele.href}>{ele.content}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
