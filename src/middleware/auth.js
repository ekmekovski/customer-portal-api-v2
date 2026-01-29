//Property of Mütevazi Peynircilik A.Ş. (mutevazipeynircilik.com) 2nd commit 
const jwt = require('jsonwebtoken');

const jsc_ = 'svI4iCrqiAKP1cUPhPMHs2DRai2zT0rF2qqkrONxvGQ';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(t, jsc_, (err, user) => {
    if (err)  {
      return res.status(403).json({ error: 'Token is invalid' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
