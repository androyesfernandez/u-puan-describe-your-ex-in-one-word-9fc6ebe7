// Describe Your Ex in One Word — entry program.
//
// The entry is a single word, chosen to land as a verdict on a former
// partner at a glance: it looks like the real thing and does nothing.
// The program writes exactly that word to /output/entry.txt and
// nothing else — no newline, no punctuation, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Decaf";
const OUT = "/output/entry.txt";

// Guard the gate before writing: one word, 1-111 characters, nothing
// attached. If the word ever stopped satisfying that, fail loudly
// instead of submitting an invalid entry.
if (!/^[^\s]{1,111}$/.test(WORD)) {
  throw new Error("entry word must be a single word of 1-111 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, WORD, "utf8");
