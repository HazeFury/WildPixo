const verifySlug = (req, res, next) => {
  const slugPattern = /^[a-z0-9-]+$/; // Regex to match only lowercase letters, digits, and hyphens

  if (req.params.slug && !slugPattern.test(req.params.slug)) {
    res.status(401).send("Le slug ne doit contenir ni espaces ni majuscules.");
  } else {
    next();
  }
};

module.exports = verifySlug;
