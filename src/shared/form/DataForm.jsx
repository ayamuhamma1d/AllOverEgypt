import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import SelectCountryList from 'react-select-country-list';


const DataForm = () => {
    const countryOptions = [
        { value: 'us', label: 'United States' },
      ];
        const [selectedCountry, setSelectedCountry] = useState(null);
        const [countryCode, setCountryCode] = useState('');
        const handleCountryChange = (value) => {
          setSelectedCountry(value);
          setCountryCode(value?.value || '');
        };
        const handleCountryCodeChange = (event) => {
          setCountryCode(event.target.value);
        };
  return (
    <Form>
              <div className="row justify-content-between">
                <div className="col-md-4 text-center">
                  <Form.Group className="mb-3  " controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" className='rounded-0' />

                  </Form.Group>
                </div>

                <div className="col-md-4 text-center">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className='rounded-0' />

                  </Form.Group>
                </div>
                <div className="col-md-4 text-center">
                  <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Select
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      options={SelectCountryList().getData().map(({ value, label }) => ({
                        value,
                        label: `${label} (${value})`,
                      }))}
                      placeholder="Select Country"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4 text-center">
                  <Form.Group className="mb-3" controlId="formBasicCountryCode">
                    <Form.Control
                      type="text"
                      placeholder="Country Code"
                      value={countryCode}
                      onChange={handleCountryCodeChange}
                      className="rounded-0"
                    />
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


              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                <Form.Control as="textarea" rows={3} placeholder='Your Notes (optional)' />
              </Form.Group>
              <Button variant="primary" type="submit" className='w-100 main_Color border-0 rounded-0 py-2'>
                Submit
              </Button>
            </Form>
  )
}

export default DataForm