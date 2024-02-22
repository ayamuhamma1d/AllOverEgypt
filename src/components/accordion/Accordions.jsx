import Accordion from 'react-bootstrap/Accordion';

function Accordions() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Are international flights included in your packages?</Accordion.Header>
        <Accordion.Body>
          No, only domestic flights are included in our packages.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Can I get Egypt visa on arrival?</Accordion.Header>
        <Accordion.Body>
          For most nationalities, organizing a visa for Egypt can be done on arrival at Cairo International Airport. To obtain an Egypt Tourist Visa on Arrival, one must have the following: A valid passport for at least 6 months. Passport with at least 1 blank page.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> How to apply for eVisa online in Egypt?</Accordion.Header>
        <Accordion.Body>
          1- Create an account on the Egypt e-Visa Portal via the registration page. Confirm your account registration.
          2- Select Apply Now. Select the type of Visa and read the instructions carefully.
          3- Pay using a Visa card, MasterCard, or other debit card.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> Is Egypt a family-friendly destination?</Accordion.Header>
        <Accordion.Body>
          Egypt is most definitely a good place to visit on a family vacation. It offers a number of museums where you can view ancient Egyptian artifacts and many more pieces representative of Egyptian history. Ancient tombs, temples, and pyramids are generally accessible to all ages. If looking to relax, Egypt also offers a number of beaches, ideal for rounding off your Egypt family vacation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> What is the best month to travel to Egypt?</Accordion.Header>
        <Accordion.Body>
          The best time to visit Egypt is between October and April, temperatures are cooler but you are still guaranteed sun.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header> How do you visit Abu Simbel?</Accordion.Header>
        <Accordion.Body>
          To visit Abu Simbel, you can do so either on a day trip from Aswan or when flying between Cairo and Aswan. There are three ways to get to Abu Simbel: Roundtrip flight from Aswan. By land from Aswan.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;