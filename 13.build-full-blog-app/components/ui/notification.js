import ReactDOM from 'react-dom';

import classes from './notification.module.css';

/**
 * Notification component to display a notification message.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the notification.
 * @param {string} props.message - The message of the notification.
 * @param {string} props.status - The status of the notification, can be 'success' or 'error'.
 *
 * @returns {ReactPortal} The portal that renders the notification component.
 */
function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications'));
}

export default Notification;
