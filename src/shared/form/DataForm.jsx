import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import SelectCountryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { FaStarOfLife } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
const DataForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const selectedCountry = watch("country");
  const form = useRef();
  const sendEmail = (data) => {
    emailjs
    .sendForm('service_emo6idn', 'template_wcelipj', form.current, {
      publicKey: 'W5cNBtIj8PwMe8xv7',
    })
    .then((response) => {
        console.log('Email sent successfully!', response);
        toast.success("Data sent successfully!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error("Error sending data!");
      });
  };
  const handleCountryChange = (value) => {
    setValue("country", value);
  };

  return (
    <Form ref={form} onSubmit={handleSubmit(sendEmail)} className='bg-white p-5 shadow rounded-3 w-75 m-auto'>
      <div className="row">
        <div className="col-md-6 ">
          <Form.Group className="mb-3">
            <label htmlFor="name" className='mb-2 '>Name <FaStarOfLife className='form-icon-star text-danger me-1' /></label>
            <Form.Control type="text" placeholder="Name" className='  rounded-2'{...register("name", { required: true })} />
            {errors.name && <span className="text-danger ">Name is required</span>}
          </Form.Group>
        </div>
        <div className="col-md-6 ">
          <Form.Group className="mb-3">
          <label htmlFor="PhoneNumber" className='mb-2 '>PhoneNumber <FaStarOfLife className='form-icon-star text-danger me-1' /></label>

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="RU"
              {...register("phoneNumber", { required: true })}
              className='form-control'
              name='phoneNumber'
            />
            {errors.phoneNumber && <span className="text-danger"> phone number</span>}
          </Form.Group>
        </div>
        <div className="col-md-12 ">
          <Form.Group className="mb-3">
          <label htmlFor="email" className='mb-2  w-100'>Email <FaStarOfLife className='form-icon-star text-danger me-1' /></label>

            <Form.Control type="email" placeholder="Email" className=' form-control  rounded-2' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="text-danger ">Please enter a valid email</span>}
          </Form.Group>
        </div>
       
   
      
      </div>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={5} placeholder='Your Notes (optional)' {...register("notes")} name='note' />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-100 main_Color text-white shadow text-black border-0  py-2 mb-4'>
        Submit
      </Button>
      <ToastContainer position="bottom-right" />
    </Form>
  );
}

export default DataForm;