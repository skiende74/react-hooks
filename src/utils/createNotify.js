const createNotify = (title, options) => {
  if (!("Notification" in window)) return;

  const askForPermissionAsNeeded = () => {
    if (Notification.permission === "granted") return;
    return Notification.requestPermission();
  };

  const fireNotification = () => {
    if (Notification.permission !== "granted") return;
    new Notification(title, options);
  };

  const notify = async () => {
    await askForPermissionAsNeeded();
    fireNotification();
  };

  return notify;
};
export default createNotify;
