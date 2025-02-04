import { BackgroundPaths } from "../../components/background-paths";

export default function AuctionMarketsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundPaths
        title="Auction Markets|"
        subtitle="Efficient and transparent auction mechanisms for decentralized finance"
      />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Auction Markets</h2>
        <p className="text-lg mb-6">
          Our auction market solutions provide efficient and transparent mechanisms for
          decentralized finance, optimizing value discovery and liquidity.
        </p>
        {/* Add more content here */}
      </main>
    </div>
  );
}
