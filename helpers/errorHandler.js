// INPUT:   an error
// OUTPUT:  no output
// EFFECT:  throws an error
const errorHandler = (error) => {
  let message = "";
  let status = error?.response?.status;

  switch (status) {
    case undefined:
      message += error;
      break;
    default:
      message += `${error.response.data}`;
      break;
  }

  throw new Error(message)
}

module.exports = errorHandler;