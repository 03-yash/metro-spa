import React, { useState } from "react";
import Footer from "../components/Footer";
import aromatherapymassage from "../assets/aromatherapy-massage.jpg";
import coconutmassage from "../assets/coconut-oil-massage.jpg";
import milkcream from "../assets/milk-cream-massage.jpg";
import swedish from "../assets/Swedish-Massage.jpeg";
import balinese from "../assets/balinese-massage.jpg";
import deeptissue from "../assets/deep-tissue-massage.jpg";
import royalthai from "../assets/RoyalThaiMassage.jpg";
import headmassage from "../assets/Head-Massage.jpg";
import backndshoulder from "../assets/head-shoulder-massage.webp";
import footreflexo from "../assets/foot-massage.jpg";
import zerothreefacial from "../assets/o3-facial.jpg";
import goldfacial from "../assets/gold-facial.webp";
import silverfacial from "../assets/silver-facial.jpg";
import shahnazfacial from "../assets/shahnaz-facial.jpeg";
import bodypolish from "../assets/body-polish.jpeg";
import healingtouch from "../assets/haling-touch.jpeg";
import vodkawine from "../assets/vodka-wine.jpg";
import forehand from "../assets/fourhand.jpg";
import couplemassage from "../assets/couple-massage.jpg";
import hotpotli from "../assets/hot-potili.jpeg";
import singaturemassage from "../assets/signature-massage.jpeg";
import chocolatemassage from "../assets/chocolate-massage.jpeg";
import sweetalmond from "../assets/sweet-almond-oil.jpg";
import orientaltouch from "../assets/oriental-touch.webp";
import urbantouch from "../assets/urban-touch.webp";
import gelmassage from "../assets/gel-massage.webp";
import ayurvedicmassage from "../assets/ayurvedic-massage.jpg";
import sportmassage from "../assets/sport-massage.jpeg";



const servicesData = [
  {
    title: "Coconut Oil Massage",
    price60: "₹3000",
    price90: "-",
    description:
      "Relax and rejuvenate with our nourishing coconut oil massage.",
    image: coconutmassage,
  },
  {
    title: "Milk Cream Massage",
    price60: "₹3000",
    price90: "-",
    description: "Indulge your senses with our luxurious milk cream massage.",
    image: milkcream,
  },
  {
    title: "Swedish Massage",
    price60: "₹2000",
    price90: "-",
    description:
      "A classic Swedish massage to relieve tension and improve circulation.",
    image: swedish,
  },
  {
    title: "Balinese Massage",
    price60: "₹2000",
    price90: "-",
    description:
      "Experience deep relaxation with the Balinese massage technique.",
    image: balinese,
  },
  {
    title: "Deep Tissue Massage",
    price60: "₹2000",
    price90: "-",
    description:
      "For deeper muscle relief, try our intense deep tissue massage.",
    image: deeptissue,
  },
  {
    title: "Aroma Massage",
    price60: "₹2000",
    price90: "-",
    description: "Soothe your body with the calming scents of essential oils.",
    image: aromatherapymassage,
  },
  {
    title: "Royal Thai Massage",
    price60: "₹2000",
    price90: "-",
    description: "Feel revitalized with our traditional Royal Thai massage.",
    image: royalthai,
  },
  {
    title: "Head Massage",
    price60: "₹1000",
    price90: "-",
    description: "Relieve stress and tension with our relaxing head massage.",
    image: headmassage,
  },
  {
    title: "Back and Shoulder",
    price60: "₹1000",
    price90: "-",
    description: "Focused relief for your back and shoulders.",
    image: backndshoulder,
  },
  {
    title: "Foot Reflexology",
    price60: "₹1000",
    price90: "-",
    description: "Relax your feet with targeted pressure point therapy.",
    image: footreflexo,
  },
  {
    title: "03+ Facial",
    price60: "₹4000",
    price90: "-",
    description: "Get a glowing complexion with our 03+ Facial treatment.",
    image: zerothreefacial,
  },
  {
    title: "Gold Facial",
    price60: "₹3000",
    price90: "-",
    description: "Rejuvenate your skin with the luxurious gold facial treatment.",
    image: goldfacial,
  },
  {
    title: "Silver Facial",
    price60: "₹2500",
    price90: "-",
    description: "Experience the refreshing benefits of our silver facial.",
    image: silverfacial,
  },
  {
    title: "Shahnaz Facial",
    price60: "₹3500",
    price90: "-",
    description: "A herbal facial inspired by the Shahnaz Hussain beauty range.",
    image: shahnazfacial,
  },
  {
    title: "Body Polishing",
    price60: "₹2500",
    price90: "-",
    description: "Exfoliate and brighten your skin with our body polishing.",
    image: bodypolish,
  },
  {
    title: "Healing Touch Massage",
    price60: "-",
    price90: "₹3000",
    description: "Rebalance your body with our healing touch massage.",
    image: healingtouch,
  },
  {
    title: "Vodka/Wine Spa",
    price60: "₹3000",
    price90: "-",
    description:
      "Pamper yourself with a luxurious spa treatment using vodka or wine.",
    image: vodkawine,
  },
  {
    title: "Forehand Massage",
    price60: "₹3500",
    price90: "-",
    description: "Enjoy the relaxing touch of our forehand massage technique.",
    image: forehand,
  },
  {
    title: "Couple Massage",
    price60: "₹3500",
    price90: "-",
    description: "Relax together with our soothing couple massage.",
    image:couplemassage,
  },
  {
    title: "Signature Massage",
    price60: "-",
    price90: "₹3000",
    description: "Experience our unique and exclusive signature massage.",
    image: singaturemassage,
  },
  {
    title: "Hot Potli Massage",
    price60: "₹4000",
    price90: "-",
    description:
      "Relieve muscle tension with our traditional hot potli massage.",
    image: hotpotli,
  },
  {
    title: "Chocolate Massage",
    price60: "-",
    price90: "₹4000",
    description: "Indulge your senses with our delicious chocolate massage.",
    image: chocolatemassage,
  },
  {
    title: "Sweet Almond Oil Massage",
    price60: "₹3000",
    price90: "-",
    description:
      "Nourish your skin with the benefits of sweet almond oil massage.",
    image: sweetalmond,
  },
  {
    title: "Oriental Touch (Thai Massage with Oil)",
    price60: "₹3000",
    price90: "-",
    description:
      "Experience a traditional Thai massage enhanced with soothing oils.",
    image: orientaltouch,
  },
  {
    title: "Urban Touch (Warm Oil Massage)",
    price60: "₹3000",
    price90: "-",
    description: "Relax with our warm oil massage for a deep soothing touch.",
    image: urbantouch,
  },
  {
    title: "Gel Massage",
    price60: "₹3000",
    price90: "-",
    description:
      "Enjoy a cooling and refreshing gel massage for ultimate relaxation.",
    image: gelmassage,
  },
  {
    title: "Ayurvedic Massage",
    price60: "₹3000",
    price90: "-",
    description:
      "Embrace traditional healing with our authentic Ayurvedic massage.",
    image: ayurvedicmassage,
  },
  {
    title: "Sports Massage",
    price60: "₹3000",
    price90: "",
    description:
      "Boost performance and recovery with our invigorating sports massage.",
    image: sportmassage,
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter services based on the search query
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // WhatsApp number and base URL
  const whatsappNumber = "+917440744919";
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}?text=`;

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">SERVICES</h2>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Search and Categories */}
          <div className="lg:w-1/3">
            {/* Search Bar */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Mobile Dropdown Button */}
              <button
                className="lg:hidden mt-2 w-full px-4 py-2 bg-pink-400 text-white rounded-md"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {isDropdownOpen ? "Hide Categories" : "Show Categories"}
              </button>
            </div>

            {/*  Dropdown (Mobile) */}
            <ul
              className={`lg:block ${
                isDropdownOpen ? "block" : "hidden"
              } bg-gray-100 p-4 rounded-md`}
            >
              {servicesData.map((service, index) => (
                <li
                  key={index}
                  className="py-2 border-b border-gray-300 cursor-pointer font-highlight"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/*Service Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div key={index} className="bg-white shadow-md rounded-md p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold font-heading">{service.title}</h3>
                    <a
                      href={`${whatsappBaseUrl}I would like to inquire/book the ${service.title} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-pink-500 px-3 py-1 rounded-md font-body"
                    >
                      Book/Inquire
                    </a>
                  </div>
                  <div className="text-sm text-gray-600 font-highlight">
                    <p >{service.description}</p>
                    <p>60 minutes: {service.price60}</p>
                    <p>90 minutes: {service.price90}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center p-4">
                <p className="text-lg">
                  Didn't find what you were looking for?
                </p>
                <a
                  href={`${whatsappBaseUrl}I would like to inquire/book a service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-pink-500 px-4 py-2 rounded-md mt-2"
                >
                  Inquire us
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
