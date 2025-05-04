"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4">
                <Link href="#about" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  About
                </Link>
                <Link href="#projects" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Projects
                </Link>
                <Link href="#skills" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Skills
                </Link>
                <Link href="#contact" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                  Contact
                </Link>
                <ModeToggle />
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  )
}
