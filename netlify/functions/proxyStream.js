const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const streamUrl = 'http://kteq-streamer.sdsmt.edu:8000/kteq_high.m3u';

  const res = await fetch(streamUrl);
  const body = await res.text();

  return {
    statusCode: 200,
    headers: {
      'content-type': 'audio/x-mpegurl',
      'access-control-allow-origin': '*',
    },
    body,
  };
};
