"use client"

import React, { useState, useRef, useEffect } from "react"
import Fuse from "fuse.js"
import { IoMdSend } from "react-icons/io"
import { BsChatDots } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"

type Message = {
  id: string
  from: "user" | "bot"
  text: string
}

const SAMPLE_FAQS = [
  { question: "What is your name?", answer: "Hi — I'm Bhakti's portfolio bot. I can answer simple FAQs about this site." },
  { question: "What technologies do you use?", answer: "This portfolio uses Next.js, React, TailwindCSS and Vercel for deployment." },
  { question: "How can I contact you?", answer: "You can contact me via the contact form on this site or email jadhavbhakti1512@gmail.com." },
  { question: "Do you do freelance work?", answer: "Yes — check the Hire Me section for availability and rates." },
  { question: "Which projects have you built?", answer: "I have built several e-commerce and full-stack projects — see the Projects section for details." },
]

export default function FAQChatbot() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [open, setOpen] = useState(false)
  const [fuse] = useState(() => new Fuse(SAMPLE_FAQS, { keys: ["question", "answer"], includeScore: true, threshold: 0.4 }))
  const inputRef = useRef<HTMLInputElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      addBotMessage("👋 Hi! Ask me anything about this portfolio — try 'technologies' or 'contact'.")
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function addUserMessage(text: string) {
    const m: Message = { id: String(Date.now()) + "-u", from: "user", text }
    setMessages((prev) => [...prev, m])
  }

  function addBotMessage(text: string) {
    const m: Message = { id: String(Date.now()) + "-b", from: "bot", text }
    setMessages((prev) => [...prev, m])
  }

  function handleSend(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    addUserMessage(trimmed)
    setQuery("")

    const results = fuse.search(trimmed)
    if (results.length && results[0].score !== undefined && results[0].score <= 0.45) {
      addBotMessage(results[0].item.answer)
    } else {
      addBotMessage("🤔 I couldn't find an exact match — try different words or check the contact page.")
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <BsChatDots size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-stone-900 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-stone-700">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <span className="font-semibold">Portfolio Chatbot</span>
            <button onClick={() => setOpen(false)} className="hover:text-gray-200">
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 dark:bg-stone-800">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
                    m.from === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-stone-700 text-black dark:text-white rounded-bl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center border-t border-gray-200 dark:border-stone-700 p-2">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-stone-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-stone-800 dark:text-white"
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
            >
              <IoMdSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
