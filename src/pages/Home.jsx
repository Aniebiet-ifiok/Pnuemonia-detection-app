import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-br from-blue-100 to-white">
        <div className="max-w-xl">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Breathe Easy with Our Pneumonia Simulator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6"
          >
            Learn the symptoms of pneumonia, discover treatment options, and try
            out our simulator for early support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              to="/landing"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Try the Simulator
            </Link>
          </motion.div>
        </div>

        <motion.img
          src="https://img.freepik.com/free-photo/female-doctor-is-checking-lung-x-ray-film_1150-16147.jpg"
          alt="Doctor and patient"
          className="w-full md:w-1/2 mt-6 md:mt-0 rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Info Section */}
      <section className="py-16 px-10 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Understanding Pneumonia
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "What is Pneumonia?",
              desc: "Pneumonia is a lung infection that can make it hard to breathe and cause cough, fever, and chest pain.",
              img: "https://www.cdc.gov/pneumonia/images/pneumonia-illustration.jpg",
            },
            {
              title: "Common Symptoms",
              desc: "Shortness of breath, chest pain, coughing, chills, fatigue, and a high fever are all signs of pneumonia.",
              img: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2023/03/pneumonia-732x549-thumbnail.jpg",
            },
            {
              title: "Treatment",
              desc: "Antibiotics, rest, fluids, and in some cases hospitalization, are used to treat pneumonia depending on severity.",
              img: "https://images.everydayhealth.com/images/healthy-living/vaccine-guide/how-vaccines-help-treat-prevent-pneumonia-alt-722x406.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} className="mb-4 rounded" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
