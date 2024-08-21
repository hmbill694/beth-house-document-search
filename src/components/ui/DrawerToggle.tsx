export type DrawerToggleProps = {
  id: string
  classes?: string | undefined
}

export default function DrawerToggle({ id, classes }: DrawerToggleProps) {
  return (
    <label for={id} class={classes} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </label>
  )
}