import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import dashboardData from "../data/dashboard-data.json"

function StakingOverview() {
  const { stakingOverview } = dashboardData

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Total Rewards</p>
        <h2 className="text-4xl font-bold">${stakingOverview.totalRewardsUSD} USD</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Current APR</p>
          <p className="text-2xl font-semibold">{stakingOverview.currentAPR}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Earned Airdrop Amount</p>
          <p className="text-2xl font-semibold">${stakingOverview.earnedAirdropUSD} USD</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-muted-foreground">Reward Rate</p>
        <p className="text-xl font-semibold">{stakingOverview.rewardRate} ETH / day</p>
      </div>

      <Button variant="outline" className="w-full bg-blackA5 border-gray-700 hover:bg-blackA6">
        <ExternalLink className="mr-2 h-4 w-4" />
        Guide to Staking
      </Button>
    </div>
  )
}

function PreviousPayouts() {
  const { previousPayouts } = dashboardData

  return (
    <div className="space-y-4">
      {previousPayouts.map((payout, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
          <p className="font-medium">{payout.date}</p>
          <p className="text-[#31C4B9]">{payout.amount}</p>
        </div>
      ))}
    </div>
  )
}

function UpcomingPayouts() {
  const { upcomingPayouts } = dashboardData

  return (
    <div className="space-y-4">
      {upcomingPayouts.map((payout, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
          <p className="font-medium">{payout.date}</p>
          <p className="text-[#31C4B9]">Est. {payout.estimatedAmount}</p>
        </div>
      ))}
    </div>
  )
}

export function PayoutsSection() {
  return (
    <Card className="bg-blackA6 border-gray-800">
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-[#31C4B9]" />
          <CardTitle>Payouts & Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Staking Overview</h3>
            <StakingOverview />
          </div>
          <div>
            <Tabs defaultValue="previous" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="previous">Previous Payouts</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Payouts</TabsTrigger>
              </TabsList>
              <TabsContent value="previous">
                <PreviousPayouts />
              </TabsContent>
              <TabsContent value="upcoming">
                <UpcomingPayouts />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

