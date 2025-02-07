"use client"

import { useState, useEffect } from "react"

const opcodes = [
  "PUSH1 0x80",
  "PUSH1 0x40",
  "MSTORE",
  "CALLVALUE",
  "DUP1",
  "ISZERO",
  "PUSH2 0x000f",
  "JUMPI",
  "PUSH1 0x00",
  "DUP1",
  "REVERT",
  "JUMPDEST",
  "POP",
  "PUSH1 0x04",
  "CALLDATASIZE",
  "LT",
  "PUSH2 0x002e",
  "JUMPI",
]

export function EVMCodeDisplay() {
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % opcodes.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-sm">
      {opcodes.map((opcode, index) => (
        <div
          key={index}
          className={`${index === currentLine ? "bg-yellow-500 text-black" : ""} px-2 py-1`}
        >
          {index.toString(16).padStart(4, "0")}: {opcode}
        </div>
      ))}
    </div>
  )
}
