"use client"

import { useState, useEffect } from "react"

export function LoadingAnimation() {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <span className="inline-block w-6">{dots}</span>
}
