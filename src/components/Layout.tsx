import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Bell, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#0A0B14]">
      <Sidebar />
      <main className="flex-1">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-cyan-400">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5 text-gray-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

