// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const config = require("./config.json");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

module.exports = (body, phone_numbers) => {
  phone_numbers.map(sendTextMessage);

  function sendTextMessage(item) {
    client.messages
      .create({
        to: item.phone,
        from: "+15593542917",
        body: body,
      })
      .then((message) => console.log(message.sid));
  }
};
