const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

module.exports = (req, res) => {
    const crypto = require('crypto');
    const { lat, lng } = req.body.lat;
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: crypto.createHash('md5').update(`${lat},${lng}`).digest('hex'),
            lat,
            lng,
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            res.json({
                success: false,
                message: 'Error: Server error',
                error: err
            });
        } else {
            res.json({
                success: true,
                message: 'Loaded item',
                data
            });
        }
    });
}