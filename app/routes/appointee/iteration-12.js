
module.exports = router => {

  //***** Propose Relationship ****** //
  
  router.post('/appointee/iteration-12/', function (req, res) {
    // Prototype information
    req.session.data['iteration-number'] = 12;
    // Relationship information
    req.session.data['relationship-decision-day'] = 29;
    req.session.data['relationship-decision-month'] = 'Jan';
    req.session.data['relationship-decision-year'] = 2024;
    // Customer information
    req.session.data['customer-title'] = 'Ms';
    req.session.data['customer-name'] = 'Jennifer Coles';
    req.session.data['customer-national-insurance'] = 'JK151617B';
    req.session.data['customer-dob'] = '16 Jan 1969';
    req.session.data['customer-gender'] = 'Female';
    req.session.data['customer-correspondence-line-1'] = '7 Acacia Avenue';
    req.session.data['customer-correspondence-line-2'] = 'Gateshead';
    req.session.data['customer-correspondence-line-3'] = 'Tyne and Wear';
    req.session.data['customer-correspondence-postcode'] = 'NE1 2BA';
    req.session.data['customer-correspondence-country'] = '';
    req.session.data['customer-residential-line-1'] = '7 Acacia Avenue';
    req.session.data['customer-residential-line-2'] = 'Gateshead';
    req.session.data['customer-residential-line-3'] = 'Tyne and Wear';
    req.session.data['customer-residential-postcode'] = 'NE1 2BA';
    req.session.data['customer-residential-country'] = '';
    req.session.data['customer-number-mobile'] = '07761 111111';
    req.session.data['customer-number-home'] = '07191 111111';
    // Appointee information
    req.session.data['appointee-title'] = 'Mr';
    req.session.data['appointee-name'] = 'James Coles';
    req.session.data['appointee-national-insurance'] = 'LM181920C';
    req.session.data['appointee-dob'] = '24 Mar 1993';
    req.session.data['appointee-gender'] = 'Male';
    req.session.data['appointee-correspondence-line-1'] = '9 Henry Avenue';
    req.session.data['appointee-correspondence-line-2'] = 'Gateshead';
    req.session.data['appointee-correspondence-line-3'] = 'Tyne and Wear';
    req.session.data['appointee-correspondence-postcode'] = 'NE1 1ZX';
    req.session.data['appointee-correspondence-country'] = '';
    req.session.data['appointee-residential-line-1'] = '9 Henry Avenue';
    req.session.data['appointee-residential-line-2'] = 'Gateshead';
    req.session.data['appointee-residential-line-3'] = 'Tyne and Wear';
    req.session.data['appointee-residential-postcode'] = 'NE1 1ZX';
    req.session.data['appointee-residential-country'] = '';
    req.session.data['appointee-number-mobile'] = '07791 178231';
    req.session.data['appointee-number-home'] = '07791 222333'
    // Don't touch
    req.session.data['relationship-review-5-years'] = req.session.data['relationship-decision-year']+5;
    req.session.data['relationship-review-8-years'] = req.session.data['relationship-decision-year']+8;
    req.session.data['relationship-decision-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-decision-year'];
    req.session.data['relationship-5-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-5-years'];
    req.session.data['relationship-8-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-8-years'];
    req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year'];
    req.session.data['customer-residential-address'] = req.session.data['customer-residential-line-1'] + ', ' +  req.session.data['customer-residential-line-2'] + ', ' +  req.session.data['customer-residential-line-3'] + ', ' +  req.session.data['customer-residential-postcode'] + ', ' +  req.session.data['customer-residential-country'];
    req.session.data['appointee-residential-address'] = req.session.data['appointee-residential-line-1'] + ', ' +  req.session.data['appointee-residential-line-2'] + ', ' +  req.session.data['appointee-residential-line-3'] + ', ' +  req.session.data['appointee-residential-postcode'] + ', ' +  req.session.data['appointee-residential-country'];
      // End of information
    res.redirect('/appointee/iteration-12/searchlight/');
  });

//Journey  Choice 

  router.post('/appointee/iteration-12/searchlight/', function (req, res) {
    if (req.session.data['journey-choice'] == 'authorise') {
      res.redirect('/appointee/iteration-12/searchlight/customer/proposed');
    }   
    if (req.session.data['journey-choice'] == 'scenario-4') {
      res.redirect('https://www.figma.com/proto/ieL80PQe0tgkI0RRpmDkuQ/Scenario-4?type=design&node-id=10-2&t=RrojM4KqyyTvJF3G-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A30&hotspot-hints=0&mode=design');
    }  
    if (req.session.data['journey-choice'] == 'journeythree') {
      res.redirect('/appointee/iteration-12/searchlight/customer-2/not-authorised');
    }
    else {res.redirect('/appointee/iteration-12/searchlight/customer/');
    }
  });


  router.post('/appointee/iteration-12/propose/details', function (req, res) {
    if (req.session.data['journey-choice'] == 'propose') {
      res.redirect('/appointee/iteration-12/propose/summary');
    } else if (req.session.data['journey-choice'] == 'scenario-3') {
      res.redirect('/appointee/iteration-12/service/unsuitable-appointee');
    }else if (req.session.data['journey-choice'] == 'scenario-2') {
      res.redirect('/appointee/iteration-12/service/service-down');
    } else if (req.session.data['journey-choice'] == 'authorise') {
      res.redirect('/appointee/iteration-12/propose/summary');
    }
    else {
      res.redirect('/appointee/iteration-12/service/no-match-found');
    }
  });

//Journey One 
router.post('/appointee/iteration-12/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/details');
  });
  
      /*router.post('/appointee/iteration-12/propose/', function (req, res) {
          if (req.session.data['appointee-nino-choice'] == 'yes') {
            res.redirect('/appointee/iteration-12/propose/nino');
          } else {
            res.redirect('/appointee/iteration-12/propose/details');
          }
        });*/
        
 /* router.post('/appointee/iteration-12/propose/nino', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/summary');
  });
  
  router.post('/appointee/iteration-12/searchlight/customer-2/not-authorised', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/new-details');
  });*/
  


  
  //router.post('/appointee/iteration-12/propose/appointee-correct', function (req, res) {
  //  if (req.session.data.appointeeCorrect == 'appointee-correct-yes') {
  //    req.session.data.relationshipStatus = 'asserted';
  //    res.redirect('/appointee/iteration-12/propose/confirmation');
  //  } else {
  //    req.session.data.authorisedUser = null;
  //    res.redirect('/appointee/iteration-12/propose/');
  //  }
  //});
  
  router.post('/appointee/iteration-12/propose/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/iteration-12/searchlight/proposed-confirmation-page')
  });

  
  router.post('/appointee/iteration-12/searchlight/proposed-confirmation-page', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/proposed-index');
  });

  router.post('/appointee/iteration-12/searchlight/proposed-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer/proposed');
  });

  // ******Jennifer Coles Journey 2 ******* //

  router.post('/appointee/iteration-12/searchlight/appointee/proposed', function (req, res) {
    req.session.data['journey-choice'] = 'authorise';
    res.redirect('/appointee/iteration-12/authorise/');
  });
  
  router.post('/appointee/iteration-12/searchlight/customer/proposed', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/');
  });

  router.post('/appointee/iteration-12/searchlight/customer-2/proposed', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/new-authorise');
  });
  
  router.post('/appointee/iteration-12/searchlight/customer/not-authorised', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/new-details');
  });

  router.post('/appointee/iteration-12/propose/new-details', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/new-summary');
  });

  router.post('/appointee/iteration-12/propose/new-summary', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/proposed-confirmation-page');
  });

  router.post('/appointee/iteration-12/searchlight/customer-2/proposed-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/proposed');
  });

   // ****** Jennifer Coles Authorised******* //

   router.post('/appointee/iteration-12/authorise/', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/decision-date');
  });

  router.post('/appointee/iteration-12/authorise/', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/decision-date');
  });

  router.post('/appointee/iteration-12/authorise/decision-date', function (req, res) {
    if (req.session.data['decision-date'] == 'today') {
      if (req.session.data['verified-appointeeship'] == 'authorised') {
        req.session.data.relationshipStatus = 'authorised';
        res.redirect('/appointee/iteration-12/authorise/authorised/review-date');
      } else {
        req.session.data.relationshipStatus = 'not-authorised';
        res.redirect('/appointee/iteration-12/authorise/not-authorised/summary');
      }
    } else {
      res.redirect('/appointee/iteration-12/authorise/decision-date-manual');
    }
  });

  router.post('/appointee/iteration-12/authorise/decision-date-manual', function (req, res) {
    if (req.session.data['verified-appointeeship'] == 'authorised') {
      req.session.data.relationshipStatus = 'authorised';
      res.redirect('/appointee/iteration-12/authorise/authorised/review-date');
    } else {
      req.session.data.relationshipStatus = 'not-authorised';
      res.redirect('/appointee/iteration-12/authorise/not-authorised/summary');
    }
  });


  // ******William Bucket******* //

  router.post('/appointee/iteration-12/authorise/authorised/new-review-date', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/authorised/new-summary');
  });

  router.post('/appointee/iteration-12/authorise/authorised/new-summary', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/authorised-confirmation-page');
  });

  router.post('/appointee/iteration-12/searchlight/customer-2/authorised-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/authorised');
  });


 
  router.post('/appointee/iteration-12/authorise/new-authorise', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/new-decision-date');
  });


  router.post('/appointee/iteration-12/authorise/new-decision-date', function (req, res) {
    if (req.session.data['decision-date'] == 'today') {
      if (req.session.data['verified-appointeeship'] == 'authorised') {
        req.session.data.relationshipStatus = 'authorised';
        res.redirect('/appointee/iteration-12/authorise/authorised/new-review-date');
      } else {
        req.session.data.relationshipStatus = 'not-authorised';
        res.redirect('/appointee/iteration-12/authorise/not-authorised/newsummary');
      }
    } else {
      res.redirect('/appointee/iteration-12/authorise/new-decision-date-manual');
    }
  });
  
  
  
  // Authorised 
  
  router.post('/appointee/iteration-12/authorise/authorised/', function (req, res) {
    if (req.session.data['verified-date'] == 'today') {
      res.redirect('/appointee/iteration-12/authorise/authorised/review-date');
    } else {
      res.redirect('/appointee/iteration-12/authorise/authorised/date');
    }
  });
  
  router.post('/appointee/iteration-12/authorise/authorised/review-date', function (req, res) {
    if (req.session.data['review-date'] == 'custom') {
      res.redirect('/appointee/iteration-12/authorise/authorised/custom-review-date');
    } else {
      if (req.session.data['review-date'] == 'five-years') {
        req.session.data['review-date'] = 5;
      } else {
        req.session.data['review-date'] = 8;
      }
      req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year']+req.session.data['review-date'];
      req.session.data['relationship-review-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-year'];
      res.redirect('/appointee/iteration-12/authorise/authorised/summary');
    }
  });
  
  router.post('/appointee/iteration-12/authorise/authorised/date', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/authorised/review-date');
  });
  
  router.post('/appointee/iteration-12/authorise/authorised/custom-review-date', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/authorised/summary');
  });
  
  router.post('/appointee/iteration-12/authorise/authorised/summary', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/authorised-confirmation-page');
  });

  router.post('/appointee/iteration-12/searchlight/authorised-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer/authorised');
  });
  
  // Declined
  
  router.post('/appointee/iteration-12/authorise/not-authorised/', function (req, res) {
    if (req.session.data['declined-date'] == 'today') {
      res.redirect('/appointee/iteration-12/authorise/not-authorised/summary');
    } else {
      res.redirect('/appointee/iteration-12/authorise/not-authorised/date');
    }
  });
  
  router.post('/appointee/iteration-12/authorise/not-authorised/date', function (req, res) {
    res.redirect('/appointee/iteration-12/authorise/not-authorised/summary');
  });
  
  router.post('/appointee/iteration-12/authorise/not-authorised/summary', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/not-authorised-confirmation-page');
  });

  router.post('/appointee/iteration-12/authorise/not-authorised/newsummary', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/not-authorised-confirmation-page');
  });

  router.post('/appointee/iteration-12/searchlight/customer-2/not-authorised', function (req, res) {
    res.redirect('/appointee/iteration-12/propose/new-details');
  })
  

  router.post('/appointee/iteration-12/searchlight/not-authorised-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer/not-authorised');
  });

  router.post('/appointee/iteration-12/searchlight/customer-2/not-authorised-index', function (req, res) {
    res.redirect('/appointee/iteration-12/searchlight/customer-2/not-authorised-2');
  });
  
  // Change
  
  router.post('/appointee/iteration-12/propose/change/details', function (req, res) {
    // changed values
    req.session.data['appointee-dob'] = '25 March 1993';
    res.redirect('/appointee/iteration-12/propose/change/summary');
  });
  
  router.post('/appointee/iteration-12/propose/change/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/iteration-12/searchlight/proposed-index');
  });
  
  }