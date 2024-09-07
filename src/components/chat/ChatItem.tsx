export type ChatItemProps = {
  id: string;
  sender: "user" | "system";
  content: string;
};

export default function ChatItem({ id, sender, content }: ChatItemProps) {
  return (
    <div class={`chat ${sender === "system" ? "chat-start" : "chat-end"}`}>
      <div class="chat-bubble">{content}</div>
    </div>
  );
}
