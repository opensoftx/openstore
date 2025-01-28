import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            OpenStore
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Apps", "Categories", "Updates", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white/90 hover:text-white p-2">
              <Search className="w-5 h-5" />
            </button>

            <SignedOut>
              <SignInButton>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">Sign in</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};
