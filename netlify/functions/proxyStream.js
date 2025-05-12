const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const streamUrl = 'http://kteq-streamer.sdsmt.edu:8000/kteq_high';
  const res = await fetch(streamUrl);

  return {
    statusCode: 200,
    headers: {
      'content-type': 'audio/mpeg',
      'access-control-allow-origin': '*',
    },
    body: res.body,
    isBase64Encoded: false,
  };
};
