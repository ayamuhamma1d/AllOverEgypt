import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import SelectCountryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
const DataForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();

  const selectedCountry = watch("country");


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  console.log('====================================');
  console.log(e);
  console.log('====================================');

    emailjs
      .sendForm('service_emo6idn', 'template_1tt393g', form.current, {
        publicKey: 'W5cNBtIj8PwMe8xv7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert('submit success!')
  };

  const handleCountryChange = (value) => {
    setValue("country", value);
  };

  return (
    <Form  id="myForm"  ref={form} onSubmit={sendEmail}>
      <div className="row justify-content-between">
  
        <div className="col-md-4 text-center">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" className='rounded-0' {...register("name", { required: true })} />
            {errors.name && <span className="text-danger ">Name is required</span>}
          </Form.Group>
        </div>

        <div className="col-md-4 text-center">
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" className='rounded-0' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="text-danger">Please enter a valid email</span>}
          </Form.Group>
        </div>
        <div className="col-md-4 text-center">
          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Select
              {...register("country")}
              options={SelectCountryList().getData().map(({ value, label }) => ({
                value,
                label: `${label} (${value})`,
              }))}
              placeholder="Select Country"
              className={errors.country ? "is-invalid" : ""}
              onChange={(value) => handleCountryChange(value)}
            />
            {errors.country && <span className="text-danger">Please select a country</span>}
          </Form.Group>
        </div>

        <div className="col-md-4 text-center">
          <Form.Group className="mb-3">
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="RU"
              {...register("phoneNumber", { required: true })}
              className='form-control'
            />
            {errors.phoneNumber && <span className="text-danger">Please enter a phone number</span>}
          </Form.Group>
        </div>
        <div className="col-md-4 text-center">
          <Form.Group className="mb-3" controlId="formBasicAdults">
            <Form.Control type="number" placeholder="No. of Adults" className='rounded-0' />

          </Form.Group>
        </div>
        <div className="col-md-4 text-center">
          <Form.Group className="mb-3" controlId="formBasicChildren">
            <Form.Control type="number" placeholder="No. of Children" className='rounded-0' />

          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Control type="date" placeholder="Arrival Date" className='rounded-0' />

          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="date" placeholder="Departure Date" className='rounded-0' />

          </Form.Group>
        </div>
      </div>


      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} placeholder='Your Notes (optional)' {...register("notes")} />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-100 secondary-color shadow text-black border-0 rounded-0 py-2 mb-4'>
        Submit
      </Button>
    </Form>
  )
}

export default DataForm