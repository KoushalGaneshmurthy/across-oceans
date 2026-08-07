"use client";

import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
  return (
    <div className="mt-6 flex h-[500px] flex-col gap-4 overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <MessageBubble
        sender="cocu"
        message="Good morning, Puu ❤️"
        time="8:30 AM"
      />

      <MessageBubble
        sender="puu"
        message="Good morning, Cocu 🌊"
        time="8:32 AM"
      />

      <MessageBubble
        sender="cocu"
        message="Did you have breakfast?"
        time="8:33 AM"
      />

      <MessageBubble
        sender="puu"
        message="Yes 😄 Now I'm getting ready for university."
        time="8:35 AM"
      />

      <MessageBubble
        sender="cocu"
        message="Have an amazing day. I'm always cheering for you. 💙"
        time="8:36 AM"
      />

    </div>
  );
}