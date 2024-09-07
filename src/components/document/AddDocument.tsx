export default function AddDocument() {
  return (
    <div class="flex items-center justify-center flex-1">
      <form class=" bg-base-300 rounded-lg shadow-md p-8 w-full max-w-md space-y-6">
        <h2 class="text-2xl font-bold text-center mb-6">Create a Document</h2>
        <p>Documents are used by Recall to source information that is relevant to you!</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Title</span>
          </label>
          <input
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
  )
}