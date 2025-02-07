"use client"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LSTData {
  name: string
  apy: number
}

const lstData: LSTData[] = [
  { name: "mevETH", apy: 4.6 },
  { name: "stETH", apy: 2.8 },
  { name: "rETH", apy: 2.9},
  { name: "oETH", apy: 2.85 },
]

export function LSTAPYGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LST APY Comparison</CardTitle>
        <CardDescription>
          Annual Percentage Yield for different Liquid Staking Tokens (Log Scale)
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lstData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
                scale="log"
                domain={["auto", "auto"]}
              />
              <Tooltip
                contentStyle={{ background: "#333", border: "none" }}
                labelStyle={{ color: "#fff" }}
                formatter={(value: number) => [`${value.toFixed(2)}%`, "APY"]}
              />
              <Line
                type="monotone"
                dataKey="apy"
                stroke="#31C4B9"
                strokeWidth={2}
                dot={{ fill: "#31C4B9", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
