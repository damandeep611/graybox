import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import Innertube from "youtubei.js/web";
import {GoogleGenAI} from '@google/genai'



export const getYoutubeTranscript = internalAction({
  args: {
    url: v.string(),
  },
  handler: async (ctx, args) => {
    const url = new URL(args.url);
    const videoId = url.searchParams.get("v") || "";
    if (!videoId) throw new Error("Invalid youtube URL");
    const youtube = await Innertube.create({
      lang: "en",
      location: "US",
      retrieve_player: false,
    });
    const info = await youtube.getInfo(videoId);
    const transcript = await info.getTranscript();
    const transcriptText = transcript.transcript.content?.body?.initial_segments
      .map((segment) => segment.snippet.text ?? "")
      .join("");
    if (!transcriptText) {
      throw new Error("No Transcript found");
    }
    return transcriptText;
  },
});

export const generateSummary = internalAction({
  args: {
    transcript: v.string(),
  },
  handler: async (ctx, args) => {
    const GenAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `
You are a helpful assistant who needs to summarize the following transcript from a YouTube video.
Please provide a 3 sentence line that explain the content of the video and also provide a lot of keywords that I could use to improve SEO.
Please output in Markdown format and output should not exceed 200 words. i repeat the output should not exceed 200 words. 

Here is my transcript from the YouTube video:
${args.transcript}
`;
    const modelResponse = GenAi.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    const modelOutput = (await modelResponse).candidates?.[0]?.content
      ?.parts?.[0]?.text;
    if (!(await modelResponse).candidates?.[0]?.content) {
      throw new Error("No response from Gemini API");
    }
    return {
      summary: modelOutput,
    };
  },
});
