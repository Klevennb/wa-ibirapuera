"use client"

import { useEffect, useState } from "react"
import { quotes } from "../../../mocks/quotes"

export function RandomQuote() {
    const [quote, setQuote] = useState<{ author: string, quote: string } | null>(null)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex])
    }, [])

    if (!quote) return null

    return (
        <div className="italic text-gray-600 flex-col">
            <p className="text-lg font-bold">&ldquo;{quote.quote}&rdquo;</p>
            <p className="text-sm mt-2 justify-end">— {quote.author}</p>
        </div>
    )
}

