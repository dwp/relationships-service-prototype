
module.exports = router => {

  router.post('/appointee/fit-for-live/scenario-3', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-3/searchlight/customer')
  })
  router.post('/appointee/fit-for-live/scenario-3/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-3/searchlight/customer/details');
  });

    router.post('/appointee/fit-for-live/scenario-3/searchlight/customer/details', function (req, res) {
      res.redirect('/appointee/fit-for-live/scenario-3/service/no-match-found');
    });
  }
  



