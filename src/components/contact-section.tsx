import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <Phone className="text-cyan-950 w-6 h-6" />,
    title: "Call Us",
    info1: (
      <div className="space-y-1">
        <p
          className="text-gray-700 cursor-pointer hover:underline"
          onClick={() => window.open("tel:+19297644696")}
        >
          +1 (929) 764-4696
        </p>
        <p
          className="text-gray-700 cursor-pointer hover:underline"
          onClick={() => window.open("tel:+14076106444")}
        >
          +1 (407) 610-6444
        </p>
      </div>
    ),
    info2: "Mon – Fri, 9 AM – 6 PM ET",
  },
  {
    icon: <Mail className="text-cyan-950 w-6 h-6" />,
    title: "Email Us",
    info1: (
      <p
        className="text-gray-700 cursor-pointer hover:underline"
        onClick={() => window.open("mailto:jobs@21trucking.info")}
      >
        jobs@21trucking.info
      </p>
    ),
    info2: "Response within 4 hours",
  },
  {
    icon: <MapPin className="text-cyan-950 w-6 h-6" />,
    title: "Visit Us",
    info1: (
      <>
        1650 Sand Lake Rd, <br />
        Orlando, FL 32824, United States
      </>
    ),
    info2: "Free parking available",
  },
];

export default function ContactSection() {
  const handleDirections = () => {
    window.open(
      "https://maps.app.goo.gl/L3Zxhu6Kdvz8Rk6HA?g_st=ipc",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Анимация заголовка */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-cyan-950 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you’re ready to start driving or just have questions, we’d
            love to hear from you.
          </p>
        </motion.div>

        {/* Карточки с анимацией и одинаковой высотой */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5 items-stretch">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 h-full flex flex-col cursor-default">
                <CardContent className="p-4 space-y-2 flex flex-col flex-grow">
                  <div className="flex items-start space-x-4 flex-grow">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-cyan-950">
                        {contact.title}
                      </h4>
                      {typeof contact.info1 === "string" ? (
                        <p className="text-gray-700">{contact.info1}</p>
                      ) : (
                        contact.info1
                      )}
                      <p className="text-sm text-gray-500">{contact.info2}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Карта и часы работы с анимацией */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map с контейнером для сохранения пропорций */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex-1 rounded-xl overflow-hidden shadow-md aspect-w-16 aspect-h-9"
          >
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9837681824624!2d-81.4013961245329!3d28.44990569235059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c4cf67f785b%3A0x7315108ec3482c00!2s1650%20Sand%20Lake%20Rd%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sru!2sus!4v1785956488599!5m2!1sru!2sus"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  className="rounded-2xl shadow-xl"
/>
          </motion.div>

          {/* Office Hours с отступом снизу на мобилках */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-1/3 mb-6 lg:mb-0"
          >
            <Card className="bg-cyan-950 text-white h-full flex flex-col">
              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-base">
                    <div className="flex justify-between">
                      <span>Mon – Fri:</span>
                      <span className="text-yellow-400">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-yellow-400">9:00 AM – 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    onClick={handleDirections}
                    aria-label="Get directions to office location"
                    className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white tracking-wide font-extrabold text-xl 
                      px-10 py-5 rounded-full 
                      shadow-xl hover:shadow-2xl 
                      transform hover:scale-105 
                      transition-all duration-300 flex items-center justify-center"
                  >
                    <Navigation className="mr-2 w-6 h-6" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
