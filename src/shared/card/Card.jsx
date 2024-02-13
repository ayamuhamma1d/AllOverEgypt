import React from 'react'

const Card = () => {
  return (
    <div>   <div className="row g-4 align-items-center justify-content-center">
    <div className="col-md-6">
      <Card className=' bg-white shadow'>
        <Card.Img variant="top" src={img2} className='p-2 position-relative' />
        <Card.Body>
          <Card.Title className='main_Color text-white  card_img'>  Egypt Tour Packages
          </Card.Title>
          <Card.Text>
            Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
          </Card.Text>
          {showMoreData && (
            <p>
              Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
          )}
          <Link className="text_read" onClick={showMoreTour}>
            {showMoreData ? 'Read Less' : 'Read More ...'}
          </Link>            </Card.Body>
      </Card>
    </div>
    <div className="col-md-6">
      <Card className=' bg-white shadow'>
        <Card.Img variant="top" src={img1} className='p-2 position-relative' />
        <Card.Body>
          <Card.Title className='main_Color text-white  card_img'>  Egypt Tour Packages
          </Card.Title>
          <Card.Text>
            Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
          </Card.Text>
          {showMoreData && (
            <p>
              Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
          )}
          <Link className="text_read" onClick={showMoreTour}>
            {showMoreData ? 'Read Less' : 'Read More ...'}
          </Link>            </Card.Body>
      </Card>
    </div>
    <div className="col-md-6">
      <Card className=' bg-white shadow'>
        <Card.Img variant="top" src={img1} className='p-2 position-relative' />
        <Card.Body>
          <Card.Title className='main_Color text-white  card_img'>  Egypt Tour Packages
          </Card.Title>
          <Card.Text>
            Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
          </Card.Text>
          {showMoreData && (
            <p>
              Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
          )}
          <Link className="text_read" onClick={showMoreTour}>
            {showMoreData ? 'Read Less' : 'Read More ...'}
          </Link>            </Card.Body>
      </Card>
    </div>
    <div className="col-md-6">
      <Card className=' bg-white shadow'>
        <Card.Img variant="top" src={img2} className='p-2 position-relative' />
        <Card.Body>
          <Card.Title className='main_Color text-white  card_img '>  Egypt Tour Packages
          </Card.Title>
          <Card.Text>
            Allover Egypt will take you in mesmerizing Private Egypt tour packages from the airport and back to fill your stay with joy,
          </Card.Text>
          {showMoreData && (
            <p>
              Discover the magical essence of the Great history of Egypt that goes back to thousands of years, explore our Egypt tour packages selection based on your interest.                      </p>
          )}
          <Link className="text_read" onClick={showMoreTour}>
            {showMoreData ? 'Read Less' : 'Read More ...'}
          </Link>            </Card.Body>
      </Card>
    </div>
  </div></div>
  )
}

export default Card