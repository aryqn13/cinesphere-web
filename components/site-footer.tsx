import Link from "next/link"
import { Film, Twitter, Instagram, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Film className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Cinesphere</span>
            </Link>
            <p className="text-slate-400 mb-4">
              Your personal film journey starts here. Track, rate, and discover films with a community of enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Film Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Reviews & Ratings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Lists & Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Social Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Statistics & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Film Database
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Cinesphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
