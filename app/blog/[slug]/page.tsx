import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

// Simulating an API call with a timeout
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = blogPosts.find((post) => post.slug === slug);
      resolve(post || null);
    }, 100); // 100ms timeout to simulate API call
  });
}

export async function generateStaticParams() {
  // In a real application, you would fetch this data from an API or database
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

const blogPosts: BlogPost[] = [
  {
    slug: "introducing-mev-protection",
    title: "Introducing MEV Protection: Safeguarding Your Transactions",
    date: "February 15, 2025",
    category: "Product Update",
    content: `
      <p>We're excited to announce the launch of our new MEV Protection feature, designed to safeguard your transactions against Miner Extractable Value (MEV) attacks.</p>
      
      <h2>What is MEV?</h2>
      <p>Miner Extractable Value (MEV) refers to the profit miners can extract by manipulating the order of transactions within a block. This can lead to front-running and sandwich attacks, potentially causing losses for users.</p>
      
      <h2>How Our MEV Protection Works</h2>
      <p>Our MEV Protection feature uses advanced algorithms to:</p>
      <ul>
        <li>Detect potential MEV opportunities</li>
        <li>Reorder transactions to minimize MEV extraction</li>
        <li>Use private mempool for sensitive transactions</li>
      </ul>
      
      <h2>Benefits for Users</h2>
      <p>By using our MEV Protection, you can enjoy:</p>
      <ul>
        <li>Reduced risk of front-running</li>
        <li>Lower slippage on large trades</li>
        <li>Improved overall transaction security</li>
      </ul>
      
      <p>To start using MEV Protection, simply enable it in your account settings. For more detailed instructions, check out our documentation.</p>
    `,
  },
  {
    slug: "optimizing-defi-strategies",
    title: "Optimizing DeFi Strategies with Manifold Finance",
    date: "February 1, 2025",
    category: "Tutorial",
    content: `
      <p>Decentralized Finance (DeFi) offers exciting opportunities for yield generation, but it can be complex to navigate. In this tutorial, we'll explore how to optimize your DeFi strategies using Manifold Finance's tools.</p>
      
      <h2>1. Yield Farming Optimization</h2>
      <p>Our yield farming optimizer helps you:</p>
      <ul>
        <li>Identify the most profitable farming opportunities</li>
        <li>Automatically rebalance your portfolio for maximum returns</li>
        <li>Minimize gas costs through efficient contract interactions</li>
      </ul>
      
      <h2>2. Liquidity Provision Strategies</h2>
      <p>Learn how to:</p>
      <ul>
        <li>Choose the right liquidity pools</li>
        <li>Manage impermanent loss risk</li>
        <li>Leverage our auto-compounding features</li>
      </ul>
      
      <h2>3. Risk Management</h2>
      <p>Discover techniques for:</p>
      <ul>
        <li>Diversifying your DeFi portfolio</li>
        <li>Setting up stop-loss mechanisms</li>
        <li>Monitoring and adjusting your positions</li>
      </ul>
      
      <p>By following these strategies and leveraging Manifold Finance's tools, you can optimize your DeFi returns while managing risk effectively.</p>
    `,
  },
  {
    slug: "future-of-ethereum-scaling",
    title: "The Future of Ethereum Scaling: Our Perspective",
    date: "January 20, 2025",
    category: "Industry Insights",
    content: `
      <p>As Ethereum continues to grow, scaling solutions are becoming increasingly important. In this post, we'll share our perspective on the future of Ethereum scaling and how Manifold Finance is positioned to support the ecosystem.</p>
      
      <h2>Layer 2 Solutions</h2>
      <p>We believe that Layer 2 solutions will play a crucial role in Ethereum's scaling strategy. Key developments include:</p>
      <ul>
        <li>Optimistic Rollups</li>
        <li>ZK-Rollups</li>
        <li>State Channels</li>
      </ul>
      
      <h2>Ethereum 2.0 and Sharding</h2>
      <p>The transition to Ethereum 2.0 will bring significant improvements:</p>
      <ul>
        <li>Increased transaction throughput</li>
        <li>Reduced energy consumption with Proof of Stake</li>
        <li>Enhanced scalability through sharding</li>
      </ul>
      
      <h2>Interoperability</h2>
      <p>We foresee increased focus on:</p>
      <ul>
        <li>Cross-chain bridges</li>
        <li>Standardized protocols for chain communication</li>
        <li>Multi-chain DApps and services</li>
      </ul>
      
      <h2>Manifold Finance's Role</h2>
      <p>Our team is working on:</p>
      <ul>
        <li>Optimizing our services for L2 solutions</li>
        <li>Developing cross-chain liquidity management tools</li>
        <li>Researching novel scaling approaches</li>
      </ul>
      
      <p>As the Ethereum ecosystem evolves, Manifold Finance remains committed to providing cutting-edge solutions that leverage the latest scaling technologies.</p>
    `,
  },
];

function CategoryBadge({ category }: { category: string }) {
  return (
    <Badge
      variant="secondary"
      className={
        category === "Product Update"
          ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
          : category === "Tutorial"
            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
            : "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
      }>
      {category}
    </Badge>
  );
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-24">
        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <CategoryBadge category={post.category} />
            </div>
            <h1 className="text-4xl font-heading">{post.title}</h1>
          </div>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
