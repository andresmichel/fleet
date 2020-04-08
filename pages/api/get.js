const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

module.exports = (_, res) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.TABLE_NAME
    };
    docClient.scan(params, function (err, data) {
        if (err) {
            res.json({
                success: false,
                message: 'Error: Server error',
                error: err
            });
        } else {
            const { Items } = data;
            res.json({
                success: true,
                message: 'Loaded items',
                items: Items
            });
        }
    });
}