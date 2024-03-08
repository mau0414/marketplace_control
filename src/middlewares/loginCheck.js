import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['login required'],
    });
  }

  const [, token] = authorization.split(' ');
  try {
    const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['invalid ou expired token'],
    });
  }
};
