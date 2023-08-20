const getHomePage = function(req, res, next) {
  res.send('respond with a resource');
}

const getCool = function(req, res, next){
  console.log("hello")
  res.render("user-cool", {title: "You're so Cool!!"})
}

module.exports = {
  getHomePage,
  getCool
}
