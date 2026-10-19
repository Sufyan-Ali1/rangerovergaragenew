const submissionFallback =
  "We couldn't submit your enquiry. Please try again or call us on 01708 592377.";

export const networkErrorMessage =
  "We couldn't connect to submit your enquiry. Please check your internet connection and try again, or call us on 01708 592377.";

export async function getSubmissionError(response: Response): Promise<string> {
  if (response.status === 429) {
    return "Too many requests. Please wait a few minutes before trying again.";
  }

  // Service failures may contain internal configuration details or HTML.
  if (response.status >= 500 || response.status === 401 || response.status === 403) {
    return submissionFallback;
  }

  try {
    const data: unknown = await response.json();
    if (!data || typeof data !== "object") return submissionFallback;

    const { details, errors, error, message } = data as Record<string, unknown>;
    const fieldErrors = details ?? errors;
    if (fieldErrors && typeof fieldErrors === "object") {
      const messages = Object.values(fieldErrors)
        .flatMap((value) => (Array.isArray(value) ? value : [value]))
        .filter((value): value is string => typeof value === "string" && Boolean(value.trim()));
      if (messages.length) return [...new Set(messages)].join(" ");
    }

    const text = typeof error === "string" ? error : message;
    return typeof text === "string" && text.trim() && !/<[^>]+>/.test(text)
      ? text
      : submissionFallback;
  } catch {
    return submissionFallback;
  }
}
