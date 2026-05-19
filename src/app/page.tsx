"use client";

import {
  Bot,
  Rocket,
  Code2,
  Github,
  Cloud,
  FileCode2,
  Laptop,
  Cog,
  RefreshCw,
  Download,
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

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screens", href: "#screens" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  {
    icon: Rocket,
    title: "Fast & Always On",
    description: "Bot runs in the cloud. You can power off your phone and your bot keeps working 24/7.",
  },
  {
    icon: FileCode2,
    title: "Easily Editable",
    description: "Edit commands in a simple way through the mobile or web interface.",
  },
  {
    icon: Download,
    title: "Commands Importing",
    description: "Have a Google Sheet file? Create a bot from it directly.",
  },
  {
    icon: RefreshCw,
    title: "Github Sync",
    description: "Import code from Github or other repositories. You can also export your work.",
  },
  {
    icon: Laptop,
    title: "Desktop & Mobile",
    description: "Use the web app or mobile app — whichever suits your workflow.",
  },
  {
    icon: Cog,
    title: "BJS for Logic",
    description: "Use Bot JavaScript (BJS) to add powerful logic to any command.",
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
    text: "Thanks to the developer for this awesome app. Really makes bot creation simple.",
  },
  {
    name: "Sajin M. Simon",
    rating: 5,
    text: "Killer app. Exactly what I needed for my Telegram bot projects.",
  },
];

const PRICING_PLANS = [
  {
    name: "Free (No Ads)",
    price: 0,
    iterations: "4,000",
    features: ["4,000 iterations", "Unlimited bots", "No advertisements"],
    highlight: false,
  },
  {
    name: "Free (With Ads)",
    price: 0,
    iterations: "300,000",
    features: ["300,000 iterations", "Unlimited bots", "Ad-supported"],
    highlight: false,
  },
  {
    name: "Cloud Hobby",
    price: 15,
    iterations: "1M",
    features: ["1 million iterations", "Unlimited bots", "No advertisements"],
    highlight: true,
  },
  {
    name: "Cloud Nano",
    price: 28,
    iterations: "2M",
    features: ["2 million iterations", "Unlimited bots", "Priority support"],
    highlight: false,
  },
  {
    name: "Cloud Mini",
    price: 48,
    iterations: "5M",
    features: ["5 million iterations", "Unlimited bots", "Priority support"],
    highlight: false,
  },
  {
    name: "Cloud Start",
    price: 95,
    iterations: "10M",
    features: ["10 million iterations", "Unlimited bots", "Priority support"],
    highlight: false,
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

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ---- NAVBAR ---- */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="https://bots.business/images/logo.png"
                alt="Bots.Business"
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Bots.Business
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://help.bots.business"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Help
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-1.5" />
                  Download
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web App
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" asChild>
              <a href="#mobile-menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ---- HERO ---- */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6 text-sm font-medium">
                Chat Bot Platform as a Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Create Your Own
                <br />
                Telegram Bot
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                New bot development application. Start creating amazing bots for
                your business — no hosting, no database, no SSL certificates
                required.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://app.bots.business/?utm_source=bots.business&utm_medium=website&utm_campaign=web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download App
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Meet &quot;CBPaaS&quot; — Chat Bot Platform as a Service
              </p>
            </div>
          </div>
        </section>

        {/* ---- ABOUT ---- */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 border border-border rounded-lg mb-6">
                <Bot className="h-7 w-7 text-foreground" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Your Bot in Telegram
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                Create bots through the mobile app or use the website.
                <br />
                Or import the code from Github.
              </h3>
            </div>
          </div>
        </section>

        {/* ---- BOT STORE ---- */}
        <section className="border-b border-border bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Package className="h-3.5 w-3.5 mr-1" />
                  Bot Store
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                  Install Bot from Bot Store
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In the store, various bots are available. Do you need referral
                  tracking? Or a way to chat with your users via bot? This and
                  more is in the Bot Store.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <a
                    href="https://app.bots.business"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Store
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Bot Store</CardTitle>
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
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ---- BJS PROGRAMMING ---- */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Card className="w-full max-w-sm bg-foreground text-primary-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
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
              <div className="order-1 md:order-2">
                <Badge variant="secondary" className="mb-4">
                  <Code2 className="h-3.5 w-3.5 mr-1" />
                  Programming
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
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
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---- GITHUB INTEGRATION ---- */}
        <section className="border-b border-border bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Github className="h-3.5 w-3.5 mr-1" />
                  Github
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                  Sync Code with Github
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Write the code with your favorite editor. Then import it from
                  a Github repository to your bot. You can also export your bot
                  code back to Github.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <a
                      href="https://help.bots.business/git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center">
                        <Github className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          Github Integration
                        </CardTitle>
                        <CardDescription>
                          Two-way code sync
                        </CardDescription>
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
                        <ChevronRight className="h-3.5 w-3.5" />
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ---- FEATURES ---- */}
        <section id="features" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">
                Features
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Powerful Features
              </h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need to build and run Telegram bots at any scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="border border-border">
                  <CardHeader>
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-2">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
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

        {/* ---- STATS ---- */}
        <section className="border-b border-border bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <Card key={stat.label} className="border border-border text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-5 w-5 mx-auto mb-3 text-muted-foreground" />
                    <div className="text-3xl font-bold text-foreground">
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

        {/* ---- TESTIMONIALS ---- */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">
                Testimonials
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Over 200,000 Downloads from Play Store
              </h2>
              <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2">
                <Star className="h-4 w-4 fill-foreground" />
                4.6 stars from 925+ users
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <Card key={testimonial.name} className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-foreground text-foreground"
                          />
                        )
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <Separator className="my-4" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-muted-foreground" />
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

        {/* ---- SCREENS ---- */}
        <section id="screens" className="border-b border-border bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">
                Screens
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                App Screens
              </h2>
              <p className="mt-3 text-muted-foreground">
                The application has a modern user-friendly interface, convenient
                for use on any device.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: "Bot Dashboard", icon: MessageSquare },
                { label: "Command Editor", icon: Terminal },
                { label: "Bot Store", icon: Package },
                { label: "Bot Settings", icon: Cog },
                { label: "Analytics", icon: Zap },
                { label: "User Management", icon: Users },
                { label: "Code Editor", icon: Code2 },
                { label: "Cloud Console", icon: Cloud },
              ].map((screen) => (
                <Card
                  key={screen.label}
                  className="border border-border flex flex-col items-center justify-center py-8 px-4"
                >
                  <screen.icon className="h-8 w-8 text-muted-foreground mb-3" />
                  <span className="text-sm font-medium text-center">
                    {screen.label}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---- UNLIMITED FUNCTIONALITY ---- */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Unlimited
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                  Develop Bots with Unlimited Functionality
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You can really make any bots. The libraries will help you with
                  this. You do not need a hosting, database, certificate for
                  webhooks — just make your bot and run it.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="border border-border">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        New Features Added Regularly
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        New bots and new libraries are added to the store
                        regularly.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Open to Discovery
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bot development is something new. It&apos;s interesting
                        and useful.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ---- DOWNLOAD CTA ---- */}
        <section className="border-b border-border bg-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  Download The App
                </h2>
                <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                  It is free. Available on Google Play Store. Apple Store version
                  coming soon.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=bb_app.com.bots.business&utm_source=bots.business&utm_medium=website&utm_campaign=download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Play Store
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 border border-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-16 w-16 text-primary-foreground/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- PRICING ---- */}
        <section id="pricing" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">
                Pricing
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Our Pricing Plans
              </h2>
              <p className="mt-3 text-muted-foreground">
                Start free and scale as your bot grows. All plans include
                unlimited bots.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING_PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={`border ${
                    plan.highlight
                      ? "border-foreground"
                      : "border-border"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{plan.name}</CardTitle>
                      {plan.highlight && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-sm text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4" />
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
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
                        Get Started
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-lg mb-3">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
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

        {/* ---- FAQ ---- */}
        <section id="faq" className="border-b border-border bg-muted/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
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

        {/* ---- CONTACT ---- */}
        <section id="contact" className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Contact
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Have questions about Bots.Business? Need help getting started?
                  Reach out to us and we&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="border border-border">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        support@bots.business
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Help Center</h4>
                      <p className="text-sm text-muted-foreground">
                        help.bots.business
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-border">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Telegram</h4>
                      <p className="text-sm text-muted-foreground">
                        @BotsBusinessBot
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="https://bots.business/images/logo.png"
                  alt="Bots.Business"
                  className="h-7 w-7 invert"
                />
                <span className="text-base font-semibold text-primary-foreground">
                  Bots.Business
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Chat Bot Platform as a Service. Create powerful Telegram bots
                with ease.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Screens", href: "#screens" },
                  { label: "Download", href: "#screens" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Help Center",
                    href: "https://help.bots.business",
                  },
                  {
                    label: "BJS Documentation",
                    href: "https://help.bots.business/scenarios-and-bjs",
                  },
                  {
                    label: "Github Integration",
                    href: "https://help.bots.business/git",
                  },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="h-3 w-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Contact", href: "#contact" },
                  {
                    label: "Web App",
                    href: "https://app.bots.business",
                  },
                  {
                    label: "Play Store",
                    href: "https://play.google.com/store/apps/details?id=bb_app.com.bots.business",
                  },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="h-3 w-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-primary-foreground/10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Bots.Business. All rights
              reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Chat Bot Platform as a Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
