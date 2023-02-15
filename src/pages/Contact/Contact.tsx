import React from 'react'
import Section from '../../components/Section'
// Generate a functional component called Contact
import Wrapper from '../../layout/Wrapper'


const Contact = () => {

  return (
    <Section>
      <h1>Contact</h1>
      <div>
        <p>Phone: 123-456-7890</p>
        <p>Email:
          <a href="mailto:leqn@mail.uc.edu">  </a> 
        </p>
        
      </div>
    </Section>
  )
}

export default Wrapper(Contact, 'contact');