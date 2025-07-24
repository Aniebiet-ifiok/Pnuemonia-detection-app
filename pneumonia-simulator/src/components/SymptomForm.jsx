import { useState } from 'react';
import PrescriptionModal from './PrescriptionModal';
import { motion } from 'framer-motion';

const symptomList = [
  { label: 'Persistent Cough', name: 'cough' },
  { label: 'High Fever', name: 'fever' },
  { label: 'Difficulty Breathing', name: 'breath' },
  { label: 'Chest Pain', name: 'chestPain' },
  { label: 'Fatigue or Weakness', name: 'fatigue' },
  { label: 'Rapid Breathing', name: 'rapidBreathing' },
  { label: 'Chills or Shivering', name: 'chills' },
  { label: 'Bluish Lips or Fingertips', name: 'bluishLips' },
  { label: 'Loss of Appetite', name: 'appetiteLoss' },
  { label: 'Sweating or Clammy Skin', name: 'clammySkin' },
];

const SymptomForm = () => {
  const [symptoms, setSymptoms] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [notFullyMatched, setNotFullyMatched] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSymptoms({ ...symptoms, [e.target.name]: e.target.checked });
    setError(''); // Clear error when user starts checking
  };

  const diagnose = () => {
    const anySymptomSelected = Object.values(symptoms).some((v) => v);
    if (!anySymptomSelected) {
      setError('Please select at least one symptom.');
      return;
    }

    const requiredSymptoms = ['cough', 'fever', 'breath'];
    const hasAllRequired = requiredSymptoms.every((s) => symptoms[s]);

    setNotFullyMatched(!hasAllRequired);
    setShowModal(true);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-blue-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h3
        className="text-2xl font-bold mb-6 text-center text-blue-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pneumonia Symptom Checker
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {symptomList.map((symptom, index) => (
          <motion.label
            key={symptom.name}
            className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:bg-blue-50 transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <input
              type="checkbox"
              name={symptom.name}
              onChange={handleChange}
              className="accent-blue-600 w-5 h-5"
            />
            <span className="text-gray-700">{symptom.label}</span>
          </motion.label>
        ))}
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-4 text-center font-medium">
          {error}
        </p>
      )}

      <motion.button
        onClick={diagnose}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-blue-700 hover:bg-blue-800 transition-all text-white px-8 py-4 w-full rounded-full shadow-lg text-lg font-medium"
      >
        Diagnose
      </motion.button>

      {showModal && (
        <PrescriptionModal
          onClose={() => setShowModal(false)}
          notFullyMatched={notFullyMatched}
        />
      )}
    </motion.div>
  );
};

export default SymptomForm;
