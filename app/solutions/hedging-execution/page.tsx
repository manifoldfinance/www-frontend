import { BackgroundPaths } from "../../components/background-paths"

export default function HedgingExecutionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundPaths
        title="Hedging and Execution|"
        subtitle="Optimize your trading strategies with advanced hedging and execution tools"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Hedging and Execution</h2>
        <p className="text-base sm:text-lg mb-6 text-gray-300">
          Our advanced hedging and execution tools help you optimize your trading strategies and manage risk effectively
          in the volatile crypto market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Real-time market data analysis</li>
              <li>Automated hedging strategies</li>
              <li>Advanced order execution algorithms</li>
              <li>Risk management tools</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Minimize trading risks</li>
              <li>Improve execution efficiency</li>
              <li>Enhance portfolio performance</li>
              <li>Adapt to market volatility</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">How It Works</h3>
          <p className="text-base sm:text-lg mb-4 text-gray-300">
            Our Hedging and Execution solution leverages advanced algorithms and real-time data to optimize your trading
            strategies:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-300">
            <li>Market Analysis: Continuous monitoring of market conditions and trends.</li>
            <li>Strategy Formulation: Development of tailored hedging and execution strategies.</li>
            <li>Automated Execution: Implementation of strategies through our high-performance trading engine.</li>
            <li>Risk Management: Real-time risk assessment and automatic adjustments.</li>
            <li>Performance Reporting: Comprehensive analytics and reporting on strategy performance.</li>
          </ol>
        </div>
      </main>
    </div>
  )
}

