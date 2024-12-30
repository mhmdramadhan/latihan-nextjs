import { buildFeedbackPath, extractFeedback } from './feedback';

function handler(req, res) {
  if (req.method === 'DELETE') {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath);
    const feedbackIndex = feedbackData.findIndex(
      (item) => item.id === feedbackId
    );
    feedbackData.splice(feedbackIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(feedbackData));
    res.status(200).json({ message: 'Success!', feedback: feedbackData });
  }

  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find((item) => item.id === feedbackId);
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
