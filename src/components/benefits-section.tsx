import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Gift,
  Home,
  Truck,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: DollarSign,
    title: "Choose Your Pay",
    description:
      "Solo drivers earn $0.65–$0.70 CPM or 30–35% of gross. Team drivers earn $0.80–$0.85 CPM or 35–40% of gross.",
  },
  {
    icon: Gift,
    title: "$100 Weekly Bonus",
    description:
      "Earn an extra $100 every week after completing your first 4 weeks on the road.",
  },
  {
    icon: Home,
    title: "Flexible Home Time",
    description:
      "Stay out 4 weeks and take your truck home. Stay 5+ weeks and we'll cover your one-way flight home. Stay 8+ weeks and we'll cover round-trip flights and transfers.",
  },
  {
    icon: Truck,
    title: "Reliable Freight",
    description:
      "Consistent freight from Amazon, FedEx, UPS, and dedicated lanes keeps you moving every week.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Equipment",
    description:
      "Drive late-model Freightliner, Volvo, and Kenworth trucks equipped with APUs, refrigerators, microwaves, and spacious sleepers.",
  },
  {
    icon: Headset,
    title: "24/7 Driver Support",
    description:
      "Our experienced dispatch team is available around the clock whenever you need assistance.",
  },
];

export default function BenefitsSection() {
  const scrollToElementById = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-screen py-16 bg-light-gray flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          id="benefits"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 scroll-mt-24"
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-cyan-950 mb-4">
            Why Drive for 21TRUCKING?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-cyan-950">
              More Miles. More Pay. More Home Time.
            </span>

            <br />

            Everything you need to earn more, drive with confidence, and enjoy
            flexible home time with 21TRUCKING.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="h-full"
              >
                <Card className="group h-full bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Yellow top border */}
                  <div className="h-1 bg-yellow-400" />

                  <CardContent className="p-7">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-cyan-950 shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" strokeWidth={2.4} />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-bold text-xl text-cyan-950 mb-3">
                          {benefit.title}
                        </h3>

                        <p className="text-gray-600 leading-7">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-cyan-950 rounded-3xl px-6 sm:px-8 py-12 text-center shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Next Journey?
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Join 21TRUCKING and enjoy competitive pay, weekly bonuses,
              flexible home time, reliable freight, and support that keeps you
              moving.
            </p>

            {/* Apply Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => scrollToElementById("application-form")}
                className="
                  bg-gradient-to-r
                  from-yellow-500
                  to-yellow-700
                  hover:from-lime-500
                  hover:to-lime-700
                  text-white
                  tracking-wide
                  font-extrabold
                  px-8
                  py-4
                  text-lg
                  sm:text-xl
                  w-full
                  max-w-md
                  rounded-full
                  shadow-xl
                  hover:shadow-2xl
                  hover:scale-105
                  active:scale-95
                  transition-all
                  duration-300
                  cursor-pointer
                  focus:outline-none
                  focus:ring-4
                  focus:ring-yellow-300/50
                "
              >
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}