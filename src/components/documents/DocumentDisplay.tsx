import Card from "../ui/Card";

function DocumentHeader() {
  return (
    <div class="flex flex-col md:flex-row justify-between items-center my-4">
      <h1 class="text-2xl font-bold">Documents</h1>
      <div class="flex flex-col sm:flex-row gap-2">
        <div class="input input-bordered flex items-center gap-2">
          <input type="search"
            class="grow"
            placeholder="Search"
            name="search"
          // hx-trigger="input changed delay:500ms, search"
          // hx-target="#search-results"
          // hx-indicator=".htmx-indicator"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <button class="btn btn-primary">Add Document</button>
      </div>
    </div>
  )
}

export default function DocumentDisplay() {
  return (
    <div class="container mx-auto flex flex-col">
      <DocumentHeader />
      <div class="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(ele =>
          <Card
            id={ele.toString()}
            content="Hello card"
            title={`Card ${ele}`}
            actions={[
              <form action={`documents/actions/delete/${ele}`}>
                <button type="submit" class="btn btn-error">Delete</button>
              </form>,
              <form action={`documents/actions/edit/${ele}`}>
                <button type="submit" class="btn btn-info ">Edit</button>
              </form>,
              <a class="btn btn-primary" href={`/document/${ele}`}>
                Details
              </a>
            ]}
          />)}
      </div>
    </div>
  )
}