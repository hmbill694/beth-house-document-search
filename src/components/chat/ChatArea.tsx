import ChatItem from "./ChatItem";

export type ChatAreaProps = {
  chats: { id: string; sender: "system" | "user"; content: string }[];
};

export default function ChatArea({ chats }: ChatAreaProps) {
  return (
    <div class=" flex flex-1 flex-col justify-between overflow-hidden rounded-lg bg-base-100 shadow-lg">
      <div class="space-y-4 overflow-y-auto p-4">
        {chats.map((ele) => (
          <ChatItem {...ele} />
        ))}
      </div>
      <div class="bg-base-100 p-4">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            class="input input-bordered mr-2 w-full"
          />
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
}
