import React, { FC } from 'react';
import './contactSection.css';
import ContactType from './contactType/contactType';

const ContactSection: FC = () => (
  <section className="contactSection">
    <ContactType type="phone">
      <p>+36303896570</p>
    </ContactType>
    <ContactType type="address">
      <p> plot 65 Murtala way abuja ,Nigeria </p>
    </ContactType>
    <ContactType type="e-mail">
      <p>solomonbello008@yahoo.com</p>
    </ContactType>
  </section>
);

export default ContactSection;
