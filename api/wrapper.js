export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "number parameter is required" });
  }

  // 👇 اس جگہ پر آپ اپنی SAFE API کا URL لگا سکتے ہیں
  const externalUrl = `https://shadowscriptz.xyz/shadowapisv4/smsbomberapi.php?number=923001234567`;

  try {
    const response = await fetch(externalUrl);
    const text = await response.text();

    return res.status(200).json({
      success: true,
      external_response: text
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Failed to reach external API",
      details: err.message
    });
  }
}
