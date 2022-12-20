// export const errorHandler = (message, showMessage, sendMail) => {
//   if (sendMail) {
//     //
//   }
//   return {
//     error: true,
//     message,
//     showMessage,
//   };
// };
export const errorHandler = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
