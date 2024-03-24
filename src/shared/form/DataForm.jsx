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

const DataForm = (props) => {
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
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
        reset();
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
    <Form ref={form} onSubmit={handleSubmit(sendEmail)} className='  '>
      <div className="row">
        <Form.Label className="mb-4  "> Trip name: <span className="ms-2 text-black">{props.tripTitle}	</span> </Form.Label>

        <div className="col-md-6 ">
          <Form.Group className="mb-3">


            <Form.Label htmlFor="name" className='mb-2 '>Name <FaStarOfLife className='form-icon-star text-danger me-1' /></Form.Label >
            <Form.Control type="text" placeholder="Name" className='  rounded-2'{...register("name", { required: true })} />
            {errors.name && <span className="text-danger ">Name is required</span>}
          </Form.Group>
        </div>
        <div className="col-md-6 ">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="PhoneNumber" className='mb-2'>Contact number <FaStarOfLife className='form-icon-star text-danger me-1' /></Form.Label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              onChange={(value) => setValue("phoneNumber", value)}
              {...register("phoneNumber")}
              className='form-control'
              name='phoneNumber'
            />

            {errors.phoneNumber && <span className="text-danger">Contact number is required</span>}
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicAdults">
            <Form.Label className="form__label">No. of Adults *</Form.Label>
            <Form.Control
              type="number"
              min="1"
              placeholder="Enter the number of adults *"
              className="py-3"
              required
              name='numberAdult'
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicChildren">
            <Form.Label className="form__label">No. of Children</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Enter the number of children"
              className="py-3"
              name='numberChild'
            />
          </Form.Group>
        </div>


        <div className="col-md-12 ">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email" className='mb-2  w-100'>Email <FaStarOfLife className='form-icon-star text-danger me-1' /></Form.Label >

            <Form.Control type="email" placeholder="Email" className=' form-control  rounded-2' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="text-danger ">Please enter a valid email</span>}
          </Form.Group>
        </div>
        <div className="col-md-12"><Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label className="form__label ">Country  <FaStarOfLife className='form-icon-star text-danger me-1' /> </Form.Label>
          <Select

            value={selectedCountry}
            onChange={handleCountryChange}
            options={SelectCountryList().getData().map(({ value, label }) => ({
              value,
              label: `${label} (${value})`,
            }))}
            placeholder="Select Country"
            name='country'
          />
        </Form.Group></div>


      </div>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={5} placeholder='Your Notes (optional)' {...register("notes")} name='note' />
      </Form.Group>
      <Button variant="primary" type="submit" className=' main_Color border-0 rounded-0 py-3 px-5'>
        Submit
      </Button>
      <ToastContainer position="bottom-right" />
    </Form>
  );
}

export default DataForm;