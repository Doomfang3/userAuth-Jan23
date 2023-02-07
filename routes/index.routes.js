const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()

/* GET home page */
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/profile', isLoggedIn, (req, res) => {
  console.log('SESSION =====> ', req.session)

  res.render('profile', { user: req.session.user })
})

module.exports = router
