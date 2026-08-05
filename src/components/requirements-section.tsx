import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const payItems = [
  {
    title: "Valid CDL Class A License",
    icon: <img src="/cdl.svg" alt="CDL Class A" className="w-8 h-8" />,
    description:
      "A valid CDL Class A license is required to operate commercial vehicles across the United States.",
  },
  {
    title: "Minimum 3 Months of Experience",
    icon: <img src="/road.svg" alt="Experience" className="w-8 h-8" />,
    description:
      "At least 6 months of verifiable OTR driving experience is required to join our team.",
  },
  {
    title: "Pass DOT Requirements",
    icon: <img src="/CheckCircle.svg" alt="DOT Requirements" className="w-8 h-8" />,
    description:
      "Applicants must pass a DOT drug screening, background check, and road test during orientation.",
  },
  {
    title: "Solo & Team Drivers Welcome",
    icon: <img src="/team.svg" alt="Solo and Team Drivers" className="w-8 h-8" />,
    description:
      "We welcome both solo and team drivers. If you don't have a co-driver, we'll help match you with one.",
  },
];

export default function RequirementsSection() {
  const scrollToApplication = () => {
    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const truckRef = useRef(null);
  const isTruckInView = useInView(truckRef, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen py-16 bg-light-gray flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Заголовок */}
        <motion.div
          id="pay"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 scroll-mt-24"
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-cyan-950 mb-3">
            Who We’re Looking For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a company that pays well and keeps you moving — see if you’re a
            good fit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Левая колонка: карточки */}
          <div className="space-y-3">
            {payItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 border border-gold/30 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-gold">
                        {item.title}
                      </h3>
                      <span className="text-3xl font-bold">{item.icon}</span>
                    </div>
                    <p className="text-gray-600 text-m">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Правая колонка: трак + кнопка */}
          <div ref={truckRef}>
            <div className="relative w-full h-auto">
              {isTruckInView && (
                <motion.img
                  src="/truck.png"
                  alt="truck"
                  className="w-full"
                  initial={{ opacity: 0.5, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    x: { duration: 2, ease: "easeOut" },
                    opacity: { duration: 1 },
                  }}
                />
              )}
            </div>

            {/* Кнопка */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-14"
            >
              <Button
  onClick={scrollToApplication}
  className="bg-gradient-to-r from-yellow-500 to-yellow-700
hover:from-lime-500 hover:to-lime-700
text-white tracking-wider font-extrabold text-2xl lg:text-3xl
px-16 py-6 lg:px-24 lg:py-8 rounded-full
shadow-2xl hover:shadow-3xl
transform hover:scale-110
transition-all duration-300"
>
  Become a Driver
</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
