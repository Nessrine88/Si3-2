import React, { useState, ChangeEvent, FormEvent } from 'react';
import "../app/globals.css"
interface FormData {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
  input7: string;
  textarea: string;
}

const CardPopup: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
  const [formData, setFormData] = useState<FormData>({
    input1: 'Company Name',
    input2: 'Community Leader Name*',
    input3: 'Community Leader Email* ',
    input4: 'X Handle',
    input5: 'Warpast Handle',
    input6: 'Community Website',
    input7: 'Community Location',
    textarea: 'Community Type'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    show && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 overflow-auto "
        aria-labelledby="popup-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative bg-white mt-96 mb p-6 rounded-lg shadow-lg w-full max-w-lg">
        <img src="/images/circleBg.png" alt="" className='absolute inset-0 mt-10 w-full h-[70%] '/>
          <button
            className="absolute top-2 right-2  text-white px-2 py-2 rounded "
            onClick={handleClose}
            aria-label="Close popup"
          >
           <i className="fas fa-times text-gray-300 text-lg"></i>

          </button>
          <h2 id="popup-title" className="text-2xl mb-4 ">Add Community </h2>
          <form onSubmit={handleSubmit}>
            {(['Community Name*', 'Community Leader Name*', 'Community Leader Email* ', 'X Handle', 'Warpast Handle', 'Community Website', 'Community Location','Community Type','Community Description*'] as const).map((inputName) => (
              <div className="mb-4 fira-mono-regular" key={inputName}>
                <label className="block text-gray-700">{inputName.replace('input', 'Input ')}</label>
                <input
                  type="text"
                  name={inputName}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={formData[inputName]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700">Textarea</label>
              <textarea
                name="textarea"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.textarea}
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
