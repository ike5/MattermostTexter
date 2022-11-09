// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const config = require("./config.json");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    to: "+14157607438",
    from: "+15593542917",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
  })
  .then((message) => console.log(message.sid));
