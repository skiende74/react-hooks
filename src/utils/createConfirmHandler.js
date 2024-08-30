const createConfirmHandler = (message, onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;

  const handleConfirm = () => {
    if (window.confirm(message)) {
      onConfirm();
      return;
    }

    if (typeof onCancel !== "function") return;
    onCancel();
  };
  return handleConfirm;
};

export default createConfirmHandler;
