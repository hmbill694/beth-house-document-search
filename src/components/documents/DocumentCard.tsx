import { DocumentSelect } from "../../db/schema"
import Card from "../ui/Card"

export type DocumentCardProps = {
  document: DocumentSelect
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Card
      id={`document-card-${document.id}`}
      content="Hello card"
      title={`Card ${document.title}`}
      classes="bg-base-200"
      actions={[
        <form
          action={`documents/actions/delete/${document.id}`}
          hx-target={`#document-card-${document.id}`}
        >
          <button class="btn btn-error">Delete</button>
        </form>,
        <form action={`documents/actions/edit/${document.id}`}>
          <button type="submit" class="btn btn-info ">
            Edit
          </button>
        </form>,
        <a class="btn btn-primary" href={`/document/${document.id}`}>
          Details
        </a>,
      ]}
    />
  )
}