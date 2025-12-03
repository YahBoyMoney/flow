"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Star, MapPin, Clock, Shield, Truck, Instagram, ArrowRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const weeklySpecials = [
  { day: "Monday", name: "$5 Gram Madness", deal: "Everything $5/g", price: "$5/g" },
  { day: "Tuesday", name: "7g Tuesday", deal: "7g for $20", price: "$20" },
  { day: "Wednesday", name: "Half Zip Wednesday", deal: "Half Ounce $50", price: "$50" },
  { day: "Thursday", name: "Ten Sack Thursday", deal: "10g for $50", price: "$50" },
  { day: "Friday", name: "Fat O Friday", deal: "Ounce $100", price: "$100" },
  { day: "Saturday", name: "Top Shelf Saturday", deal: "Premium Ounce $120", price: "$120" },
  { day: "Sunday", name: "Sunday Stash", deal: "7g for $20 OR Half O for $50", price: "From $20" },
]

const serviceAreas = ["San Bernardino", "Rialto", "Fontana", "Colton", "Highland"]

export default function FlowerDeptPage() {
  const [currentDay, setCurrentDay] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const today = new Date().getDay()
    const adjustedDay = today === 0 ? 6 : today - 1
    setCurrentDay(adjustedDay)

    const timer = setInterval(() => {
      const now = new Date()
      const midnight = new Date(now)
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const todaySpecial = weeklySpecials[currentDay]

  return (
    <div className="min-h-screen bg-white text-black">
      <motion.div
        className="bg-black text-white py-2.5 px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm md:text-base font-semibold">
          <span className="text-green-400">Today's Special:</span> {todaySpecial.name} — {todaySpecial.deal} |{" "}
          <span className="text-yellow-400 font-bold">$40 Minimum on All Orders</span> |{" "}
          <a href="tel:+17633441778" className="underline hover:text-green-400 transition-colors">
            Call (763) 344-1778
          </a>
        </p>
      </motion.div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Image
              src="/images/flower-dept-logo.png"
              alt="Flower Dept - Cannabis Delivery San Bernardino"
              width={180}
              height={60}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="https://www.instagram.com/flowerdeptsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-600 transition-colors p-2"
                aria-label="Follow Flower Dept on Instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-green-600 text-white hover:bg-green-700 font-bold px-4 md:px-6 rounded-full text-sm md:text-base"
              >
                <Phone className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">(763) 344-1778</span>
                <span className="sm:hidden">Call</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-12 md:py-20 lg:py-28 px-4 md:px-6 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">San Bernardino's #1 Delivery</span>
                </motion.div>

                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                  Get Premium
                  <br />
                  <span className="text-green-600">Cannabis</span>
                  <br />
                  <span className="text-black/80">in 30 Minutes</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Call now and save with today's special.{" "}
                  <strong className="text-black">Licensed, lab-tested, delivered discreetly</strong> to your door.
                </p>

                <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-full">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-bold">$40 Minimum on All Orders</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                    <Button
                      onClick={() => (window.location.href = "tel:+17633441778")}
                      className="bg-green-600 text-white hover:bg-green-700 h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-bold rounded-full shadow-xl shadow-green-600/30 w-full"
                      size="lg"
                    >
                      <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                      Call to Order
                    </Button>
                  </motion.div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white h-14 md:h-16 px-6 md:px-8 text-base md:text-lg font-semibold rounded-full transition-all bg-transparent"
                    size="lg"
                  >
                    <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      Follow for Deals
                    </a>
                  </Button>
                </div>

                {/* Phone number prominent */}
                <div className="pt-2">
                  <a
                    href="tel:+17633441778"
                    className="text-2xl md:text-3xl font-black text-black hover:text-green-600 transition-colors"
                  >
                    (763) 344-1778
                  </a>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white flex items-center justify-center text-white text-xs font-bold shadow-md"
                      >
                        {["JM", "AK", "SR", "TW", "ML"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-black/60 font-medium">500+ verified customers</p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Today's Special Card */}
              <motion.div
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <div className="relative z-10 space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                        Today's Special
                      </span>
                      <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Clock className="h-3 w-3 md:h-4 md:w-4 text-green-400" />
                        <span className="text-xs md:text-sm font-mono">
                          {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">{todaySpecial.name}</h2>
                      <p className="text-xl md:text-2xl text-white/80">{todaySpecial.deal}</p>
                    </div>

                    <div className="flex items-end gap-3 pt-2">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-black text-green-400">
                        {todaySpecial.price}
                      </span>
                    </div>

                    <p className="text-yellow-400 text-sm font-semibold">$40 Minimum Order Required</p>

                    <Button
                      onClick={() => (window.location.href = "tel:+17633441778")}
                      className="w-full bg-green-500 text-white hover:bg-green-400 h-12 md:h-14 text-base md:text-lg font-bold rounded-full mt-2"
                    >
                      <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Claim This Deal Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 md:py-8 px-4 md:px-6 bg-black/5 border-y border-black/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {[
                { icon: Clock, label: "30 Min Delivery" },
                { icon: Shield, label: "Lab Tested" },
                { icon: Truck, label: "Discreet Packaging" },
                { icon: DollarSign, label: "$40 Minimum" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  <span className="text-xs md:text-sm font-semibold text-black/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Specials */}
        <section id="specials" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs md:text-sm font-bold tracking-widest text-green-600 uppercase mb-3 md:mb-4">
                Save Every Day
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight">Weekly Specials</h2>
              <p className="text-black/60 mt-4 max-w-lg mx-auto">$40 minimum on all orders</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {weeklySpecials.map((special, i) => (
                <motion.div
                  key={special.day}
                  className={`p-5 md:p-6 rounded-2xl border-2 transition-all ${
                    i === currentDay
                      ? "bg-black text-white border-green-500 shadow-xl shadow-green-500/20"
                      : "bg-white border-black/10 hover:border-black/30"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {i === currentDay && (
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-3">
                      TODAY
                    </span>
                  )}
                  <p
                    className={`text-xs font-bold tracking-wider uppercase ${i === currentDay ? "text-green-400" : "text-green-600"}`}
                  >
                    {special.day}
                  </p>
                  <h3
                    className={`text-lg md:text-xl font-black mt-1 ${i === currentDay ? "text-white" : "text-black"}`}
                  >
                    {special.name}
                  </h3>
                  <p className={`text-sm mt-1 ${i === currentDay ? "text-white/70" : "text-black/60"}`}>
                    {special.deal}
                  </p>
                  <p
                    className={`text-2xl md:text-3xl font-black mt-3 ${i === currentDay ? "text-green-400" : "text-green-600"}`}
                  >
                    {special.price}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10 md:mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-green-600 text-white hover:bg-green-700 h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold rounded-full shadow-lg shadow-green-600/30"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Call to Order — $40 Min
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How to Order */}
        <section id="verification" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-black text-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs md:text-sm font-bold tracking-widest text-green-400 uppercase mb-3 md:mb-4">
                Easy Process
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight">Order in 3 Steps</h2>
              <p className="text-white/60 mt-4">$40 minimum on all delivery orders</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Call Us",
                  desc: "Reach out at (763) 344-1778 to place your order ($40 min)",
                  icon: Phone,
                },
                {
                  step: "02",
                  title: "Send ID + Selfie",
                  desc: "Text a photo of your ID and a selfie for verification",
                  icon: Shield,
                },
                {
                  step: "03",
                  title: "Get Delivery",
                  desc: "Sit back - your order arrives in 30 minutes or less",
                  icon: Truck,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-5xl md:text-7xl font-black text-white/5 absolute top-2 md:top-4 right-2 md:right-4">
                    {item.step}
                  </div>
                  <div className="relative space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black">{item.title}</h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10 md:mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                className="bg-green-500 text-white hover:bg-green-400 h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold rounded-full shadow-lg shadow-green-500/30"
              >
                Start Order Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section id="delivery" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                className="space-y-6 md:space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-green-600 uppercase mb-3 md:mb-4">
                    Service Areas
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                    We Deliver to Your City
                  </h2>
                </div>
                <p className="text-black/60 text-base md:text-lg leading-relaxed">
                  Fast, discreet cannabis delivery across San Bernardino County. Average delivery time is 30 minutes or
                  less. <strong className="text-black">$40 minimum on all orders.</strong>
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-semibold"
                    >
                      <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      {area}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => (window.location.href = "tel:+17633441778")}
                  className="bg-green-600 text-white hover:bg-green-700 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold rounded-full"
                >
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Check Availability
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 md:p-8 lg:p-10 rounded-3xl">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm text-center">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-black text-black">30</p>
                      <p className="text-xs md:text-sm text-black/60">Min Avg Delivery</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm text-center">
                      <MapPin className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-black text-black">5</p>
                      <p className="text-xs md:text-sm text-black/60">Cities Served</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm text-center">
                      <Star className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-black text-black">500+</p>
                      <p className="text-xs md:text-sm text-black/60">Happy Customers</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm text-center">
                      <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-black text-black">$40</p>
                      <p className="text-xs md:text-sm text-black/60">Minimum Order</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Instagram className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Follow Us for Exclusive Deals</h2>
              <p className="text-white/90 text-base md:text-lg">
                Get flash sales, giveaways, and early access to new products
              </p>
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold rounded-full"
              >
                <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                  @flowerdeptsb
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/flower-dept-logo.png"
                alt="Flower Dept"
                width={200}
                height={66}
                className="h-12 md:h-16 w-auto mx-auto invert"
              />
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight">Ready to Order?</h2>
              <p className="text-base md:text-xl text-white/60 max-w-xl mx-auto">
                Call now for same-day delivery. New customers verified in minutes.{" "}
                <strong className="text-yellow-400">$40 minimum on all orders.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                <Button
                  onClick={() => (window.location.href = "tel:+17633441778")}
                  className="bg-green-500 text-white hover:bg-green-400 h-14 md:h-16 px-10 md:px-12 text-lg md:text-xl font-black rounded-full shadow-lg shadow-green-500/30"
                  size="lg"
                >
                  <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                  (763) 344-1778
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold rounded-full transition-all bg-transparent"
                  size="lg"
                >
                  <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    @flowerdeptsb
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Image
                src="/images/flower-dept-logo.png"
                alt="Flower Dept"
                width={140}
                height={46}
                className="h-8 w-auto invert"
              />
              <p className="text-white/40 text-xs md:text-sm">Premium Cannabis Delivery</p>
              <p className="text-yellow-400 text-xs font-semibold">$40 Minimum on All Orders</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <Button
                onClick={() => (window.location.href = "tel:+17633441778")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-5 md:px-6 bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                (763) 344-1778
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-5 md:px-6 bg-transparent"
              >
                <a href="https://www.instagram.com/flowerdeptsb/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  @flowerdeptsb
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Flower Dept. All rights reserved. 21+ only. Licensed cannabis delivery.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTAs */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        <motion.a
          href="https://www.instagram.com/flowerdeptsb/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Follow us on Instagram"
        >
          <Instagram className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </motion.a>
        <motion.a
          href="tel:+17633441778"
          className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          aria-label="Call to order"
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </motion.a>
      </div>
    </div>
  )
}
