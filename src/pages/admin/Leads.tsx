import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

const leads = {
  new: [
    { name: "Priya Sharma", id: "L001", interested: "3 BHK Luxury Apt", contact: "+91 98765 43210" },
    { name: "Rahul Kumar", id: "L002", interested: "4 BHK Penthouse", contact: "+91 98765 43211" },
  ],
  contacted: [
    { name: "Anita Desai", id: "L003", interested: "2 BHK Apartment", contact: "+91 98765 43212" },
    { name: "Sneha Patel", id: "L005", interested: "1 BHK Studio", contact: "+91 98765 43214" },
  ],
  scheduled: [
    { name: "Vikram Singh", id: "L004", interested: "Villa in Juhu", contact: "+91 98765 43213" },
  ],
  converted: [
    { name: "Amit Mehta", id: "L006", interested: "3 BHK Apartment", contact: "+91 98765 43215" },
  ],
  lost: [],
}

const KanbanColumn = ({ title, count, items, color }: { title: string, count: number, items: any[], color: string }) => (
  <div className="flex-1 min-w-[280px] md:min-w-[300px]">
    <div className={`flex items-center justify-between p-3 rounded-lg mb-4 ${color}`}>
      <span className="font-medium">{title}</span>
      <Badge variant="secondary" className="bg-white/50">{count}</Badge>
    </div>
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  {item.name}
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">{item.id}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <p className="text-xs text-muted-foreground mb-4">{item.interested}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 text-xs h-8">
                <Phone className="h-3 w-3 mr-2" /> Call
              </Button>
              <Button variant="outline" size="sm" className="flex-1 text-xs h-8">
                <Mail className="h-3 w-3 mr-2" /> Email
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)

export default function Leads() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Leads Management</h2>
          <p className="text-muted-foreground">Track and manage property inquiries</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-lg self-start md:self-auto">
          <Button variant="ghost" size="sm" className="bg-white shadow-sm flex-1 md:flex-none">Kanban View</Button>
          <Button variant="ghost" size="sm" className="flex-1 md:flex-none">List View</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pb-4 overflow-x-auto">
        <KanbanColumn title="New" count={2} items={leads.new} color="bg-blue-100 text-blue-700" />
        <KanbanColumn title="Contacted" count={2} items={leads.contacted} color="bg-yellow-100 text-yellow-700" />
        <KanbanColumn title="Scheduled" count={1} items={leads.scheduled} color="bg-orange-100 text-orange-700" />
        <KanbanColumn title="Converted" count={1} items={leads.converted} color="bg-green-100 text-green-700" />
        <KanbanColumn title="Lost" count={0} items={leads.lost} color="bg-gray-100 text-gray-700" />
      </div>
    </div>
  )
}
