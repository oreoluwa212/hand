import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./inputComponents/InputField";
import TextareaField from "./inputComponents/TextareaField";
import HeaderText from "./textComponents/HeaderText";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.website || !urlRegex.test(formData.website)) {
      errors.website = "Valid URL is required";
    }
    if (!formData.details) {
      errors.details = "Project details are required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
    } else {
      setErrors({});
      console.log("Form data submitted:", formData);
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        navigate("/success");
      }, 2000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full justify-end items-end"
    >
      <ToastContainer />
      <div className="lgss:w-[45%] flex justify-end items-end text-center lgss:text-right">
        <HeaderText h1={"We'd love to hear from you"} />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <InputField
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <InputField
          type="url"
          name="website"
          placeholder="Website URL*"
          value={formData.website}
          onChange={handleChange}
          required
          error={errors.website}
        />
        <TextareaField
          name="details"
          placeholder="Project Details*"
          value={formData.details}
          onChange={handleChange}
          required
          error={errors.details}
        />
        <button type="submit" className="p-4 bg-black text-white rounded-lg">
          Send Proposal
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
