import ChatItem from "./ChatItem"

export type ChatAreaProps = {
  chats: { id: string, sender: "system" | "user", content: string }[]
}

export default function ChatArea({ chats }: ChatAreaProps) {
  return (
    <div class=" bg-base-100 shadow-lg rounded-lg overflow-hidden flex flex-1 flex-col justify-between">
      <div class="p-4 space-y-4 overflow-y-auto">
        {chats.map(ele => <ChatItem {...ele} />)}
      </div>
      <div class="p-4 bg-base-100">
        <div class="flex items-center">
          <input type="text" placeholder="Type a message..." class="input input-bordered w-full mr-2" />
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  )
}