import { BackgroundPaths } from "../components/background-paths";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="Our Technology|"
        subtitle="Learn about the technology powering our solutions"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cutting-Edge Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">High-Performance Staking</h3>
            <p className="text-mauveA11">
              Description of the technology behind our staking solutions...
            </p>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">MEV Optimization</h3>
            <p className="text-mauveA11">Explanation of our MEV optimization technology...</p>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">SecureRPC</h3>
            <p className="text-mauveA11">Details about our SecureRPC technology...</p>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Blockchain Security</h3>
            <p className="text-mauveA11">Information about our blockchain security measures...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
