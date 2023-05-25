const express = require('express');
const path = require("path");
const soundRoutes = require('./routes/soundRoutes');


// SERVER
const PORT = process.env.PORT || 3001;
const app = express();

// TEST
app.use((req, res, next) => {
  console.log(`${req.method} request received on endpoint ${req.url}`);
  next();
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/sound", soundRoutes);
// app.use("/", htmlRoutes);

// app.use(routes);
// app.get('*', (req, res) =>
// res.render('404')
// );

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT} 🚀`)
});