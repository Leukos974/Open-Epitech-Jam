import express from "express";
import cors from "cors";
import { writeFile, readFile} from 'fs/promises';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getData", async (req,res) => {
    try {
        const data = await readFile('data.json', 'utf8');
        res.status(200).json(JSON.parse(data));
    } catch (err) {
        console.error('Error reading file', err);
        res.status(500).send('Error reading file');
    }
});

app.post('/postData', async (req, res) => {
    let newData = req.body;

    try {
        // Read existing data from the file
        let data = JSON.parse(await readFile('data.json', 'utf8'));

        // Append new data
        if (Array.isArray(data)) {
            data.push(newData);
        } else {
            data = [data, newData];
        }

        // Write data back to the file
        await writeFile('data.json', JSON.stringify(data));
        console.log('Data written to file');
        res.status(200).send('Data written to file');
    } catch (err) {
        console.error('Error writing file', err);
        res.status(500).send('Error writing file');
    }
});

app.listen(3000, ()=> console.log("Server running on port 3000"));