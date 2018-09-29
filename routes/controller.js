
= require('../models').profile
var Profile = require('../mock/profile')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('food is life')
});

router.get('/profiles', function (req, res) {
  res.send(Profile.findAll())
})
router.get('/profiles/:id', function (req, res) {
  var profile = Profile.findById(req.params.id)
  if(profile == null) {res.send('Error')}
  res.send(profile)
})




 
module.exports = router;
