import React, { useState, ChangeEvent, FormEvent } from 'react';
import "../app/globals.css"

interface FormData {
  "Company Name": string;
  "Community Leader Name*": string;
  'Community Leader Email*': string;
  'X Handle': string;
  'Warpast Handle': string;
  'Community Website': string;
  'Community Location': string;
  'Community Type': string;
  'Community Description': string;
}

const CardPopup: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
  const initialFormData: FormData = {
    "Company Name": '',
    "Community Leader Name*": '',
    'Community Leader Email*': '',
    'X Handle': '',
    'Warpast Handle': '',
    'Community Website': '',
    'Community Location': '',
    'Community Type': '',
    'Community Description': ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const formPlaceholder = [
    'Company Name',
    'Community Leader Name*',
    'Community Leader Email*',
    'X Handle',
    'Warpast Handle',
    'Community Website',
    'Community Location',
    'Community Type',
    'Community Description'
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with actual submission logic
  };

  return (
    show && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 overflow-auto"
        aria-labelledby="popup-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative bg-white mt-96 mb p-6 rounded-lg shadow-lg w-full max-w-lg">
          <img src="/images/circleBg.png" alt="" className="absolute inset-0 z-20 mt-10 w-full h-[70%]" />
          <div className="flex justify-between items-center mb-4">
            <h2 id="popup-title" className="text-2xl">Add Community</h2>
         
              <i className="fas fa-times text-[#404040] text-lg" onClick={handleClose}></i>
          
          </div>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((inputName, index) => (
              <div key={inputName} className="mb-4">
                <label className="block text-[#404040]">{inputName}</label>
                <input
                  type="text"
                  name={inputName}
                  className="w-full p-2 border border-gray-300 rounded mt-1 relative z-30"
                  value={formData[inputName as keyof FormData]}
                  placeholder={formPlaceholder[index]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-[#404040]">Community Description</label>
              <textarea
                name="Community Description"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData['Community Description']}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 float-end clash font-medium text-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CardPopup;
