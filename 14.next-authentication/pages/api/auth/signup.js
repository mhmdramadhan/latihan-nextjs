function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Save to database
    res.status(201).json({ message: 'User created!' });
  }
}

export default handler;