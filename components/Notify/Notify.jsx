import { NotificationManager } from 'react-notifications';

const createNotification = (type, message) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, null, 3000);
        break;
      case 'success':
        NotificationManager.success(message, null, 3000);
        break;
      case 'warning':
        NotificationManager.warning(message, null, 3000);
        break;
      case 'error':
        NotificationManager.error(message, null, 3000);
        break;
  }
}
export default createNotification;
