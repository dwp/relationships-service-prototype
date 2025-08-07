const express = require('express')
const router = express.Router()

// Appointee
require('./routes/appointee/iteration-1')(router)
require('./routes/appointee/iteration-2')(router)
require('./routes/appointee/iteration-3')(router)
require('./routes/appointee/iteration-4')(router)
require('./routes/appointee/iteration-5')(router)
require('./routes/appointee/iteration-6')(router)
require('./routes/appointee/iteration-7')(router)
require('./routes/appointee/iteration-8')(router)
require('./routes/appointee/iteration-9')(router)
require('./routes/appointee/iteration-10')(router)
require('./routes/appointee/iteration-11')(router)
require('./routes/appointee/iteration-12')(router)
require('./routes/appointee/mvp')(router)

// Maternity Allowance
require('./routes/maternity-allowance')(router)

// Fit For Live
require('./routes/appointee/fit-for-live/scenario-1')(router)
require('./routes/appointee/fit-for-live/scenario-2')(router)
require('./routes/appointee/fit-for-live/scenario-3')(router)
require('./routes/appointee/fit-for-live/scenario-4')(router)
require('./routes/appointee/fit-for-live/scenario-5')(router)

module.exports = router
