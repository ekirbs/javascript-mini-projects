const express = require('express');
const path = require("path");
// const soundRoutes = require('./routes/soundRoutes');


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
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build'))); // Serve the built React files

// app.use("/sound", soundRoutes);
// app.use("/", htmlRoutes);

// VIEW COUNTER
let viewCount = 0;

app.get("/counter", (req, res) => {
  res.json({ count: viewCount });
});

app.post("/counter", (req, res) => {
  viewCount++;
  res.json({ count: viewCount });
});

// // SERVE REACT APP
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.use(routes);

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT} 🚀`)
});