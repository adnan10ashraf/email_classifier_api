import express from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { createClassifySchema } from "../utils/validationSchemas.mjs";
import rateLimit from "express-rate-limit";

const app = express();

const api_rate_limit = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: "Please try again later"
});
app.use(api_rate_limit);

app.use(express.json());

app.post("/api/classify", checkSchema(createClassifySchema), (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty())
        return response.status(400).send(result);
    const payload = matchedData(request); // just for practice
    const { text } = payload
    console.log(text);
    return response.status(200).send({class: 'spam'});
});

// post request  /api/classify
// can do some datamining with it

// Extract the model from colab
// Create python script
// Run python script
// return std out

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});