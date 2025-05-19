import { useState } from "react";
import InputField from "./inputField";
import { fileReadUtil, isValidData } from "../Utlility";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eductaion: "",
    experience: "",
  });

  const submit = () => {
    for (const key of Object.keys(formData)) {
      if (!isValidData(key, formData[key])) {
        alert(`${key} is not valid`);
        return;
      }
    }

    alert("Form submitted successfully");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateFormData = (data) => {
    if (data.length > 1) {
      let tempFormData = { ...formData };
      for (let i = 0; i < data[0].length; i++) {
        const key = data[0][i].trim().toLowerCase();
        const value = data[1][i].trim();
        if (isValidData(key, value) === true) {
          tempFormData[key] = value;
        }
      }
      setFormData(tempFormData);
    }
  };
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = await fileReadUtil(file);
      updateFormData(data);
    }
  };
  return (
    <>
     <h2 className="text-2xl font-semibold  mt-2 mb-4 text-center">Application Form</h2>
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <InputField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
      <InputField
        label="Education"
        name="eductaion"
        value={formData.eductaion}
        onChange={handleChange}
        placeholder="Enter your Education"
      />
      <InputField
        label="Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Enter your Experience"
      />
      <label className=" bg-gray-300 text-black text-center font-bold w-25 text-sm border-2 rounded  m-4 hover:bg-gray-400">
        Upload File
        <input
          type="file"
          className="hidden"
          onChange={uploadFile}
          accept=".csv"
        />
      </label>
      <button
        className="bg-blue-500 text-white rounded-lg p-2 m-4"
        onClick={submit}
      >
        Submit
      </button>
    </>
  );
}
