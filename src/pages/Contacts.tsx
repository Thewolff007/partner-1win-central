import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageCircle } from 'lucide-react';

export default function Contacts() {
  return (
    <>
      <SEO
        title="Contacts - Get in Touch with 1win Partners"
        description="Contact 1win Partners affiliate team via Telegram, email, or live chat. Our support team is available 24/7 to help you succeed."
        keywords="contact 1win, affiliate support, telegram support, email contact"
      />
      <Navigation />

      <div className="min-h-screen pt-20 pb-20">
        <div className="container px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Our team is here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-all bg-card border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <p className="text-muted-foreground mb-4">
                Instant support via Telegram
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a 
                  href="https://t.me/aviatormanager1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open Telegram
                </a>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all bg-card border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                support@1win-partners.com
              </p>
              <Button asChild variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                <a href="mailto:support@1win-partners.com">
                  Send Email
                </a>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all bg-card border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Chat with us in real-time
              </p>
              <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                Start Chat
              </Button>
            </Card>
          </div>

          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Want to Become an Affiliate?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of successful partners and start earning with 1win today. 
                Our team will guide you through the entire process.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <a href="https://lkxw.cc/a0b0" target="_blank" rel="noopener noreferrer">
                    Join Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
                  <a href="https://1win.run/?p=syeU" target="_blank" rel="noopener noreferrer">
                    Affiliate Portal
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
            <p className="text-muted-foreground mb-2">Support Available 24/7</p>
            <p className="text-muted-foreground">
              We operate globally and our team is always ready to assist you
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
