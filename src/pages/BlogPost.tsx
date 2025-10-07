import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const JOIN_LINK = 'https://lkxw.cc/a0b0';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, iGaming, casino, betting, affiliate marketing`}
      />
      <Navigation />

      <article className="min-h-screen pt-20 pb-20">
        <div className="container px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary capitalize text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} read
            </span>
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-12 shadow-2xl"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <h2>Introduction</h2>
            <p>
              In the dynamic world of iGaming, understanding the nuances of {post.category} can significantly 
              impact your success. This comprehensive guide will walk you through everything you need to know 
              to maximize your potential in this exciting industry.
            </p>

            <h2>Key Strategies</h2>
            <p>
              Implementing effective strategies is crucial for success in {post.category}. Here are the essential 
              approaches that industry leaders use to stay ahead of the competition.
            </p>

            <ul>
              <li>Understanding your target audience and their preferences</li>
              <li>Optimizing conversion rates through A/B testing</li>
              <li>Leveraging data analytics for informed decision-making</li>
              <li>Building trust through transparent communication</li>
              <li>Staying updated with industry trends and regulations</li>
            </ul>

            <h2>Best Practices</h2>
            <p>
              Following industry best practices ensures long-term success and sustainable growth. These guidelines 
              have been proven effective by thousands of successful partners in the iGaming ecosystem.
            </p>

            <h2>Conclusion</h2>
            <p>
              Success in the iGaming industry requires dedication, strategic thinking, and continuous learning. 
              By implementing these insights and staying committed to excellence, you can achieve remarkable 
              results and build a thriving partnership with 1win.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Join 1win Partners today and start earning with industry-leading commissions
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer">
                  Join Now & Claim Bonus
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
