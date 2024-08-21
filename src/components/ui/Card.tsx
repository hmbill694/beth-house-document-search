import { Component } from "beth-stack/jsx"

export type CardProps = {
  id: string,
  img?: JSX.Element,
  actions?: JSX.Element[],
  title: string,
  content: string,
  classes?: string
}

export default function Card(props: CardProps) {
  return (
    <div class={`card bg-base-100 w-96 shadow-xl ${props.classes ?? ""}`} id={props.id}>
      {props.img && (
        <figure>
          {props.img}
        </figure>
      )}
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.content}</p>
        {props.actions && (
          <div class="card-actions justify-end">
            {props.actions.map((ele) => ele)}
          </div>
        )}
      </div>
    </div>
  )
}