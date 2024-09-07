import { DocumentSelect } from "../../db/schema";
import { documents } from "../../pages/documents";
import Card from "../ui/Card";

function DocumentHeader() {
  return (
    <div class="my-4 flex flex-col items-center justify-between md:flex-row">
      <h1 class="text-2xl font-bold">Documents</h1>
      <div class="flex flex-col gap-2 sm:flex-row">
        <div class="input input-bordered flex items-center gap-2">
          <input
            type="search"
            class="grow"
            placeholder="Search"
            name="search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <a href="/document/add" class="btn btn-primary">Add Document</a>
      </div>
    </div>
  );
}

export type DocumentDisplayProps = { documents?: DocumentSelect[] };
export default function DocumentDisplay({ documents }: DocumentDisplayProps) {
  return (
    <div class="container mx-auto">
      <DocumentHeader />
      <div
        class="flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3"
        id="document-display-area"
      >
        {!documents && (
          <p>You've got no documents. Upload some to start chatting!</p>
        )}
        {documents &&
          documents.map((ele) => (
            <Card
              id={`document-card-${ele.id}`}
              content="Hello card"
              title={`Card ${ele.title}`}
              classes="bg-base-200"
              actions={[
                <form
                  action={`documents/actions/delete/${ele.id}`}
                  hx-target={`#document-card-${ele.id}`}
                >
                  <button class="btn btn-error">Delete</button>
                </form>,
                <form action={`documents/actions/edit/${ele}`}>
                  <button type="submit" class="btn btn-info ">
                    Edit
                  </button>
                </form>,
                <a class="btn btn-primary" href={`/document/${ele}`}>
                  Details
                </a>,
              ]}
            />
          ))}
      </div>
    </div>
  );
}
