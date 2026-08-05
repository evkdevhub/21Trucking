import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

 const faqItems = [
  {
    id: 1,
    question: "What are the minimum requirements?",
    answer:
      "You must have a valid CDL Class A license, at least 3 months of verifiable OTR experience, and be able to pass a DOT drug screening and road test.",
  },
  {
    id: 2,
    question: "Do you hire solo drivers or only teams?",
    answer:
      "We hire both solo and team drivers. If you don't have a co-driver, we'll help match you with one.",
  },
  {
    id: 3,
    question: "How does the pay work?",
    answer:
      "Solo drivers earn $0.65–$0.70 CPM or 30–35% of gross. Team drivers earn $0.80–$0.85 CPM or 35–40% of gross. You can choose the pay option that fits you best.",
  },
  {
    id: 4,
    question: "Do you offer bonuses?",
    answer:
      "Yes! Drivers receive a $100 weekly bonus after completing their first 4 consecutive weeks on the road.",
  },
  {
    id: 5,
    question: "What is your home time policy?",
    answer:
      "Stay out 4 weeks and take your truck home with up to 3 days off. Stay 5+ weeks and we'll cover your one-way flight home. Stay 8+ weeks and we'll cover your round-trip flights and transfers.",
  },
];
  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section
      className="relative min-h-screen flex items-start justify-center pt-24 bg-light-gray"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          id="faq"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl lg:text-5xl text-cyan-950 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here's what drivers ask us most.
          </p>
        </motion.div>

        <div className="space-y-6 mb-10">
          {faqItems.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg overflow-hidden">
                <Button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors bg-transparent text-cyan-950 hover:text-navy break-words sm:break-normal text-base sm:text-xl"
                  variant="ghost"
                >
                  <h3 className="font-semibold break-words sm:break-normal text-base sm:text-xl">
                    {faq.question}
                  </h3>
                  {activeFaq === faq.id ? (
                    <ChevronUp className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ChevronDown className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </Button>

                <AnimatePresence initial={false}>
                  {activeFaq === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="px-4 sm:px-8 pb-4 sm:pb-6 text-gray-700 text-sm sm:text-base break-words">
                        <p>{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
