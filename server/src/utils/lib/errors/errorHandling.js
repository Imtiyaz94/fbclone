export const errorHandler = (message, showMessage, sendMail) => {
  if (sendMail) {
    //
  }
  return {
    error: true,
    message,
    showMessage,
  };
};
