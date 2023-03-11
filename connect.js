const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
// mongodb+srv://<username>:<password>@cluster0.sx8yktf.mongodb.net/?retryWrites=true&w=majority
const url =
  "mongodb+srv://strike_off_user:bUzKYka2WfrCAuqX@cluster0.sx8yktf.mongodb.net/requests?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
