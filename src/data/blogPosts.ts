export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Start Your Affiliate Marketing Journey with 1win",
    excerpt: "Learn the essential steps to become a successful 1win affiliate partner and maximize your earnings potential.",
    category: "affiliate",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/images/blog/affiliate-marketing.jpg"
  },
  {
    id: 2,
    title: "Top 10 Casino Games with Highest RTP in 2024",
    excerpt: "Discover which casino games offer the best return to player percentages and why they're popular among gamblers.",
    category: "casino",
    date: "2024-01-14",
    readTime: "7 min",
    image: "/images/blog/casino-games.jpg"
  },
  {
    id: 3,
    title: "Sports Betting Strategies for Beginners",
    excerpt: "Master the fundamentals of sports betting with proven strategies that can help you make informed decisions.",
    category: "betting",
    date: "2024-01-13",
    readTime: "6 min",
    image: "/images/blog/sports-betting.jpg"
  },
  {
    id: 4,
    title: "Understanding Aviator Game: Tips and Tricks",
    excerpt: "A comprehensive guide to playing Aviator game effectively and managing your bankroll wisely.",
    category: "games",
    date: "2024-01-12",
    readTime: "4 min",
    image: "/images/blog/aviator-guide.jpg"
  },
  {
    id: 5,
    title: "Maximizing Affiliate Commissions in iGaming Industry",
    excerpt: "Advanced techniques to increase your affiliate revenue through targeted marketing and audience engagement.",
    category: "affiliate",
    date: "2024-01-11",
    readTime: "8 min",
    image: "/images/blog/commissions.jpg"
  },
  // Continue with 95 more posts...
  ...Array.from({ length: 95 }, (_, i) => ({
    id: i + 6,
    title: `${['Essential Guide to', 'Mastering', 'Advanced Tips for', 'Understanding', 'Complete Tutorial on'][i % 5]} ${['Online Gaming', 'Casino Strategies', 'Betting Systems', 'Affiliate Marketing', 'Player Retention'][i % 5]}`,
    excerpt: `Comprehensive insights into ${['maximizing profits', 'increasing conversions', 'understanding market trends', 'player psychology', 'risk management'][i % 5]} in the iGaming industry.`,
    category: ['casino', 'betting', 'affiliate', 'games', 'tips'][i % 5],
    date: new Date(2024, 0, 10 - Math.floor(i / 3)).toISOString().split('T')[0],
    readTime: `${(i % 10) + 3} min`,
    image: `/images/blog/post-${(i % 20) + 1}.jpg`
  }))
];
