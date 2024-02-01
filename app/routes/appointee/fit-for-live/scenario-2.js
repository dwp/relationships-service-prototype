

module.exports = router => {
  
  router.post('/appointee/fit-for-live/scenario-2', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer')
  })

  router.post('/appointee/fit-for-live/scenario-2/searchlight/', function (req, res) {
    if (req.session.data['journey-choice'] == 'authorise') {
      res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/proposed');
    } else { 
      res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/propose/details');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/propose/', function (req, res) {
    if (req.session.data['appointee-nino-choice'] == 'yes') {
      res.redirect('/appointee/fit-for-live/scenario-2/propose/nino');
    } else {
      res.redirect('/appointee/fit-for-live/scenario-2/propose/details');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/propose/nino', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/propose/summary');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/propose/details', function (req, res) {
      res.redirect('/appointee/fit-for-live/scenario-2/propose/summary');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/propose/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/proposed');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/searchlight/customer/proposed', function (req, res) {
    req.session.data['journey-choice'] = 'authorise';
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/');
  });

  router.post('/appointee/fit-for-live/scenario-2/searchlight/appointee/proposed', function (req, res) {
    req.session.data['journey-choice'] = 'authorise';
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/');
  });
  
  // ****** Authorise Relationship ******* //
  
  router.post('/appointee/fit-for-live/scenario-2/searchlight/customer/proposed', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/searchlight/customer/not-authorised', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/propose/details');
  });

  router.post('/appointee/fit-for-live/scenario-2/authorise/', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/decision-date');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/decision-date', function (req, res) {
    if (req.session.data['decision-date'] == 'today') {
      if (req.session.data['verified-appointeeship'] == 'authorised') {
        req.session.data.relationshipStatus = 'authorised';
        res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/review-date');
      } else {
        req.session.data.relationshipStatus = 'not-authorised';
        res.redirect('/appointee/fit-for-live/scenario-2/authorise/not-authorised/summary');
      }
    } else {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/decision-date-manual');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/decision-date-manual', function (req, res) {
    if (req.session.data['verified-appointeeship'] == 'authorised') {
      req.session.data.relationshipStatus = 'authorised';
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/review-date');
    } else {
      req.session.data.relationshipStatus = 'not-authorised';
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/not-authorised/summary');
    }
  });
  
  // Authorised
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/authorised/', function (req, res) {
    if (req.session.data['verified-date'] == 'today') {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/review-date');
    } else {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/date');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/authorised/review-date', function (req, res) {
    if (req.session.data['review-date'] == 'custom') {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/custom-review-date');
    } else {
      if (req.session.data['review-date'] == 'five-years') {
        req.session.data['review-date'] = 5;
      } else {
        req.session.data['review-date'] = 8;
      }
      req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year']+req.session.data['review-date'];
      req.session.data['relationship-review-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-year'];
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/summary');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/authorised/date', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/review-date');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/authorised/custom-review-date', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/authorised/summary');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/authorised/summary', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/authorised');
  });
  
  // Declined
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/not-authorised/', function (req, res) {
    if (req.session.data['declined-date'] == 'today') {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/not-authorised/summary');
    } else {
      res.redirect('/appointee/fit-for-live/scenario-2/authorise/not-authorised/date');
    }
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/not-authorised/date', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/authorise/not-authorised/summary');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/authorise/not-authorised/summary', function (req, res) {
    res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/not-authorised');
  });
  
  // Change
  
  router.post('/appointee/fit-for-live/scenario-2/propose/change/details', function (req, res) {
    // changed values
    req.session.data['appointee-dob'] = '25 March 1993';
    res.redirect('/appointee/fit-for-live/scenario-2/propose/change/summary');
  });
  
  router.post('/appointee/fit-for-live/scenario-2/propose/change/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/fit-for-live/scenario-2/searchlight/customer/proposed');
  });
  
  }
  