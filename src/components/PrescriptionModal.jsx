import { motion } from "framer-motion";

const PrescriptionModal = ({ onClose, notFullyMatched }) => {
  const prescriptionText = `Recommended Prescription:
- Antibiotics (as prescribed by a doctor)
- Plenty of rest
- Hydration (drink lots of fluids)
- Use a humidifier to ease breathing
- Paracetamol or ibuprofen for fever

${notFullyMatched ? "Note: Your symptoms don't fully match pneumonia. Please consult a doctor for a proper diagnosis." : ""}
`;

  const downloadPrescription = () => {
    const blob = new Blob([prescriptionText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pneumonia_prescription.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white p-6 rounded-xl max-w-lg w-full shadow-2xl"
      >
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          Recommended Prescription
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Antibiotics (as prescribed by a doctor)</li>
          <li>Plenty of rest</li>
          <li>Hydration (drink lots of fluids)</li>
          <li>Use a humidifier to ease breathing</li>
          <li>Paracetamol or ibuprofen for fever</li>
        </ul>

        {notFullyMatched && (
          <p className="mt-4 text-red-600 font-medium">
            Note: Your symptoms don't fully match pneumonia. Please consult a doctor for a proper diagnosis.
          </p>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={downloadPrescription}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-md"
          >
            Download
          </button>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PrescriptionModal;
