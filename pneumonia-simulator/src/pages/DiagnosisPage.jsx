import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SymptomForm from '../components/SymptomForm';

const DiagnosisPage = () => {
  return (
    <motion.div
      className="bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Header />
      <main className="px-6 py-8">
        <motion.h2
          className="text-2xl font-semibold text-center mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Symptom Checker
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SymptomForm />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default DiagnosisPage;
