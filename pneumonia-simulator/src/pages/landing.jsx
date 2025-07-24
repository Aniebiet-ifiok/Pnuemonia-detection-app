import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <motion.div
      className="bg-white text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      <motion.section
        className="text-center px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to PneumoCare
        </motion.h1>
        <motion.p
          className="mb-6 max-w-xl mx-auto"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A digital solution for early detection of pneumonia symptoms and personalized prescription suggestions.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/diagnosisPage"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Start Diagnosis
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {["https://i.imgur.com/1.jpg", "https://i.imgur.com/2.jpg", "https://i.imgur.com/3.jpg"].map((url, i) => (
          <motion.img
            key={i}
            src={url}
            alt="pneumonia"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default LandingPage;
