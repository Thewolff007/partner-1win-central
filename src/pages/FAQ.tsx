import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "How do I become a 1win affiliate partner?",
      answer: "Simply click on any 'Join Now' or 'Become an Affiliate' button on our website. Fill out the registration form, and our team will review your application within 24 hours."
    },
    {
      question: "What commission models do you offer?",
      answer: "We offer flexible commission models including RevShare (up to 50%), CPA (up to $200 per player), and Hybrid deals. You can choose the model that best fits your traffic and goals."
    },
    {
      question: "When and how do I get paid?",
      answer: "Payments are processed weekly with a minimum threshold of $100. We support multiple payment methods including bank transfer, cryptocurrency, Skrill, Neteller, and more."
    },
    {
      question: "What marketing materials do you provide?",
      answer: "We provide a comprehensive set of marketing tools including banners, landing pages, tracking links, promotional codes, and custom creatives. Our team can also create personalized materials for your campaigns."
    },
    {
      question: "Is there a minimum traffic requirement?",
      answer: "No, we welcome affiliates of all sizes. Whether you're just starting or have established traffic, we have solutions that work for you."
    },
    {
      question: "Which countries can I target?",
      answer: "1win operates in 100+ countries across multiple continents. We have strong presence in India, Brazil, Latin America, Africa, and Asia. Contact us for the complete list of available GEOs."
    },
    {
      question: "How do I track my performance?",
      answer: "You'll have access to a real-time analytics dashboard showing clicks, registrations, deposits, revenue, and commissions. Our system provides detailed statistics for all your campaigns."
    },
    {
      question: "Do you offer dedicated support?",
      answer: "Yes! Every affiliate gets a dedicated account manager and 24/7 support via Telegram, email, and live chat. We're here to help you maximize your earnings."
    },
    {
      question: "What is the cookie lifetime?",
      answer: "We offer a lifetime cookie, meaning once a player clicks your link, they're attributed to you forever, even if they register months later."
    },
    {
      question: "Can I promote on social media?",
      answer: "Yes, you can promote on most social media platforms. However, please check with your account manager for platform-specific guidelines and best practices."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Get answers to common questions about 1win Partners affiliate program, commissions, payments, and marketing tools."
        keywords="1win faq, affiliate questions, commission faq, payment methods, affiliate support"
      />
      <Navigation />

      <div className="min-h-screen pt-20 pb-20">
        <div className="container px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our affiliate program
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to help you
            </p>
            <a 
              href="https://t.me/aviatormanager1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Support on Telegram
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
