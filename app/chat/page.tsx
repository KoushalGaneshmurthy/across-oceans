import Navbar from "@/components/ui/Navbar";
import PageTitle from "@/components/ui/PageTitle";

import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-16">

        <PageTitle
          title="💬 Conversation"
          subtitle="No matter the distance, we're only one message away."
        />

        <ChatHeader />

        <ChatWindow />

        <MessageInput />

      </div>

    </main>
  );
}