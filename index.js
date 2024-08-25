const express = require("express");
const app = express();

app.use(express.json());

app.route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highestAlphabet = "";

    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (!highestAlphabet || item.toUpperCase() > highestAlphabet.toUpperCase()) {
          highestAlphabet = item;
        }
      }
    });

    res.json({
      is_success: true,
      user_id: "avmi24681357",
      email: "aviral.mishra@vitbhopal.ac.in",
      roll_number: "21BCE10153",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
