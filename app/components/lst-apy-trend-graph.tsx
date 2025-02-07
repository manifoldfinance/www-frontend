"use client"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LSTTrendData {
  quarter: string
  mevETH: number
  stETH: number
  rETH: number
  oETH: number
}

const lstTrendData: LSTTrendData[] = [
  { quarter: "Q1 2024", mevETH: 5.0, stETH: 4.8, rETH: 4.9, oETH: 5.0 },
  { quarter: "Q2 2024", mevETH: 5.2, stETH: 4.7, rETH: 4.8, oETH: 4.9 },
  { quarter: "Q3 2024", mevETH: 5.4, stETH: 4.6, rETH: 4.7, oETH: 4.8 },
  { quarter: "Q4 2024", mevETH: 5.6, stETH: 4.5, rETH: 4.6, oETH: 4.7 },
]

export function LSTAPYTrendGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LST APY Trends (2024)</CardTitle>
        <CardDescription>Quarterly APY trends for different Liquid Staking Tokens</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lstTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="quarter"
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
                domain={[4, 6]}
              />
              <Tooltip
                contentStyle={{ background: "#333", border: "none" }}
                labelStyle={{ color: "#fff" }}
                formatter={(value: number) => [`${value.toFixed(2)}%`, "APY"]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="mevETH"
                stroke="#31C4B9"
                strokeWidth={2}
                dot={{ fill: "#31C4B9", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="stETH"
                stroke="#F7931A"
                strokeWidth={2}
                dot={{ fill: "#F7931A", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="rETH"
                stroke="#627EEA"
                strokeWidth={2}
                dot={{ fill: "#627EEA", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="oETH"
                stroke="#8E44AD"
                strokeWidth={2}
                dot={{ fill: "#8E44AD", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
