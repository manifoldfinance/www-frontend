import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

// Simulating an API call with a timeout
async function fetchBlogPosts(): Promise<BlogPost[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts);
    }, 100); // 100ms timeout to simulate API call
  });
}

const blogPosts: BlogPost[] = [
  {
    slug: "introducing-mev-protection",
    title: "Introducing MEV Protection: Safeguarding Your Transactions",
    date: "February 15, 2025",
    excerpt:
      "Learn about our new MEV Protection feature and how it can help secure your transactions against front-running and sandwich attacks.",
    category: "Product Update",
  },
  {
    slug: "optimizing-defi-strategies",
    title: "Optimizing DeFi Strategies with Manifold Finance",
    date: "February 1, 2025",
    excerpt:
      "Discover how to leverage Manifold Finance's tools to optimize your DeFi strategies and maximize returns.",
    category: "Tutorial",
  },
  {
    slug: "future-of-ethereum-scaling",
    title: "The Future of Ethereum Scaling: Our Perspective",
    date: "January 20, 2025",
    excerpt:
      "We share our thoughts on the future of Ethereum scaling solutions and how Manifold Finance is positioned to support the ecosystem.",
    category: "Industry Insights",
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

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-heading mb-8">Blog</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="space-y-4">
              <div className="flex items-center gap-4">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <CategoryBadge category={post.category} />
              </div>
              <h2 className="text-2xl font-heading">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
