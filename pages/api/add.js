const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

module.exports = (req, res) => {
    const crypto = require('crypto');
    const { latitude, longitude, deviceId } = req.body;
    const docClient = new AWS.DynamoDB.DocumentClient();
    const date = new Date();
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: 'location',
            timestamp: date.getTime().toString(),
            latitude,
            longitude,
            deviceId,
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