export default function AddDocument() {
  return (
    <div class="flex flex-1 items-center justify-center">
      <form
        class=" w-full max-w-md space-y-6 rounded-lg bg-base-300 p-8 shadow-md"
        action="./action/add"
        method="post"
      >
        <h2 class="mb-6 text-center text-2xl font-bold">Create a Document</h2>
        <p>
          Documents are used by Recall to source information that is relevant to
          you!
        </p>
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            required="true"
            class="input input-bordered input-primary w-full rounded-lg"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            required="true"
            class="textarea textarea-bordered textarea-primary w-full rounded-lg"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="btn btn-primary rounded-full px-8 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
