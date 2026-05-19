"use client";

import {
  Bot,
  Rocket,
  Code2,
  GitBranch,
  Download,
  FileCode2,
  Laptop,
  Cog,
  RefreshCw,
  Play,
  Star,
  Users,
  Zap,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Mail,
  Globe,
  HelpCircle,
  Terminal,
  Package,
  Smartphone,
  ExternalLink,
  Shield,
  Clock,
  Layers,
  Send,
  CreditCard,
  Sparkles,
  Boxes,
  Workflow,
  MousePointerClick,
  BookOpen,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: Rocket,
    title: "Fast & Always On",
    description:
      "Bot runs in the cloud. You can power off your phone and your bot keeps working 24/7 without interruption.",
  },
  {
    icon: FileCode2,
    title: "Easily Editable",
    description:
      "Edit commands in a simple way through the intuitive mobile or web interface.",
  },
  {
    icon: Download,
    title: "Commands Importing",
    description:
      "Have a Google Sheet file? Create a bot from it directly with our import tools.",
  },
  {
    icon: RefreshCw,
    title: "Github Sync",
    description:
      "Import code from Github or other repositories. You can also export your work anytime.",
  },
  {
    icon: Laptop,
    title: "Desktop & Mobile",
    description:
      "Use the web app or mobile app — whichever suits your workflow and preference.",
  },
  {
    icon: Cog,
    title: "BJS for Logic",
    description:
      "Use Bot JavaScript (BJS) to add powerful custom logic to any command.",
  },
];

const STATS = [
  { value: "200K+", label: "Downloads", icon: Download },
  { value: "4.6", label: "Star Rating", icon: Star },
  { value: "925+", label: "User Reviews", icon: Users },
  { value: "100M+", label: "Iterations Served", icon: Zap },
];

const TESTIMONIALS = [
  {
    name: "Tanvir Hossain Bijoy",
    rating: 5,
    text: "Awesome app easy to use. Please create bots like rich crypto bot, dogeclick bot. That will help us a lot.",
  },
  {
    name: "Akmaljon Maxkamov",
    rating: 5,
    text: "Thanks to the developer for this awesome app. Really makes bot creation simple and fun.",
  },
  {
    name: "Sajin M. Simon",
    rating: 5,
    text: "Killer app. Exactly what I needed for my Telegram bot projects. Highly recommended.",
  },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    period: "forever",
    icon: Sparkles,
    features: [
      "4,000 iterations/month",
      "Unlimited bots",
      "No advertisements",
      "Community support",
      "Bot Store access",
    ],
    highlight: false,
    cta: "Start Free",
  },
  {
    name: "Hobby",
    description: "For hobby bot builders",
    price: 15,
    period: "/month",
    icon: Boxes,
    features: [
      "1 million iterations/month",
      "Unlimited bots",
      "No advertisements",
      "Priority support",
      "Bot Store access",
      "Github integration",
    ],
    highlight: true,
    cta: "Get Started",
  },
  {
    name: "Business",
    description: "For growing businesses",
    price: 95,
    period: "/month",
    icon: Workflow,
    features: [
      "10 million iterations/month",
      "Unlimited bots",
      "No advertisements",
      "Dedicated support",
      "Bot Store access",
      "Github integration",
      "Custom webhooks",
      "Analytics dashboard",
    ],
    highlight: false,
    cta: "Contact Sales",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: 270,
    period: "/month",
    icon: Shield,
    features: [
      "100 million iterations/month",
      "Unlimited bots",
      "No advertisements",
      "24/7 dedicated support",
      "Bot Store access",
      "Github integration",
      "Custom webhooks",
      "Analytics dashboard",
      "SLA guarantee",
      "Custom integrations",
    ],
    highlight: false,
    cta: "Contact Sales",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is BJS?",
    answer:
      "BJS stands for Bot JavaScript. It's ordinary JavaScript with some special inserts. A command can have scenarios with BJS code — for example, calculating 2+2 and sending the result to the chat. In BJS, you can use all the usual JS functions except setTimeout and setInterval.",
  },
  {
    question: "How can I get two answers from one command?",
    answer:
      'You can use the bot answer and Bot.sendMessage("ANY message"). Or use Bot.sendMessage twice in your BJS code.',
  },
  {
    question: "How do I add a command to my bot?",
    answer:
      "Open your bot in the app, go to the Commands section, and tap the + button. Enter the command name and the response you want the bot to send.",
  },
  {
    question: "Can I use my own hosting?",
    answer:
      "No, you don't need your own hosting. Bots.Business runs your bots in the cloud. This is one of the key advantages — no hosting, database, or SSL certificates to manage.",
  },
  {
    question: "What is an iteration?",
    answer:
      "An action (e.g., receiving a message or an Auto Retry call) is counted as one iteration, regardless of the number of messages or actions in the response.",
  },
  {
    question: "Can I import bots from others?",
    answer:
      "Yes! You can install bots from the Bot Store or import code from Github repositories. This makes it easy to get started quickly with existing bot templates.",
  },
];

const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      {
        label: "Bot Store",
        href: "https://app.bots.business",
        external: true,
      },
      {
        label: "Download",
        href: "https://play.google.com/store/apps/details?id=bb_app.com.bots.business",
        external: true,
      },
      {
        label: "Web App",
        href: "https://app.bots.business",
        external: true,
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        label: "Help Center",
        href: "https://help.bots.business",
        external: true,
      },
      {
        label: "BJS Documentation",
        href: "https://help.bots.business/scenarios-and-bjs",
        external: true,
      },
      {
        label: "Github Integration",
        href: "https://help.bots.business/git",
        external: true,
      },
      { label: "FAQ", href: "#faq" },
      {
        label: "API Reference",
        href: "https://help.bots.business",
        external: true,
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ============================================================ */}
      {/*  NAVBAR                                                      */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="https://bots.business/images/logo.png"
                alt="Bots.Business"
                className="h-7 w-7"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Bots.Business
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <Button key={link.href} variant="ghost" size="sm" asChild>
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://help.bots.business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help
                  <ExternalLink className="size-3 ml-1" />
                </a>
              </Button>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                  <ArrowRight className="size-3.5 ml-1" />
                </a>
              </Button>
            </div>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon-sm" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ============================================================ */}
        {/*  HERO — CENTERED                                             */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
                <Zap className="size-3.5" />
                Chat Bot Platform as a Service
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] font-heading">
                Create Your Own
                <br />
                Telegram Bot
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                New bot development application. Start creating amazing bots for
                your business — no hosting, no database, no SSL certificates
                required. Just build and run.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Free
                    <ArrowRight className="size-4 ml-1.5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="size-4 mr-1.5" />
                    Download App
                  </a>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Star className="size-4 fill-foreground" />
                  4.6 Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Download className="size-4" />
                  200K+ Downloads
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-4" />
                  925+ Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  ABOUT                                                       */}
        {/* ============================================================ */}
        <section id="about" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 ring-1 ring-foreground/10 rounded-xl mb-6">
                <Bot className="size-7 text-foreground" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Your Bot in Telegram
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug font-heading">
                Create bots through the mobile app or use the website.
                <br className="hidden sm:block" />
                Or import the code from Github.
              </h2>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BOT STORE                                                   */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 gap-1.5">
                  <Package className="size-3.5" />
                  Bot Store
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 font-heading">
                  Install Bot from Bot Store
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In the store, various bots are available. Do you need referral
                  tracking? Or a way to chat with your users via bot? This and
                  more is ready to install from the Bot Store.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <a
                    href="https://app.bots.business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Store
                    <ChevronRight className="size-4 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                        <Package className="size-5" />
                      </div>
                      <div>
                        <CardTitle>Bot Store</CardTitle>
                        <CardDescription>
                          Ready-to-use bot templates
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Referral Tracking Bots",
                      "User Chat Bots",
                      "Crypto Bots",
                      "Utility Bots",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="size-1.5 rounded-full bg-foreground" />
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BJS PROGRAMMING                                             */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <Card className="w-full max-w-sm bg-foreground text-primary-foreground ring-0">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Terminal className="size-4" />
                      <span className="text-xs font-mono text-primary-foreground/60">
                        bjs-example
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm font-mono leading-relaxed text-primary-foreground/80">
                      <code>{`// Calculate and respond
let result = 2 + 2;
Bot.sendMessage(
  "Result: " + result
);

// You can use any JS
// except setTimeout
// and setInterval`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="secondary" className="mb-4 gap-1.5">
                  <Code2 className="size-3.5" />
                  Programming
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 font-heading">
                  Bot JavaScript — BJS
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A command can have scenarios with BJS code. For example,
                  calculating 2+2 and sending the result to the chat — that is
                  BJS code.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  In BJS, you can use all the usual JavaScript functions except
                  setTimeout and setInterval.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <a
                    href="https://help.bots.business/scenarios-and-bjs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ExternalLink className="size-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  GITHUB INTEGRATION                                          */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 gap-1.5">
                  <GitBranch className="size-3.5" />
                  Github
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 font-heading">
                  Sync Code with Github
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Write the code with your favorite editor. Then import it from a
                  Github repository to your bot. You can also export your bot
                  code back to Github for version control.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <a
                    href="https://help.bots.business/git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ExternalLink className="size-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                        <GitBranch className="size-5" />
                      </div>
                      <div>
                        <CardTitle>Github Integration</CardTitle>
                        <CardDescription>Two-way code sync</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Import from any repository",
                      "Export bot code to Github",
                      "Use your favorite editor",
                      "Version control built in",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="size-3.5" />
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FEATURES GRID                                               */}
        {/* ============================================================ */}
        <section id="features" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <MousePointerClick className="size-3.5" />
                Features
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Powerful Features
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to build and run Telegram bots at any scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center mb-2">
                      <feature.icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  STATS                                                       */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-4">
                    <stat.icon className="size-5 mx-auto mb-3 text-muted-foreground" />
                    <div className="text-3xl sm:text-4xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  TESTIMONIALS                                                */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <Star className="size-3.5" />
                Testimonials
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Trusted by Thousands
              </h2>
              <p className="mt-4 text-muted-foreground">
                Over 200,000 downloads from Play Store with 4.6 stars from 925+
                users
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="pt-4">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-foreground text-foreground"
                          />
                        )
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <Separator className="my-4" />
                    <div className="flex items-center gap-3">
                      <div className="size-8 ring-1 ring-foreground/10 rounded-full flex items-center justify-center">
                        <Users className="size-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm font-medium">
                        {testimonial.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  UNLIMITED FUNCTIONALITY                                     */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 gap-1.5">
                  <Layers className="size-3.5" />
                  Unlimited
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 font-heading">
                  Develop Bots with Unlimited Functionality
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You can really make any bots. The libraries will help you with
                  this. You do not need a hosting, database, certificate for
                  webhooks — just make your bot and run it.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-4 flex items-start gap-4">
                    <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        New Features Added Regularly
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        New bots and new libraries are added to the store
                        regularly to expand your possibilities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4 flex items-start gap-4">
                    <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Open to Discovery
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bot development is something new. It&apos;s interesting
                        and useful for businesses of all sizes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING                                                     */}
        {/* ============================================================ */}
        <section id="pricing" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <CreditCard className="size-3.5" />
                Pricing
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-muted-foreground">
                Start free and scale as your bot grows. All plans include
                unlimited bots.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {PRICING_PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex flex-col ${
                    plan.highlight ? "ring-2 ring-foreground" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="size-9 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                        <plan.icon className="size-4" />
                      </div>
                      {plan.highlight && (
                        <Badge variant="secondary">Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="mt-3">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-3">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Separator className="mb-4" />
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="size-3.5 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <a
                        href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {plan.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-14 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center size-10 ring-1 ring-foreground/10 rounded-lg mb-3">
                <HelpCircle className="size-5 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-semibold">What is an iteration?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                An action (e.g., receiving a message or Auto Retry call) is
                counted as one iteration, regardless of the number of messages or
                actions in response.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ                                                         */}
        {/* ============================================================ */}
        <section id="faq" className="border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <HelpCircle className="size-3.5" />
                FAQ
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA SECTION                                                 */}
        {/* ============================================================ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Ready to Build Your Bot?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Join thousands of developers who trust Bots.Business for their
                Telegram bot needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Free
                    <ArrowRight className="size-4 ml-1.5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4 mr-1.5" />
                    Download App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CONTACT                                                     */}
        {/* ============================================================ */}
        <section id="contact" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <Mail className="size-3.5" />
                Contact
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have questions about Bots.Business? We&apos;re here to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-4 flex flex-col items-center gap-2">
                  <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                    <Mail className="size-5" />
                  </div>
                  <h4 className="text-sm font-semibold">Email</h4>
                  <p className="text-xs text-muted-foreground">
                    support@bots.business
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-4 flex flex-col items-center gap-2">
                  <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                    <Globe className="size-5" />
                  </div>
                  <h4 className="text-sm font-semibold">Help Center</h4>
                  <p className="text-xs text-muted-foreground">
                    help.bots.business
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-4 flex flex-col items-center gap-2">
                  <div className="size-10 ring-1 ring-foreground/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="size-5" />
                  </div>
                  <h4 className="text-sm font-semibold">Telegram</h4>
                  <p className="text-xs text-muted-foreground">
                    @BotsBusinessBot
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================ */}
      {/*  FOOTER — BIG DARK COMPANY FOOTER                                */}
      {/* ================================================================ */}
      <footer className="bg-card border-t border-border">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* Brand column - spans 2 on lg */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <img
                  src="https://bots.business/images/logo.png"
                  alt="Bots.Business"
                  className="size-8"
                />
                <span className="text-lg font-semibold text-foreground font-heading">
                  Bots.Business
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Chat Bot Platform as a Service. Create powerful Telegram bots
                with ease — no hosting, no database, no SSL required.
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground mb-3">
                  Stay Updated
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground max-w-[220px]"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Send className="size-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {FOOTER_LINKS.product.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.product.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="size-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {FOOTER_LINKS.resources.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.resources.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="size-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {FOOTER_LINKS.company.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {FOOTER_LINKS.legal.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.legal.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Bots.Business. All rights
                reserved.
              </p>
              <span className="hidden sm:inline text-border">|</span>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <MapPin className="size-3" />
                Chat Bot Platform as a Service
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                Made with <Heart className="size-3 fill-foreground" /> by{" "}
                <span className="font-semibold text-foreground">xKaiiddo</span>
              </p>
              <span className="text-border">|</span>
              <a
                href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Smartphone className="size-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitBranch className="size-4" />
              </a>
              <a
                href="https://help.bots.business"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookOpen className="size-4" />
              </a>
              <a
                href="mailto:support@bots.business"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
