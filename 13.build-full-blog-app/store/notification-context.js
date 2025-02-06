import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

/**
 * NotificationContextProvider component that provides notification context to its children.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children components that will have access to the notification context.
 * @returns {JSX.Element} The NotificationContext.Provider component with the provided context value.
 */

/**
 * useEffect hook to automatically hide notification after a certain period.
 * It sets a timeout to clear the notification after 3 seconds if the notification status is 'success' or 'error'.
 * The timeout is cleared when the component is unmounted or when the notification changes.
 */

/**
 * showNotificationHandler function to show a notification.
 *
 * @param {Object} notificationData - The notification data object.
 * @param {string} notificationData.title - The title of the notification.
 * @param {string} notificationData.message - The message of the notification.
 * @param {string} notificationData.status - The status of the notification ('success', 'error', 'pending').
 */

/**
 * hideNotificationHandler function to hide the notification.
 */

/**
 * The context object that holds the current notification and functions to show and hide notifications.
 * @typedef {Object} NotificationContext
 * @property {Object|null} notification - The current notification object or null if no notification is shown.
 * @property {Function} showNotification - Function to show a notification.
 * @property {Function} hideNotification - Function to hide the notification.
 */
export function NotificationContextProvider(props) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === 'success' || notification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const showNotificationHandler = (notificationData) => {
    setNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setNotification(null);
  };

  const context = {
    notification: notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
