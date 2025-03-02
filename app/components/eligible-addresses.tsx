import { Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import dashboardData from "../data/dashboard-data.json"

export function EligibleAddresses() {
  const { eligibleAddresses } = dashboardData

  return (
    <Card className="bg-blackA6 border-gray-800">
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center">
          <Wallet className="mr-2 h-5 w-5 text-[#31C4B9]" />
          <CardTitle>Eligible Addresses</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5">Address</TableHead>
              <TableHead className="w-1/5 text-right">Staked Amount</TableHead>
              <TableHead className="w-1/5 text-right">Total Earned</TableHead>
              <TableHead className="w-1/5 text-right">Real APY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eligibleAddresses.map((addr, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm break-all">{addr.address}</TableCell>
                <TableCell className="text-right text-[#31C4B9]">{addr.stakedAmount}</TableCell>
                <TableCell className="text-right text-[#31C4B9]">{addr.totalEarned}</TableCell>
                <TableCell className="text-right text-[#31C4B9]">{addr.realAPY}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

