import { v } from "convex/values";
import { workflow } from ".";
import { internal } from "./_generated/api";
import { mutation } from "./_generated/server";

export const kickofTitleGenerationfWorkflow = mutation({
  args: { url: v.string() },
  handler: async (ctx, args) => {
    await workflow.start(ctx, internal.workflow.generateTitleWorkflow, {
      url: args.url,
    });
  },
});

export const generateTitleWorkflow = workflow.define({
  args: { url: v.string() },
  handler: async (step, args): Promise<string> => {
    const transcript = await step.runAction(
      internal.transcript.getYoutubeTranscript,
      {
        url: args.url,
      },
      { retry: { maxAttempts: 2, initialBackoffMs: 100, base: 2 } }
    );
    const summary = await step.runAction(internal.transcript.generateSummary, {
      transcript: transcript,
    });
    if (!summary.summary) {
      throw new Error("Summary is undefined");
    }
    return summary.summary;
  },
});
