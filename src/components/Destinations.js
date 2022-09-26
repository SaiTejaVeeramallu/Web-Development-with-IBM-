import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now Available In All Over India</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>FLY TO GOA TRIP</h3>
          <p>
          Goa is not only the land of beaches, but it is also the city of beautiful churches!
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>EXPERIENCE MUMBAI</h3>
          <p>
          Mumbai the city that never sleeps….Something’s always happening here
          MUMBAI …Time is more precious than life here !
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>TRIP TO KULUMANALI</h3>
          <p>
          When you leave Manali, you carry it with you wherever you go
          Manali is a beautiful place, full of exciting and wonderful people.
          Manali is such a beautiful place with so much history and charm.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
