export const verifyExpirySession = async (expiryDate) => {
  (await expiryDate) < Date.now();
  console.log('expiry date', expiryDate);

  //   return expiredAt;
};
