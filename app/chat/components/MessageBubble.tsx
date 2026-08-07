"use client";

interface MessageBubbleProps {
  message: string;
  sender: "puu" | "cocu";
  time: string;
}

export default function MessageBubble({
  message,
  sender,
  time,
}: MessageBubbleProps) {
  const isPuu = sender === "puu";

  return (
    <div
      className={`flex ${
        isPuu ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-3xl px-5 py-3 shadow-lg ${
          isPuu
            ? "bg-sky-600 text-white rounded-br-md"
            : "bg-white/10 text-white rounded-bl-md backdrop-blur-xl"
        }`}
      >
        <p className="text-base leading-7">
          {message}
        </p>

        <p className="mt-2 text-right text-xs opacity-70">
          {time}
        </p>
      </div>
    </div>
  );
}