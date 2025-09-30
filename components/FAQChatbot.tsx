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
  { question: "What technologies do you use?", answer: "Next.js, React, TailwindCSS, Vercel, WordPress, WooCommerce, Python, SQL, GCP, and more." },
  { question: "How can I contact you?", answer: "Email: jadhavbhakti1512@gmail.com or use the contact form on this site." },
  { question: "Do you do freelance work?", answer: "Yes — check the Hire Me section for availability and rates." },
  { question: "Which projects have you built?", answer: "Several e-commerce and full-stack projects — see the Projects section." },
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
      addBotMessage("👋 Hi! Ask me anything about this portfolio.")
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function addUserMessage(text: string) {
    setMessages(prev => [...prev, { id: String(Date.now()) + "-u", from: "user", text }])
  }

  function addBotMessage(text: string) {
    setMessages(prev => [...prev, { id: String(Date.now()) + "-b", from: "bot", text }])
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
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition dark:bg-teal-600 dark:hover:bg-teal-700"
        >
          <BsChatDots size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 rounded-2xl flex flex-col overflow-hidden border shadow-2xl
                        bg-white border-teal-200 dark:bg-stone-900 dark:border-stone-700">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 font-bold text-lg text-white bg-teal-500 rounded-t-2xl dark:bg-teal-600">
            <span>Portfolio Chatbot</span>
            <button onClick={() => setOpen(false)} className="hover:text-teal-100">
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-teal-50 dark:bg-stone-800">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[75%] 
                              ${m.from === "user"
                                ? "bg-teal-500 text-white rounded-br-none shadow-md dark:bg-teal-600"
                                : "bg-white text-teal-600 rounded-bl-none shadow-sm dark:bg-stone-700 dark:text-white"
                              }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center p-2 border-t border-teal-200 dark:border-stone-700">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-3 py-2 text-sm rounded-2xl border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-stone-600 dark:bg-stone-800 dark:text-white"
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              <IoMdSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
