"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface LSTData {
  name: string
  apy: number
  tvl: string
  fee: string
  decentralization: "Low" | "Medium" | "High"
  liquidityScore: number
}

const lstData: LSTData[] = [
  {
    name: "mevETH",
    apy: 5.2,
    tvl: "$1.2B",
    fee: "10%",
    decentralization: "Medium",
    liquidityScore: 8,
  },
  {
    name: "stETH",
    apy: 4.8,
    tvl: "$15.6B",
    fee: "10%",
    decentralization: "Medium",
    liquidityScore: 9,
  },
  {
    name: "rETH",
    apy: 4.9,
    tvl: "$3.2B",
    fee: "15%",
    decentralization: "High",
    liquidityScore: 7,
  },
  {
    name: "oETH",
    apy: 5.0,
    tvl: "$0.8B",
    fee: "12%",
    decentralization: "Low",
    liquidityScore: 6,
  },
]

export function LSTComparisonTable() {
  return (
    <TooltipProvider>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Token</TableHead>
              <TableHead>APY</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead className="hidden md:table-cell">Decentralization</TableHead>
              <TableHead>
                Liquidity Score
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 ml-1 inline-block" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Liquidity score ranges from 1-10, with 10 being the highest liquidity</p>
                  </TooltipContent>
                </Tooltip>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lstData.map((lst) => (
              <TableRow key={lst.name}>
                <TableCell className="font-medium">{lst.name}</TableCell>
                <TableCell>{lst.apy.toFixed(2)}%</TableCell>
                <TableCell>{lst.tvl}</TableCell>
                <TableCell>{lst.fee}</TableCell>
                <TableCell className="hidden md:table-cell">{lst.decentralization}</TableCell>
                <TableCell>{lst.liquidityScore}/10</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  )
}

