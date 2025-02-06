import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';
import { Fragment } from 'react';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us through our contact form."
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
