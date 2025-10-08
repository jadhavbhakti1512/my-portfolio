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
  typing?: boolean
}

const SAMPLE_FAQS = [
  { question: "Your name?", answer: "Hi! I’m Boti🤖, Bhakti's portfolio bot!" },
  { question: "Tech stack?", answer: "I work with Next.js, React, TailwindCSS, WordPress, WooCommerce, Python, SQL, and GCP. 🚀" },
  { question: "Contact info?", answer: "Email me at jadhavbhakti1512@gmail.com or use the contact form! 📧" },
  { question: "Freelance work?", answer: "Yes! Check the Hire Me section for availability and rates. 💼" },
  { question: "Projects done?", answer: "I’ve built several e-commerce and full-stack projects — check the Projects section! 😎" },
  
]


const SMALL_TALK = [
  { question: ["What is your name?", "Who are you"], answer: "Hi! I’m Boti🤖, Bhakti's portfolio bot!" },
  { question: ["hi", "hello", "hey"], answer: "Hey there! How’s your day going? 😄" },
  { question: ["how are you", "how are you doing"], answer: "I'm good 🤖. Thanks for asking! How about you?" },
  { question: ["thanks", "thank you", "ty"], answer: "You’re welcome! 😊" },
  { question: ["bye", "goodbye", "see you"], answer: "Goodbye! Have a great day! 👋" },
  { question: ["what's up", "sup"], answer: "Not much! Just helping users explore Bhakti's portfolio. 😎" },
  { question: ["joke", "tell me a joke"], answer: "Why do programmers prefer dark mode? Because light attracts bugs! 😆" },
  { question: ["help", "can you help me"], answer: "Of course! Ask me anything about Bhakti's portfolio or projects. 🤖" },
  { question: ["good morning", "morning"], answer: "Good morning! ☀️ Ready to explore Bhakti's work?" },
  { question: ["good night", "night"], answer: "Good night! 🌙 Don’t forget to rest and dream big!" },
  { question: ["how old are you"], answer: "I’m timeless! 🤖 Always ready to assist." },
  { question: ["are you real"], answer: "I’m a friendly bot 🤖, but my knowledge is real and helpful!" },
  { question: ["cheer me up", "motivate me"], answer: "Keep going! 💪 Every step you take brings you closer to success." },
  { question: ["fun fact", "tell me something interesting"], answer: "Did you know? The first computer bug was an actual moth! 🐛" },
  { question: ["favorite language", "programming language"], answer: "I like all languages 🤖, but I enjoy helping with JavaScript, Python, and PHP!" },
  { question: ["who created you", "creator"], answer: "I was created by Bhakti to help users explore their portfolio! 😎" },
]



export default function FAQChatbot() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [open, setOpen] = useState(false)
  const allFAQs = [...SAMPLE_FAQS, ...SMALL_TALK]
  const [fuse] = useState(() =>
    new Fuse(allFAQs, { keys: ["question"], includeScore: true, threshold: 0.35 })
  )
  const inputRef = useRef<HTMLInputElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Auto-focus input on open
  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      if (messages.length === 0) {
        addBotMessage("👋 Hi! Ask me anything about this Bhakti's portfolio.")
      }
    }
  }, [open])

  function addUserMessage(text: string) {
    setMessages(prev => [...prev, { id: String(Date.now()) + "-u", from: "user", text }])
  }

  function addBotMessage(text: string) {
    setMessages(prev => [...prev, { id: String(Date.now()) + "-b", from: "bot", text }])
  }

  function addBotMessageWithTyping(text: string) {
    const typingId = String(Date.now()) + "-b-typing"
    setMessages(prev => [...prev, { id: typingId, from: "bot", text: "...", typing: true }])
    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== typingId))
      addBotMessage(text)
    }, 700)
  }

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    addUserMessage(trimmed)
    setQuery("")

    const results = fuse.search(trimmed)
    if (results.length && results[0].score !== undefined && results[0].score <= 0.35) {
      addBotMessageWithTyping(results[0].item.answer)
    } else {
      addBotMessageWithTyping(
        "🤔 I couldn't find an exact match — maybe try rephrasing or check the contact page!"
      )
    }
  }

  function handleQuickQuestion(question: string) {
    setQuery(question)
    handleSend()
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
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 max-h-[80vh] rounded-2xl flex flex-col overflow-hidden border shadow-2xl
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

          {/* Suggested questions */}
          <div className="flex flex-wrap gap-2 p-2 border-t border-teal-200 dark:border-stone-700 bg-teal-50 dark:bg-stone-800">
            {SAMPLE_FAQS.map((q) => (
              <button
                key={q.question}
                onClick={() => handleQuickQuestion(q.question)}
                className="bg-teal-100 dark:bg-stone-700 px-2 py-1 rounded-md text-sm hover:bg-teal-200 dark:hover:bg-stone-600 transition"
              >
                {q.question}
              </button>
            ))}
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
