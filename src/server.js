const express = require('express');
const cors = require('cors');
const catRouter = require('./endpoints/cat')
const dogRouter = require('./endpoints/dog')
const { adoptorsRouter } = require('./endpoints/adoptor')
const { adoptedRouter } = require('./adopted')
const {PORT} = require('./config')


const app = express();
app.use(cors());


app.use(catRouter)
app.use(dogRouter)
app.use(adoptorsRouter)
app.use(adoptedRouter)
// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});