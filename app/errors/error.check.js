module.exports = (err) => {
  if(err.name === "BadRequest"){
    err.statusCode = 400;
    err.status = "FAIL";
    err.message = err.message;
  } else if (err.name === "SequelizeUniqueConstraintError") {
    err.statusCode = 400;
    err.status = "FAIL";
    err.message = err.errors.map((error) => error.message);
  } else if (err.name === "SequelizeValidationError") {
    err.statusCode = 400;
    err.status = "FAIL";
    err.message = err.errors.map((error) => error.message);
  } else if (err.name === "SequelizeDatabaseError") {
    err.statusCode = 400;
    err.status = "FAIL";
    err.message = err.errors.map((error) => error.message);
  } else if (err.name === "SequelizeForeignKeyConstraintError") {
    err.statusCode = 400;
    err.status = "FAIL";
    err.message = err.errors.map((error) => error.message);
  } else if (err.name === "DataNotFound") {
    err.statusCode = 404;
    err.status = "FAIL";
    err.message = "Data not found";
  } else if (err.name === "FailedLogin") {
    err.statusCode = 401;
    err.status = "FAIL";
    err.message = "Invalid email or password";
  } else if (err.name === "Unauthorized") {
    err.statusCode = 401;
    err.status = "FAIL";
    err.message = "Unauthorized";
  } else if (err.name === "Forbidden") {
    err.statusCode = 403;
    err.status = "FAIL";
    err.message = "Forbidden";
  } else {
    err.statusCode = 500;
    err.status = "ERROR";
    err.message = err.message || "Something went wrong";
  }
}