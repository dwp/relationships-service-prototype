
module.exports = router => {

  //***** Propose Relationship ****** //
  
  router.post('/appointee/fit-for-live/scenario-5', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-5/searchlight/customer')
  })
  
  router.post('/appointee/fit-for-live/scenario-5/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-5/searchlight/customer/details');
  });

    router.post('/appointee/fit-for-live/scenario-5/searchlight/customer/details', function (req, res) {
      res.redirect('/appointee/fit-for-live/scenario-5/service/unsuitable-appointee');
    });
  }
  
