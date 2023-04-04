// Import essential libraries 
const express = require('express');
const { google } = require("googleapis");
var cors = require('cors')
const app = express();
const path = require('path');

const router = express.Router();

app.use(cors())
app.use(express.json());
// Setup essential routes 
router.post('/app', async (req, res) => {
    const arr = req.body.ans;
    console.log(arr);
    // console.log(req.body)
    //__dirname : It will resolve to your project folder. 

    const auth = new google.auth.GoogleAuth({
        keyFile: "credential.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    //create client instance for auth
    const client = await auth.getClient();

    //Instance og Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1k1woJcmKP23RQqzU3rgF7no6xhaRWp6tGoS1dZzURuU";

    //get meta data about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    })


    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Sheet1!B2:E2",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [arr[0], arr[1], arr[2], arr[3]],
            ]
        },
    });
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Sheet1!B3:E3",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [arr[4], arr[5], arr[6], arr[7]],
            ]
        },
    });
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Sheet1!B4:E4",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [arr[8], arr[9], arr[10], arr[11]],
            ]
        },
    });
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Sheet1!B5:E5",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [arr[12], arr[13], arr[14], arr[15]],
            ]
        },
    });
    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Sheet1!B6:E6",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [arr[16], arr[17], arr[18], arr[19]],
            ]
        },
    });

    res.send(getRows.data);
});
//add the router 
app.use('/', router);
app.listen(process.env.port || 5000);
console.log('Running at Port 5000'); 