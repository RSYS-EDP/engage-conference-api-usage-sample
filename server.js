const express = require('express');
const cors = require('cors');
const conferenceRoutes = require('./routes/conference')
const callRoutes = require("./routes/call");


const app = express()

app.use(express.json());
app.use(cors());

// using the conference route
app.use("/accounts/", conferenceRoutes);
app.use("/accounts/", callRoutes);

// App starts listening to the defined port
const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('Your app is running on port ' + listener.address().port)
})
