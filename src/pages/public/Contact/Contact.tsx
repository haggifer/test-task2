import React, { ReactElement } from 'react';
import classes from './Contact.module.scss'
import ContactForm from "./ContactForm";

export default function Contact(): ReactElement {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Contact Us</h1>
      <h4 className={classes.subtitle}>Any question or remarks? Just write us a message!</h4>

      <ContactForm/>
    </div>
  );
}