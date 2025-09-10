// server/utils/openRouter.js
import axios from "axios"
import dotenv from "dotenv"
dotenv.config();


const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

async function analyzeResumeWithOpenRouter(resumeText) {
  const prompt = `
You are a resume analysis engine. Given the following resume text, extract this structured JSON:
- Full name (if available)
- Contact info (email, phone)
- Education (degrees, institutions, years)
- Work experience (title, company, years, description)
- Technical and soft skills
- Preferred roles or industries
- Summary of candidate in 2 sentences

Resume Text:
"""
${resumeText}
"""
Return only JSON.
`;

  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'openai/gpt-4', // or try anthropic/claude-3, mistralai/mixtral-8x7b, etc.
      messages: [
        { role: 'system', content: 'You are a helpful AI that analyzes resumes.' },
        { role: 'user', content: prompt }
      ]
    },
    {
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = { analyzeResumeWithOpenRouter };
