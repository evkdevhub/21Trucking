import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  id: string;
  name: string;
  location: string;
  imageUrl?: string;
  rating: number;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajveer S.",
    location: "Texas • 2 Years with 21TRUCKING",
    imageUrl: "/Rajveer.jpg",
    rating: 5,
    content:
      "I've been driving for over 10 years, and I've never made this kind of money anywhere else. Miles are consistent, pay is always on time, and dispatch truly has your back.",
  },
  {
    id: "2",
    name: "Marcus H.",
    location: "Florida • 1 Year with 21TRUCKING",
    imageUrl: "/Marcus.jpg",
    rating: 5,
    content:
      "I left my previous company because I was tired of chasing paychecks. Here the freight is steady, the equipment is excellent, and I always know what I'll earn.",
  },
  {
    id: "3",
    name: "Andre T.",
    location: "Georgia • 3 Years with 21TRUCKING",
    imageUrl: "/Andre.jpg",
    rating: 5,
    content:
      "This company treats drivers with respect. Great trucks, flexible home time, and a dispatch team that actually listens. It feels like working with family.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/drivers.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-cyan-950/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-white mb-6">
            What Our Drivers Say
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it — hear from professional drivers
            who trust 21TRUCKING every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            const isHovered = hoveredId === t.id;

            return (
              <motion.div
                key={t.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-md
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:bg-white/15
                  "
                >
                  {/* Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                  <CardContent className="relative z-10 p-8">
                    {/* Driver */}
                    <div className="flex items-center mb-6">
                      <img
                        src={t.imageUrl}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-400"
                      />

                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {t.name}
                        </h4>

                        <p className="text-yellow-400 font-medium">
                          {t.location}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                            isHovered ? "scale-110" : ""
                          }`}
                          style={{
                            transitionDelay: `${i * 70}ms`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-100 italic leading-7 transition-transform duration-300 group-hover:scale-[1.02]">
                      "{t.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
