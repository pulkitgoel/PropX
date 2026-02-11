import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Eye, Edit, Trash2, Filter } from "lucide-react"

const properties = [
  {
    id: "P001",
    image: "https://images.unsplash.com/photo-1600596542815-e32cb5313a5b?w=800&auto=format&fit=crop&q=60",
    title: "3 BHK Luxury Apartment",
    location: "Bandra West, Mumbai",
    type: "3 BHK",
    price: "?2.5 Cr",
    status: "Published",
    verified: true,
  },
  {
    id: "P002",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
    title: "2 BHK Modern Flat",
    location: "Andheri East, Mumbai",
    type: "2 BHK",
    price: "?1.8 Cr",
    status: "Published",
    verified: true,
  },
  {
    id: "P003",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
    title: "4 BHK Penthouse",
    location: "Worli, Mumbai",
    type: "4 BHK",
    price: "?5.2 Cr",
    status: "Draft",
    verified: false,
  },
  {
    id: "P004",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60",
    title: "Villa with Garden",
    location: "Juhu, Mumbai",
    type: "5 BHK",
    price: "?8.5 Cr",
    status: "Sold",
    verified: true,
  },
  {
    id: "P005",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
    title: "1 BHK Studio",
    location: "Powai, Mumbai",
    type: "1 BHK",
    price: "?95 L",
    status: "Published",
    verified: true,
  },
]

export default function Properties() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
          <p className="text-muted-foreground">Manage all property listings</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          + Add Property
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-lg border">
        <div className="w-full max-w-sm">
          <Input placeholder="Search by title or location..." />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> All Status
        </Button>
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell className="font-medium">{property.id}</TableCell>
                <TableCell>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-10 w-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{property.title}</TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>{property.price}</TableCell>
                <TableCell>
                  <Badge variant={
                    property.status === 'Published' ? 'default' :
                    property.status === 'Draft' ? 'secondary' : 'outline'
                  } className={
                    property.status === 'Published' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                    property.status === 'Draft' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100' :
                    'bg-gray-100 text-gray-700 hover:bg-gray-100'
                  }>
                    {property.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {property.verified ? (
                    <div className="flex justify-center">
                      <div className="h-4 w-4 rounded-full border border-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="h-4 w-4 rounded-full border border-yellow-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      </div>
                    </div>
                  )}
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
