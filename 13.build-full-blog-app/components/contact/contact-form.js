import { useContext, useState } from 'react';
import classes from './contact-form.module.css';
import NotificationCtx from '../../store/notification-context';
import Notification from '../ui/notification';

function ContactForm() {
  const notificationCtx = useContext(NotificationCtx);

  const notification = notificationCtx.notification;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  async function sendMessageHandler(event) {
    event.preventDefault();
    notificationCtx.showNotification({
      title: 'Sending message...',
      message: 'Your message is currently being sent...',
      status: 'pending',
    });

    // Add client-side validation
    if (
      !enteredEmail.includes('@') ||
      enteredName.trim() === '' ||
      enteredMessage.trim() === ''
    ) {
      notificationCtx.showNotification({
        title: 'Invalid input',
        message: 'Please enter a valid email address, name, and message.',
        status: 'error',
      });

      return;
    }

    // Send a POST request to the API route
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }); // Send a POST request to the API route

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
        return;
      }

      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Message sent successfully!',
        status: 'success',
      });

      setEnteredEmail('');
      setEnteredMessage('');
      setEnteredName('');
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Error',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
}

export default ContactForm;
