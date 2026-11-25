// Worst Fix Ever: Funniest Commit Message — make.fun
// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// One line, written to entry.txt with a single trailing newline.
// The line is a commit subject for a fix that made everything worse:
// login was "fixed" by making passwords optional. The repair IS the
// vulnerability — the one thing login exists to enforce is the thing the
// fix removed. It won a 10-candidate, 45-game pairwise self-judge
// tournament against the brief's five criteria in order, beating the
// runner-up ("cached the 500 page so the crash now loads instantly").
// See CANDIDATES.md in the bounty directory and DESIGN.md here.
//
// Determinism: the text is a constant; no clock, no random source, no
// network; the only environment read is MAKEFUN_OUTPUT_DIR. Two runs to
// different directories write byte-identical files (45 chars + newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line plus ONE trailing newline: the gate counts the file at 1-100
// characters, so 45 + 1 = 46 total.
const ENTRY = "fix: login fixed by making passwords optional\n";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
