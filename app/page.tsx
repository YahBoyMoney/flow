"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Menu, X, Moon, Sun, ArrowRight, Star, Truck, Shield, Users, Clock, Leaf, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const features = [
    {
      title: "24/7 Cannabis Delivery San Bernardino",
      description: "Premium cannabis flowers delivered to your door anytime in San Bernardino County.",
      icon: <Truck className="size-5" />,
    },
    {
      title: "Top-Shelf Cannabis Rialto & Fontana",
      description: "Hand-selected, highest quality cannabis sourced from trusted California growers.",
      icon: <Leaf className="size-5" />,
    },
    {
      title: "Same-Day Weed Delivery Colton",
      description: "Fast cannabis delivery within 30-60 minutes in Colton, Highland and surrounding areas.",
      icon: <Clock className="size-5" />,
    },
    {
      title: "Licensed Cannabis Delivery Service",
      description: "Professional, discreet cannabis delivery with secure payment options throughout Inland Empire.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Expert Cannabis Curation",
      description: "Our team carefully selects each cannabis product for quality, potency and customer satisfaction.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Premium Cannabis Customer Support",
      description: "Friendly cannabis experts available 24/7 to help with product selection and delivery questions.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <motion.div animate={pulseAnimation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="rounded-full h-14 w-14 bg-yellow-500 hover:bg-yellow-400 text-black shadow-2xl shadow-yellow-500/50"
            aria-label="Call for cannabis delivery"
          >
            <Phone className="size-6" />
          </Button>
        </motion.div>
      </motion.div>

      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-black/80 shadow-sm border-b border-green-500/20" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/flower-dept-logo.png"
              alt="Flower Dept Cannabis Delivery San Bernardino"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </motion.div>
          <nav className="hidden md:flex gap-8" role="navigation" aria-label="Main navigation">
            <Link href="#services" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
              Cannabis Services
            </Link>
            <Link href="#delivery" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
              Delivery Areas
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-gray-300 hover:text-green-400"
            >
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full bg-green-600 hover:bg-green-500 text-black font-semibold">
                <Phone className="mr-2 size-4" />
                Call Now
              </Button>
            </motion.div>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-gray-300">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-black/95 backdrop-blur-lg border-b border-green-500/20"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#services"
                className="py-2 text-sm font-medium text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#delivery"
                className="py-2 text-sm font-medium text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Delivery
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-green-500/20">
                <Button className="rounded-full bg-green-600 hover:bg-green-500 text-black font-semibold">
                  <Phone className="mr-2 size-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <motion.div
            className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#065f46_1px,transparent_1px),linear-gradient(to_bottom,#065f46_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            style={{ y }}
          ></motion.div>
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
            animate={floatingAnimation}
          ></motion.div>
          <motion.div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          ></motion.div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                  🔥 #1 Cannabis Delivery San Bernardino County
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-yellow-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Cannabis Delivery San Bernardino | Same-Day Weed Delivery Rialto, Fontana, Colton, Highland
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                🌿 Premium cannabis delivery service in San Bernardino County! Top-shelf flowers, concentrates & edibles
                delivered same-day to Rialto, Fontana, Colton, Highland. Licensed dispensary delivery 24/7. Call (763)
                344-1778 now!
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-lg bg-yellow-600 hover:bg-yellow-500 text-black font-bold shadow-lg hover:shadow-yellow-500/25 transition-all"
                  >
                    <Phone className="mr-2 size-5" />
                    Call/Text (763) 344-1778
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-14 px-8 text-lg border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent"
                  >
                    🌿 View Menu
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div animate={pulseAnimation} className="inline-block">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">📞 (763) 344-1778</div>
                  <div className="text-sm text-gray-400">Call or Text Now for Instant Service</div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {[
                  { icon: Check, text: "21+ Only" },
                  { icon: Check, text: "ID Required" },
                  { icon: Check, text: "Discreet Delivery" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                  >
                    <item.icon className="size-4 text-green-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl border border-green-500/20 bg-gradient-to-b from-gray-900 to-black"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/luxury-cannabis-app.png"
                  width={1280}
                  height={720}
                  alt="Flower Dept delivery app"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-green-500/20"></div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-green-500/30 to-yellow-500/30 blur-3xl opacity-70"
                animate={floatingAnimation}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-yellow-500/30 to-green-500/30 blur-3xl opacity-70"
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              ></motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="w-full py-12 border-y border-green-500/20 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-400">
                Trusted cannabis delivery service across San Bernardino County
              </p>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 text-gray-500"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { icon: Clock, text: "24/7 Cannabis Delivery" },
                  { icon: Truck, text: "Same-Day Weed Delivery" },
                  { icon: Shield, text: "Licensed & Discreet" },
                  { icon: Leaf, text: "Premium Cannabis Quality" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    variants={item}
                    whileHover={{ scale: 1.1, color: "#10b981" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon className="size-5 text-green-400" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                Cannabis Delivery Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Premium Cannabis Delivery San Bernardino County - Everything You Need
              </h2>
              <p className="max-w-[800px] text-gray-300 md:text-lg">
                From premium cannabis flower to fast same-day delivery, we provide a complete cannabis experience across
                San Bernardino, Rialto, Fontana, Colton, Highland and surrounding Inland Empire areas.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full overflow-hidden border-green-500/20 bg-gradient-to-b from-gray-900 to-black backdrop-blur transition-all hover:shadow-lg hover:shadow-green-500/10 hover:border-green-400/30">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div
                        className="size-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#065f46_1px,transparent_1px),linear-gradient(to_bottom,#065f46_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                Cannabis Delivery Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                How Cannabis Delivery Works in San Bernardino County
              </h2>
              <p className="max-w-[800px] text-gray-300 md:text-lg">
                Get premium cannabis delivered to your door in San Bernardino, Rialto, Fontana, Colton, Highland in just
                a few easy steps.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Call for Verification",
                  description:
                    "Call (763) 344-1778 to start your order. We'll guide you through our secure ID verification process.",
                },
                {
                  step: "02",
                  title: "Send ID & Selfie",
                  description:
                    "Text us a clear photo of your government ID and a selfie for age verification. Required for all new customers.",
                },
                {
                  step: "03",
                  title: "Browse & Order",
                  description:
                    "Once verified, browse our premium selection and place your order over the phone with our expert staff.",
                },
                {
                  step: "04",
                  title: "Fast Delivery",
                  description: "Your order will be delivered quickly and discreetly to your door within 30-60 minutes.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20 text-green-400 text-xl font-bold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* ID verification requirements section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 p-8 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-xl border border-yellow-500/30"
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  🆔
                </motion.div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">ID Verification Required</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  For your safety and legal compliance, all customers must complete our secure verification process
                  before placing their first order.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Required Documents:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-green-400" />
                        Valid government-issued photo ID
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-green-400" />
                        Clear selfie holding your ID
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-green-400" />
                        Must be 21+ years old
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">How to Send:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <Phone className="size-4 text-green-400" />
                        Text photos to (763) 344-1778
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="size-4 text-green-400" />
                        Secure & confidential process
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="size-4 text-green-400" />
                        Verification takes 5-10 minutes
                      </li>
                    </ul>
                  </div>
                </div>
                <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="rounded-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-8">
                    <Phone className="mr-2 size-4" />
                    Call to Start Verification
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Delivery Section */}
        <section id="delivery" className="w-full py-20 md:py-32 bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#065f46_1px,transparent_1px),linear-gradient(to_bottom,#065f46_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                Cannabis Delivery Areas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Cannabis Delivery San Bernardino, Rialto, Fontana, Colton, Highland - Fast & Discreet
              </h2>
              <p className="max-w-[800px] text-gray-300 md:text-lg">
                We proudly serve San Bernardino County with premium cannabis delivery to San Bernardino, Rialto,
                Fontana, Colton, Highland and surrounding Inland Empire cities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">Service Areas</h3>
                <p className="text-gray-300">
                  We deliver premium cannabis to the following cities in San Bernardino County:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { city: "San Bernardino", icon: "🏙️" },
                    { city: "Rialto", icon: "🌆" },
                    { city: "Fontana", icon: "🏘️" },
                    { city: "Colton", icon: "🏡" },
                    { city: "Highland", icon: "⛰️" },
                  ].map((area, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-4 bg-green-600/10 rounded-lg border border-green-500/20"
                    >
                      <span className="text-2xl">{area.icon}</span>
                      <span className="text-white font-medium">{area.city}</span>
                      <Check className="size-4 text-green-400 ml-auto" />
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-green-500/20">
                  <h4 className="font-semibold text-white">Delivery Information:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock className="size-4 text-green-400" />
                      <span className="text-gray-300">30-60 minute delivery time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="size-4 text-green-400" />
                      <span className="text-gray-300">Discreet and professional service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck className="size-4 text-green-400" />
                      <span className="text-gray-300">$50 minimum order for delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4 text-green-400" />
                      <span className="text-gray-300">ID verification required</span>
                    </li>
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="rounded-full bg-green-600 hover:bg-green-500 text-black font-semibold">
                    <Phone className="mr-2 size-4" />
                    Call to Confirm Your Area
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src="/san-bernardino-delivery-map.png"
                  width={600}
                  height={400}
                  alt="Delivery Areas Map - San Bernardino County"
                  className="rounded-xl shadow-lg border border-green-500/20"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-green-500/20"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-green-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="text-green-400 font-semibold text-sm">📍 Service Areas</div>
                  <div className="text-white text-xs">San Bernardino County</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                Contact Cannabis Delivery
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Contact Flower Dept for Cannabis Delivery San Bernardino County
              </h2>
              <p className="max-w-[800px] text-gray-300 md:text-lg">
                Call (763) 344-1778 now for same-day cannabis delivery in San Bernardino, Rialto, Fontana, Colton,
                Highland. Premium cannabis products and fast delivery services available 24/7.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-gray-300">
                  Call or text us to place your order or inquire about our products and services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 text-green-400" />
                    <span className="text-gray-300">(763) 344-1778</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="size-4 text-green-400" />
                    <span className="text-gray-300">24/7 Available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="size-4 text-green-400" />
                    <span className="text-gray-300">Fast & Discreet Delivery</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="text-center p-8 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl border border-green-500/30">
                  <motion.div animate={pulseAnimation} className="mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">📞 (763) 344-1778</div>
                    <div className="text-lg text-green-300">Call or Text for Instant Service</div>
                  </motion.div>
                  <p className="text-gray-300 mb-6">
                    Ready to place your order? Our friendly team is standing by 24/7 to help you with premium cannabis
                    delivery.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-8 py-3">
                      <Phone className="mr-2 size-4" />
                      Call Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-green-600/20 text-green-400 border-green-500/30">
                Cannabis Delivery FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Cannabis Delivery San Bernardino County - Frequently Asked Questions
              </h2>
              <p className="max-w-[800px] text-gray-300 md:text-lg">
                Find answers to common questions about our cannabis delivery service in San Bernardino, Rialto, Fontana,
                Colton, Highland and surrounding areas.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What areas do you deliver cannabis to in San Bernardino County?",
                    answer:
                      "We deliver premium cannabis to San Bernardino, Rialto, Fontana, Colton, Highland and surrounding areas in San Bernardino County. Call (763) 344-1778 to confirm cannabis delivery to your specific location.",
                  },
                  {
                    question: "How fast is cannabis delivery in San Bernardino?",
                    answer:
                      "We offer same-day cannabis delivery within 30-60 minutes in our San Bernardino County service areas. We're available 24/7 for your cannabis delivery needs.",
                  },
                  {
                    question: "What is the minimum order for cannabis delivery?",
                    answer:
                      "There is a $50 minimum order amount for cannabis delivery in San Bernardino County. We accept cash, debit cards, and credit cards for cannabis purchases.",
                  },
                  {
                    question: "Do I need ID for cannabis delivery in California?",
                    answer:
                      "Yes, you must be 21+ and present valid government-issued ID for cannabis delivery. New customers must complete our secure verification process by texting ID photos to (763) 344-1778.",
                  },
                  {
                    question: "How do I place a cannabis delivery order in San Bernardino?",
                    answer:
                      "You can place a cannabis delivery order by calling or texting us at (763) 344-1778. Our cannabis experts will help you select the perfect products for delivery.",
                  },
                  {
                    question: "What cannabis products do you deliver in San Bernardino County?",
                    answer:
                      "We deliver premium cannabis flowers, concentrates, edibles, and other cannabis products throughout San Bernardino County. Call (763) 344-1778 to learn about our current cannabis menu.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-green-500/20 py-2">
                      <AccordionTrigger className="text-left font-medium text-white hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <motion.div
            className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          ></motion.div>
          <motion.div
            className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          ></motion.div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                Ready for Same-Day Cannabis Delivery San Bernardino County?
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[700px] text-green-100 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Experience the finest cannabis delivery service in San Bernardino, Rialto, Fontana, Colton, Highland.
                Call (763) 344-1778 now for same-day cannabis delivery and enjoy premium flowers delivered to your door!
              </motion.p>

              <motion.div
                className="flex flex-col items-center gap-6 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div animate={pulseAnimation} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">📞 (763) 344-1778</div>
                  <div className="text-lg text-green-100">Call or Text for Instant Service</div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-full h-14 px-8 text-lg bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                    >
                      <Phone className="mr-2 size-5" />
                      Call/Text Now
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 px-8 text-lg bg-transparent border-white text-white hover:bg-white/10"
                    >
                      🌿 Browse Menu
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                className="text-sm text-green-100 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                21+ only. ID required. Licensed delivery areas only.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
