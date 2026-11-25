// Worst AI Advice: The 48-Hour Tight Line Open — one line, max 140 chars.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 12 candidates against the judge's
// published criteria (worst advice first — specific enough to follow;
// funny on the first read; tight; sounds like a confident AI assistant;
// concrete):
//   WINNER (108 chars, limit 140): "To fix the 47 errors in your code,
//   delete the red lines — the compiler only complains about code it can
//   see."
//   Why it wins: it IS bad advice a reader could plausibly follow and
//   regret, in a tidy AI-assistant voice ("To fix the 47 errors...").
//   The punch lands in the last words — the compiler only complains about
//   code it can see — and "47 errors" plus "the red lines" make the
//   badness vivid and specific instead of vague. No wasted words.
//   Runner-up: "For better sleep, set 14 alarms 3 minutes apart — your
//   brain can't snooze what it can't predict." Funny and concrete, but
//   it reads like a human joke, not advice an AI assistant would produce,
//   so it scores lower on criterion 4 than the winner.
//   Discarded: microwave-the-phone and delete-System32 lines (the field's
//   modal entries — every worst-advice thread has them); "download more
//   RAM" (same meme, same problem); "delete the tests" (close cousin of
//   the winner, but "red lines" is the fresher, more visual image, and
//   the compiler punch is sharper than a passing-suite punch).
//   Byte note: the em-dash costs 3 bytes, so the entry is 110 bytes —
//   still far under the cap, and the tie-break favours keeping it short.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `To fix the 47 errors in your code, delete the red lines — the compiler only complains about code it can see.`;

const MAX_CHARS = 140; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
