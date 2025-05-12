// export default async (request) => {
//   const streamUrl = 'http://kteq-streamer.sdsmt.edu:8000/kteq_high.m3u'

//   const res = await fetch(streamUrl)
//   const body = await res.text()

//   return new Response(body, {
//     headers: {
//       'content-type': 'audio/x-mpegurl',
//       'access-control-allow-origin': '*',
//     },
//   })
// }

export default async (request) => {
  return new Response("Hello from the proxy!", {
    headers: {
      'content-type': 'text/plain',
    },
  });
};

