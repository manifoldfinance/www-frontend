import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Installation</h1>
      <p className="text-lg text-muted-foreground">
        Get started with Manifold Finance by installing our SDK and setting up your environment.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation Methods</h2>

        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm">
            <pre className="rounded-lg bg-muted p-4">
              <code>npm install @manifoldfinance/sdk</code>
            </pre>
          </TabsContent>
          <TabsContent value="yarn">
            <pre className="rounded-lg bg-muted p-4">
              <code>yarn add @manifoldfinance/sdk</code>
            </pre>
          </TabsContent>
          <TabsContent value="pnpm">
            <pre className="rounded-lg bg-muted p-4">
              <code>pnpm add @manifoldfinance/sdk</code>
            </pre>
          </TabsContent>
        </Tabs>

        <h3 className="text-xl font-semibold mt-8">Environment Setup</h3>
        <p>Configure your environment variables:</p>
        <pre className="rounded-lg bg-muted p-4 mt-2">
          <code>
            MANIFOLD_API_KEY=your_api_key{"\n"}
            MANIFOLD_ENDPOINT=https://api.manifoldfinance.com
          </code>
        </pre>
      </div>
    </div>
  )
}

