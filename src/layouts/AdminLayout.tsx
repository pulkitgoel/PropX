import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { LayoutDashboard, Building2, Users, Handshake, FileText, BarChart3, Bell, User, LogOut } from "lucide-react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/admin/dashboard" },
  { title: "Properties", icon: Building2, url: "/admin/properties" },
  { title: "Leads", icon: Users, url: "/admin/leads" },
  { title: "Broker Partners", icon: Handshake, url: "/admin/partners" },
  { title: "Content", icon: FileText, url: "/admin/content" },
  { title: "Analytics", icon: BarChart3, url: "/admin/analytics" },
]

function AdminLayoutContent() {
  const location = useLocation()
  const { setOpenMobile, isMobile } = useSidebar()

  // Close mobile sidebar on route change
  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }, [location.pathname, isMobile, setOpenMobile])

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar className="border-r bg-white text-slate-900">
        <SidebarHeader className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-orange-500 text-2xl tracking-tight">PropX</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname === item.url}
                  className="text-slate-600 hover:bg-orange-50 hover:text-orange-600 data-[active=true]:bg-orange-500 data-[active=true]:text-white transition-colors"
                >
                  <Link to={item.url} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 px-6 bg-white border-b flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden" />
            <div className="w-full md:w-96 hidden md:block">
              <Input 
                placeholder="Search properties, leads, or content..." 
                className="bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-500" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@admin" />
                    <AvatarFallback className="bg-slate-900 text-white">AD</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@propx.com</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminLayoutContent />
    </SidebarProvider>
  )
}
