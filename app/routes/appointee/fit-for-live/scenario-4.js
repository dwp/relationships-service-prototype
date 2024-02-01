
module.exports = router => {

  
  router.post('/appointee/fit-for-live/scenario-4', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-4/searchlight/customer')
  })
  
  router.post('/appointee/fit-for-live/scenario-4/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-4/searchlight/customer/details');
  });

    router.post('/appointee/fit-for-live/scenario-4/searchlight/customer/details', function (req, res) {
      res.redirect('/appointee/fit-for-live/scenario-4/service/service-down');
    });
  }
  



