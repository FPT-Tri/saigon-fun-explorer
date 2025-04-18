
// OpenAI integration
const OPENAI_API_KEY = "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";

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const getTrendingLocations = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that provides information about trending places in Ho Chi Minh City, Vietnam."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json() as OpenAIResponse;
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return "Sorry, I couldn't retrieve the latest trending locations at the moment. Please try again later.";
  }
};
