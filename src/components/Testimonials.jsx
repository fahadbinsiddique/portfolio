import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Collaborating with Fahad was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional work were evident throughout our project. The website he built increased our conversion rate by 40%.",
    name: "Michael Johnson",
    position: "Director at AlphaStream Technologies",
    avatar: "/20.jpg",
    rating: 5
  },
  {
    quote:
      "Fahad's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and achieve your brand vision, Fahad is the ideal partner. He delivered our project 2 weeks ahead of schedule.",
    name: "Sophia Martinez",
    position: "CEO at InnovateX Solutions",
    avatar: "/21.jpg",
    rating: 5
  },
  {
    quote:
      "Working with Fahad transformed our online presence. His technical expertise and creative solutions helped us stand out in a competitive market. The animations he implemented increased our engagement metrics significantly.",
    name: "David Kim",
    position: "Marketing Director at TechNova",
    avatar: "/23.jpg",
    rating: 4
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Don't just take our word for it. Here's what our clients say about working with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Quote className="w-8 h-8 text-purple-500 opacity-60 mb-4" />
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img 
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30" 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;