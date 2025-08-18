"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Menu, X, ArrowRight, Truck, Shield, Clock, Leaf, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const floatingAnimation = {
  y: [0, 20, 0],
  transition: {
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentDay, setCurrentDay] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const today = new Date().getDay()
    setCurrentDay(today)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const dailySpecials = [
    { day: "Sunday", special: "Sunday Stash", description: "Choice of 7g for $20 OR Half O for $50", price: "$20-$50" },
    { day: "Monday", special: "$5 Gram Madness", description: "Everything $5/g", price: "$5/g" },
    { day: "Tuesday", special: "7g Tuesday", description: "7g for $20", price: "$20" },
    { day: "Wednesday", special: "Half Zip Wednesday", description: "Half Ounce $50", price: "$50" },
    { day: "Thursday", special: "Ten Sack Thursday", description: "10g for $50", price: "$50" },
    { day: "Friday", special: "Fat O Friday", description: "Ounce $100", price: "$100" },
    { day: "Saturday", special: "Top Shelf Saturday", description: "Premium Ounce $120", price: "$120" },
  ]

  const todaysSpecial = dailySpecials[currentDay]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <motion.div
        className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 text-center relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div className="relative z-10 font-bold text-lg" animate={pulseAnimation}>
          🔥 Today's Special: {todaysSpecial.special} - {todaysSpecial.description} 🔥
        </motion.div>
        <div className="text-sm opacity-90">Call (763) 344-1778 to order now!</div>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <motion.div animate={pulseAnimation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="rounded-full h-14 w-14 bg-white hover:bg-gray-200 text-black shadow-2xl shadow-white/30"
            aria-label="Call for cannabis delivery"
            onClick={() => window.open("tel:+17633441778", "_self")}
          >
            <Phone className="size-6" />
          </Button>
        </motion.div>
      </motion.div>

      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-black/90 shadow-lg border-b border-gray-800" : "bg-black/80"}`}
      >
        <div className="container flex h-20 items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/flower-dept-logo.png"
              alt="Flower Dept Cannabis Delivery San Bernardino"
              width={240}
              height={80}
              className="h-16 w-auto"
            />
          </motion.div>

          <nav className="hidden lg:flex gap-1" role="navigation" aria-label="Daily specials">
            {dailySpecials.map((special, index) => (
              <motion.div
                key={special.day}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer group ${
                  index === currentDay ? "bg-green-600 border-2 border-green-400" : "bg-gray-800 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-xs font-semibold ${index === currentDay ? "text-white" : "text-white"}`}>
                  {special.day} {index === currentDay && "🔥"}
                </div>
                <div
                  className={`text-xs transition-colors ${
                    index === currentDay ? "text-green-100" : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {special.special}
                </div>
                <div className={`text-xs font-bold ${index === currentDay ? "text-green-200" : "text-gray-400"}`}>
                  {special.price}
                </div>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="rounded-full bg-white hover:bg-gray-200 text-black font-semibold px-6 py-2 shadow-lg"
                onClick={() => window.open("tel:+17633441778", "_self")}
              >
                <Phone className="mr-2 size-4" />
                (763) 344-1778
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 inset-x-0 bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg"
          >
            <div className="container py-6">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Specials</h3>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {dailySpecials.map((special, index) => (
                  <div
                    key={special.day}
                    className={`p-3 rounded-lg ${
                      index === currentDay ? "bg-green-600 border-2 border-green-400" : "bg-gray-800"
                    }`}
                  >
                    <div className={`font-semibold ${index === currentDay ? "text-white" : "text-white"}`}>
                      {special.day} {index === currentDay && "🔥 TODAY"}
                    </div>
                    <div className={`text-sm ${index === currentDay ? "text-green-100" : "text-gray-300"}`}>
                      {special.special}
                    </div>
                    <div className={`text-xs ${index === currentDay ? "text-green-50" : "text-gray-500"}`}>
                      {special.description}
                    </div>
                    <div className={`text-sm font-bold ${index === currentDay ? "text-green-200" : "text-gray-400"}`}>
                      {special.price}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="w-full rounded-full bg-white hover:bg-gray-200 text-black font-semibold"
                onClick={() => window.open("tel:+17633441778", "_self")}
              >
                <Phone className="mr-2 size-4" />
                Call (763) 344-1778
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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

          <div className="container relative z-10">
            <motion.div className="mx-auto max-w-4xl text-center" variants={container} initial="hidden" animate="show">
              <motion.div variants={item} className="mb-8">
                <Image
                  src="/images/flower-dept-logo.png"
                  alt="Flower Dept Cannabis Delivery"
                  width={300}
                  height={100}
                  className="mx-auto h-20 w-auto mb-6"
                />
                <Badge
                  variant="secondary"
                  className="mb-6 bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                >
                  Licensed Cannabis Delivery • San Bernardino County
                </Badge>
              </motion.div>
              <motion.h1
                variants={item}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6"
              >
                Premium Cannabis
                <span className="block bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Delivered Fast
                </span>
              </motion.h1>
              <motion.p variants={item} className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
                Fast, discreet cannabis delivery to San Bernardino, Rialto, Fontana, Colton, Highland. Premium products,
                unbeatable prices, professional service. Call now!
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="rounded-full bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold shadow-xl"
                    onClick={() => window.open("tel:+17633441778", "_self")}
                  >
                    <Phone className="mr-2 size-5" />
                    Call (763) 344-1778
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
                    onClick={() => document.getElementById("verification")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Daily Specials Section */}
        <section className="w-full py-20 bg-gray-900">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Weekly Specials Schedule</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Save big with our rotating daily deals. Call to place your order and take advantage of today's special!
              </p>
              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl max-w-md mx-auto"
                animate={pulseAnimation}
              >
                <div className="text-lg font-bold">🔥 TODAY: {todaysSpecial.special}</div>
                <div className="text-sm opacity-90">{todaysSpecial.description}</div>
                <div className="text-xl font-bold mt-2">{todaysSpecial.price}</div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailySpecials.map((special, index) => (
                <motion.div
                  key={special.day}
                  className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    index === currentDay
                      ? "bg-gradient-to-br from-green-500 to-green-600 text-white border-green-400 transform scale-105"
                      : "bg-gray-800 border-gray-700"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: index === currentDay ? 1.05 : 1.02 }}
                >
                  <div className="text-center">
                    <h3 className={`text-xl font-bold mb-2 ${index === currentDay ? "text-white" : "text-white"}`}>
                      {special.day} {index === currentDay && "🔥"}
                    </h3>
                    <div
                      className={`text-lg font-semibold mb-2 ${index === currentDay ? "text-green-100" : "text-gray-200"}`}
                    >
                      {special.special}
                    </div>
                    <p className={`text-sm mb-2 ${index === currentDay ? "text-green-50" : "text-gray-300"}`}>
                      {special.description}
                    </p>
                    <div
                      className={`text-2xl font-bold mb-4 ${index === currentDay ? "text-yellow-300" : "text-green-400"}`}
                    >
                      {special.price}
                    </div>
                    <Button
                      className={`w-full rounded-full font-semibold ${
                        index === currentDay
                          ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                          : "bg-white hover:bg-gray-200 text-black"
                      }`}
                      onClick={() => window.open("tel:+17633441778", "_self")}
                    >
                      <Phone className="mr-2 size-4" />
                      {index === currentDay ? "Order Today's Special!" : "Order Now"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
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
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Image
                src="/images/flower-dept-logo.png"
                alt="Flower Dept Services"
                width={200}
                height={67}
                className="h-10 w-auto mx-auto mb-6 opacity-80"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Premium Services</h2>
              <p className="text-gray-500 leading-relaxed">
                We offer a wide range of cannabis products and services to meet your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">24/7 Cannabis Delivery</h3>
                <p className="text-gray-400">
                  We provide fast and reliable cannabis delivery services around the clock.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Premium Cannabis Products</h3>
                <p className="text-gray-400">
                  We offer a wide selection of high-quality cannabis products, including flowers, edibles, and
                  concentrates.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Discreet and Secure Delivery</h3>
                <p className="text-gray-400">
                  We ensure that all deliveries are discreet and secure to protect your privacy.
                </p>
              </div>
            </div>
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

            <section id="verification" className="py-20 bg-gray-800">
              <div className="container mx-auto px-4">
                <motion.div
                  className="text-center max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    🆔
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">ID Verification Required</h3>
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
                      <h4 className="font-semibold text-white">Verification Process:</h4>
                      <ol className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                            1
                          </span>
                          Call (763) 344-1778 to start verification
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                            2
                          </span>
                          Text photos of ID & selfie to our secure line
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                            3
                          </span>
                          Get approved & place your order
                        </li>
                      </ol>
                    </div>
                  </div>
                  <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="rounded-full bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"
                      onClick={() => window.open("tel:+17633441778", "_self")}
                    >
                      <Phone className="mr-2 size-5" />
                      Start Verification Process
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
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
                  <Button
                    className="rounded-full bg-green-600 hover:bg-green-500 text-black font-semibold"
                    onClick={() => window.open("tel:+17633441778", "_self")}
                  >
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
                    <span
                      className="text-gray-300 cursor-pointer hover:text-green-300 transition-colors"
                      onClick={() => window.open("tel:+17633441778", "_self")}
                    >
                      (763) 344-1778
                    </span>
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
                    <div
                      className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 cursor-pointer hover:text-yellow-300 transition-colors"
                      onClick={() => window.open("tel:+17633441778", "_self")}
                    >
                      📞 (763) 344-1778
                    </div>
                    <div className="text-lg text-green-300">Call or Text for Instant Service</div>
                  </motion.div>
                  <p className="text-gray-300 mb-6">
                    Ready to place your order? Our friendly team is standing by 24/7 to help you with premium cannabis
                    delivery.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="rounded-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-8 py-3"
                      onClick={() => window.open("tel:+17633441778", "_self")}
                    >
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
        <section className="py-20 bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold text-white mb-4 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Ready to Order Premium Cannabis?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Call now for fast, discreet delivery to your door in San Bernardino County
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-lg bg-white hover:bg-gray-200 text-black font-bold"
                    onClick={() => window.open("tel:+17633441778", "_self")}
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
                    className="rounded-full h-14 px-8 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    🌿 Browse Menu
                  </Button>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-sm text-gray-400 mt-4"
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

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/images/flower-dept-logo.png"
                alt="Flower Dept Cannabis Delivery"
                width={200}
                height={67}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Premium cannabis delivery service in San Bernardino County. Licensed, secure, and professional.
              </p>
              <p className="text-gray-500">© {new Date().getFullYear()} Flower Dept. All rights reserved.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Daily Specials</h4>
              <ul className="text-gray-400 space-y-1">
                {dailySpecials.slice(0, 4).map((special) => (
                  <li key={special.day} className="text-sm">
                    <span className="font-medium">{special.day}:</span> {special.special} - {special.price}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <button
                    onClick={() => window.open("tel:+17633441778", "_self")}
                    className="hover:text-white transition-colors"
                  >
                    Phone: (763) 344-1778
                  </button>
                </li>
                <li>Email: support@flowerdept.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
