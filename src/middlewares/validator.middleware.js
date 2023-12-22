export const validateSchema = (schema) => (req, res, next) => {
  //Valida los datos de entrada
  try {
    schema.parse(req.body); //Valida los datos de entrada
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.errors.map((error) => error.message) }); //Si tenemos un error lo mostramos
  }
};
