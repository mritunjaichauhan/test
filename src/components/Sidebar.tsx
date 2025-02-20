import { Link, useLocation } from "react-router-dom"
import { LayoutGrid, Users, FileText, Settings, FolderGit2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "/", icon: LayoutGrid },
  { name: "Manage Resources", href: "/resources", icon: FolderGit2 },
  { name: "Manage Influencers", href: "/influencers", icon: Users },
  { name: "Activity Logs", href: "/logs", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-[#0D1117] text-white">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-cyan-400">Hirecentive Social</h2>
      </div>
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800",
                location.pathname === item.href && "bg-cyan-500/10 text-cyan-400",
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

