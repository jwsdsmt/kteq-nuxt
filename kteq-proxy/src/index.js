export default {
  async fetch(request) {
    const response = await fetch('http://kteq-streamer.sdsmt.edu:8000/stream');
    return new Response(response.body, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

