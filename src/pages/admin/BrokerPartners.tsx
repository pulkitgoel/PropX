import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, Edit, Trash2, Phone, Mail, MapPin, Users, Building2 } from "lucide-react"

const partners = [
  {
    id: "B001",
    name: "Rajesh Sharma",
    company: "Prime Realty",
    contact: { email: "rajesh@primerealty.com", phone: "+91 98765 43210" },
    location: "Mumbai, Maharashtra",
    properties: 45,
    leads: 128,
    status: "Active",
    initials: "RS",
  },
  {
    id: "B002",
    name: "Priya Patel",
    company: "Urban Spaces",
    contact: { email: "priya@urbanspaces.com", phone: "+91 98765 43211" },
    location: "Bangalore, Karnataka",
    properties: 32,
    leads: 95,
    status: "Active",
    initials: "PP",
  },
  {
    id: "B003",
    name: "Amit Kumar",
    company: "Home Connect",
    contact: { email: "amit@homeconnect.com", phone: "+91 98765 43212" },
    location: "Delhi, NCR",
    properties: 28,
    leads: 76,
    status: "Active",
    initials: "AK",
  },
  {
    id: "B004",
    name: "Sneha Desai",
    company: "Elite Properties",
    contact: { email: "sneha@eliteproperties.com", phone: "+91 98765 43213" },
    location: "Pune, Maharashtra",
    properties: 18,
    leads: 52,
    status: "Pending",
    initials: "SD",
  },
  {
    id: "B005",
    name: "Vikram Singh",
    company: "City Homes",
    contact: { email: "vikram@cityhomes.com", phone: "+91 98765 43214" },
    location: "Hyderabad, Telangana",
    properties: 12,
    leads: 34,
    status: "Inactive",
    initials: "VS",
  },
]

export default function BrokerPartners() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Broker Partners</h2>
          <p className="text-muted-foreground">Manage broker partnerships and collaborations</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          + Add New Broker
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Brokers</p>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <Users className="h-4 w-4" />
          </div>
        </div>
        {/* Additional stats would go here */}
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Properties</TableHead>
              <TableHead>Leads</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell className="font-medium text-xs text-muted-foreground">{partner.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-slate-900 text-white text-xs">{partner.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{partner.name}</p>
                      <p className="text-xs text-muted-foreground">Joined recently</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-3 w-3 text-muted-foreground" />
                    {partner.company}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      {partner.contact.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      {partner.contact.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    {partner.location}
                  </div>
                </TableCell>
                <TableCell>{partner.properties}</TableCell>
                <TableCell>{partner.leads}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={
                    partner.status === 'Active' ? 'text-green-600 border-green-600 bg-green-50' :
                    partner.status === 'Pending' ? 'text-yellow-600 border-yellow-600 bg-yellow-50' :
                    'text-gray-600 border-gray-600 bg-gray-50'
                  }>
                    {partner.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
