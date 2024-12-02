import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface ServiceItem {
  title: string
  href: string
}

interface ServiceCategoryCardProps {
  title: string
  description: string
  items: ServiceItem[]
}

export function ServiceCategoryCard({ title, description, items }: ServiceCategoryCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-blue-400">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-4">
          {items && items.map((item) => (
            <li key={item.title}>
              <Link 
                href={item.href}
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-blue-400 group-hover:text-blue-300"
              >
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300">
          詳細を見る
        </Button>
      </CardContent>
    </Card>
  )
}

