import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, Calendar, TrendingUp, Plus, CheckCircle2 } from "lucide-react"

const stats = [
  {
    title: "Total Properties",
    value: "248",
    change: "+12 this week",
    icon: Building2,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "New Leads",
    value: "89",
    change: "+23 today",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "Visits Scheduled",
    value: "34",
    change: "12 this week",
    icon: Calendar,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Conversion Rate",
    value: "24.5%",
    change: "+2.4% vs last month",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
]

const recentActivity = [
  {
    title: "New lead: Priya Sharma",
    description: "3 BHK Apartment in Bandra West",
    time: "5 mins ago",
    status: "new",
  },
  {
    title: "Property published",
    description: "2 BHK Apartment in Andheri East",
    time: "23 mins ago",
    status: "published",
  },
  {
    title: "Verification completed",
    description: "Villa in Juhu",
    time: "1 hour ago",
    status: "completed",
  },
  {
    title: "Visit scheduled: Rahul Kumar",
    description: "4 BHK Penthouse in Worli",
    time: "2 hours ago",
    status: "scheduled",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Generate Report</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start h-12 text-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">
              <Plus className="mr-2 h-5 w-5" /> Add New Property
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 text-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">
              <Users className="mr-2 h-5 w-5" /> Process Leads
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 text-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">
              <CheckCircle2 className="mr-2 h-5 w-5" /> Review Verifications
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 text-lg hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200">
              <TrendingUp className="mr-2 h-5 w-5" /> View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-4 ${
                    activity.status === 'new' ? 'bg-red-500' :
                    activity.status === 'published' ? 'bg-yellow-500' :
                    activity.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
