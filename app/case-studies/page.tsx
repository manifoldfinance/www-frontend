import { BackgroundPaths } from "../components/background-paths"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-blackA12 text-white">
      <BackgroundPaths
        title="Case Studies|"
        subtitle="See how leading projects are leveraging Manifold Finance"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add case study cards here */}
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Case Study 1</h3>
            <p className="text-mauveA11">Brief description of the case study...</p>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Case Study 2</h3>
            <p className="text-mauveA11">Brief description of the case study...</p>
          </div>
          <div className="bg-blackA6 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Case Study 3</h3>
            <p className="text-mauveA11">Brief description of the case study...</p>
          </div>
        </div>
      </main>
    </div>
  )
}
