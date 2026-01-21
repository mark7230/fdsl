module.exports = function handler(req, res) {
  const { name, email, interest, query } = req.body;
  
  // Log the submission (in a real app, you would save this to a database)
  console.log("Info Request Submitted:", { name, email, interest, query });
  
  // Send a success response
  res.status(200).json({ 
    message: "Info request received successfully", 
    data: { name, email, interest } 
  });
}