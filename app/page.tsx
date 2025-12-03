"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, MapPin, Shield, Clock, ArrowRight, Check, ChevronDown, Instagram, Star, Zap, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [currentDay, setCurrentDay] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setCurrentDay(new Date().getDay())

    const calculateTimeLeft = () => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()

      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const dailySpecials = [
    { day: "Sunday", name: "Sunday Stash", deal: "7g for $20 OR Half O for $50", price: "FROM $20" },
    { day: "Monday", name: "$5 Gram Madness", deal: "Everything $5/g", price: "$5/g" },
    { day: "Tuesday", name: "7g Tuesday", deal: "7g for $20", price: "$20" },
    { day: "Wednesday", name: "Half Zip Wednesday", deal: "Half Ounce $50", price: "$50" },
    { day: "Thursday", name: "Ten Sack Thursday", deal: "10g for $50", price: "$50" },
    { day: "Friday", name: "Fat O Friday", deal: "Ounce $100", price: "$100" },
    { day: "Saturday", name: "Top Shelf Saturday", deal: "Premium Ounce $120", price: "$120" },
  ]

  const todaysSpecial = dailySpecials[currentDay]

  const stats = [
    { value: "500+", label: "Happy customers" },
    { value: "30min", label: "Avg delivery time" },
    { value: "24/7", label: "Always available" },
    { value: "5", label: "Cities served" },
  ]

  const trustSignals = ["Licensed & Legal", "Lab Tested Products", "Discreet Packaging", "ID Verified Delivery"]

  const cities = ["San Bernardino", "Rialto", "Fontana", "Colton", "Highland"]

  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white">
      <motion.div
        className="bg-black text-white py-3 text-center relative overflow-hidden"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-green-600/20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <p className="text-sm font-medium tracking-wide relative z-10">
          <span className="inline-flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="font-bold text-yellow-400">LIMITED TIME:</span>
            {todaysSpecial.name} — {todaysSpecial.deal}
            <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
              Ends in {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </span>
          <a href="tel:+17633441778" className="ml-4 underline hover:no-underline font-bold">
            Order Now
          </a>
        </p>
      </motion.div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Image
              src="/images/flower-dept-logo.png"
              alt="Flower Dept - Cannabis Delivery San Bernardino"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/flowerdeptsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/70 transition-colors"
                aria-label="Follow Flower Dept on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-black text-white hover:bg-black/90 font-medium px-6 rounded-full"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">(763) 344-1778</span>
                <span className="sm:hidden">Call Now</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Trust bar */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {trustSignals.map((signal, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-black/60">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>{signal}</span>
                </div>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Now Delivering in Your Area</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                    Premium Cannabis
                    <br />
                    <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      Delivered Fast
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-black/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    San Bernardino County's #1 rated cannabis delivery.
                    <strong className="text-black"> Call now and get your order in 30 minutes or less.</strong>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => (window.location.href = "tel:+17633441778")}
                      className="bg-green-600 text-white hover:bg-green-700 h-16 px-10 text-xl font-bold rounded-full shadow-lg shadow-green-600/30 w-full sm:w-auto"
                      size="lg"
                    >
                      <Phone className="mr-3 h-6 w-6 animate-pulse" />
                      (763) 344-1778
                    </Button>
                  </motion.div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white h-16 px-8 text-lg font-semibold rounded-full transition-all bg-transparent"
                    size="lg"
                  >
                    <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      @flowerdeptsb
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm font-bold ml-1">5.0</span>
                    </div>
                    <p className="text-xs text-black/50">from 500+ happy customers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>

                  <div className="space-y-6 relative z-10">
                    {/* Urgency badge */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full text-sm font-bold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Gift className="h-4 w-4" />
                        TODAY ONLY
                      </motion.div>
                      <div className="text-right">
                        <p className="text-xs text-white/50">Expires in</p>
                        <p className="font-mono font-bold text-lg">
                          {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                        {todaysSpecial.day}'s Special
                      </p>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{todaysSpecial.name}</h2>
                      <p className="text-xl text-white/80">{todaysSpecial.deal}</p>
                    </div>

                    <div className="flex items-end gap-4">
                      <span className="text-5xl lg:text-6xl font-bold text-green-400">{todaysSpecial.price}</span>
                      <span className="text-white/40 line-through text-2xl mb-2">$150</span>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => (window.location.href = "tel:+17633441778")}
                        className="w-full bg-green-500 text-white hover:bg-green-400 h-16 text-xl font-bold rounded-full"
                      >
                        <Phone className="mr-3 h-6 w-6" />
                        Claim This Deal Now
                      </Button>
                    </motion.div>

                    <p className="text-center text-sm text-white/50">
                      <Check className="inline h-4 w-4 mr-1" />
                      Free delivery on all orders
                    </p>
                  </div>
                </div>
                {/* Shadow decoration */}
                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-green-600/20 rounded-3xl blur-xl" />
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-black/40 mb-3">Now delivering to</p>
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-black/5 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-8 w-8 text-black/20" />
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-black/10 bg-black/[0.02]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="py-10 px-6 text-center border-r border-black/10 last:border-r-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                  <div className="text-sm text-black/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Specials */}
        <section id="specials" className="py-24 lg:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold tracking-widest text-black/40 uppercase mb-4">Save Every Day</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Weekly specials</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dailySpecials.map((special, index) => (
                <motion.div
                  key={special.day}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    index === currentDay
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/10 hover:border-black"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => (window.location.href = "tel:+17633441778")}
                >
                  {index === currentDay && (
                    <div className="absolute -top-3 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      TODAY
                    </div>
                  )}
                  <div className="space-y-4">
                    <p
                      className={`text-xs font-semibold tracking-widest uppercase ${index === currentDay ? "text-white/60" : "text-black/40"}`}
                    >
                      {special.day}
                    </p>
                    <h3 className="text-xl font-bold">{special.name}</h3>
                    <p className={`text-sm ${index === currentDay ? "text-white/70" : "text-black/50"}`}>
                      {special.deal}
                    </p>
                    <div className="pt-4 border-t border-current/20">
                      <span className="text-2xl font-bold">{special.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-green-600 text-white hover:bg-green-700 h-14 px-10 text-lg font-semibold rounded-full shadow-lg shadow-green-600/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (763) 344-1778
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Instagram CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">Follow us on Instagram</h3>
                <p className="text-white/90 text-lg">Daily updates, new strains, and exclusive deals</p>
              </div>
              <a
                href="https://www.instagram.com/flowerdeptsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <Instagram className="h-6 w-6" />
                @flowerdeptsb
              </a>
            </motion.div>
          </div>
        </section>

        {/* How It Works / Verification */}
        <section className="py-24 lg:py-32 px-6 bg-black text-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-4">Get Started</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Three simple steps</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Call us",
                  desc: "Reach out at (763) 344-1778 to start your first order.",
                  icon: Phone,
                },
                {
                  step: "02",
                  title: "Verify your ID",
                  desc: "Text a photo of your ID and a selfie. Quick and secure.",
                  icon: Shield,
                },
                {
                  step: "03",
                  title: "Get delivery",
                  desc: "Once verified, your order is on the way. Fast and discreet.",
                  icon: Clock,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative p-8 rounded-2xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-7xl font-bold text-white/5 absolute top-4 right-4">{item.step}</div>
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-white text-black hover:bg-white/90 h-14 px-10 text-lg font-semibold rounded-full"
              >
                Start Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="py-24 lg:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-sm font-semibold tracking-widest text-black/40 uppercase mb-4">Delivery Areas</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    Serving San Bernardino County
                  </h2>
                </div>

                <p className="text-xl text-black/60 leading-relaxed">
                  Fast, reliable delivery to your door. Available 24/7 with average delivery times under 30 minutes.
                </p>

                <div className="space-y-3">
                  {cities.map((city, i) => (
                    <motion.div
                      key={city}
                      className="flex items-center gap-4 p-4 bg-black/[0.02] rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-medium">{city}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={() => (window.location.href = "tel:+17633441778")}
                  className="bg-black text-white hover:bg-black/90 h-14 px-8 text-lg font-semibold rounded-full"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Check Your Area
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-black/[0.02] rounded-3xl flex items-center justify-center border-2 border-dashed border-black/10">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 mx-auto text-black/20 mb-4" />
                    <p className="text-2xl font-bold">San Bernardino County</p>
                    <p className="text-black/50 mt-2">Premium delivery service</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 px-6 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/flower-dept-logo.png"
                alt="Flower Dept"
                width={200}
                height={66}
                className="h-16 w-auto mx-auto invert"
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Ready to order?</h2>
              <p className="text-xl text-white/60 max-w-xl mx-auto">
                Call now for same-day delivery. New customers get verified in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() => (window.location.href = "tel:+17633441778")}
                  className="bg-white text-black hover:bg-white/90 h-16 px-12 text-xl font-bold rounded-full shadow-lg shadow-white/30 w-full sm:w-auto"
                  size="lg"
                >
                  <Phone className="mr-3 h-6 w-6 animate-pulse" />
                  (763) 344-1778
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black h-16 px-10 text-lg font-semibold rounded-full transition-all bg-transparent"
                  size="lg"
                >
                  <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow @flowerdeptsb
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/images/flower-dept-logo.png"
              alt="Flower Dept"
              width={160}
              height={53}
              className="h-12 w-auto"
            />
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="tel:+17633441778"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-black/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (763) 344-1778
              </a>
              <a
                href="https://www.instagram.com/flowerdeptsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
                @flowerdeptsb
              </a>
            </div>
            <p className="text-sm text-black/50 text-center">
              Licensed cannabis delivery in San Bernardino County. Must be 21+ with valid ID.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a
          href="https://www.instagram.com/flowerdeptsb/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Instagram className="h-6 w-6" />
        </motion.a>
        <motion.a
          href="tel:+17633441778"
          className="bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </div>
    </div>
  )
}
