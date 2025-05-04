"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/project",
      label: "Project",
      active: pathname === "/project",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Arya</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute inset-0 justify-center items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>               

          {/* Mobile Menu */}
          <div className="ml-auto md:hidden"></div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <div className="flex flex-col gap-4 mt-4 justify-center items-center h-full">                
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      route.active ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}              
              </div>
            </SheetContent>
          </Sheet>        
      </div>
    </header>
  )
}
