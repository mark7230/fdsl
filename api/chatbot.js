module.exports = function handler(req, res) {
  const { message } = req.body;

  // Temporary response (later replace with actual chatbot logic)
  res.status(200).json({
    reply: `You said: ${message}`
  });
}