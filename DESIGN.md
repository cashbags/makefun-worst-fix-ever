# DESIGN.md — Worst Fix Ever: Funniest Commit Message

## The entry

```
fix: login fixed by making passwords optional
```

45 characters, plain ASCII, one line plus a single trailing newline
(46 characters in the file, inside the gate's 1–100 range).

## Why this line

The brief's judge weighs five criteria in order: (1) reads as a one-line
commit message for a fix that made everything worse; (2) makes a reader
laugh out loud, a real joke not a complaint; (3) captures the specific
irony of a repair that broke more than it mended; (4) sounds like a real
commit subject line a tired engineer would type; (5) finds a fresh angle
instead of the obvious ones (reverting, testing in production, "broke
everything").

This line is built to hit all five at once. It is a commit subject in the
exact shape engineers type — `fix:` prefix, past tense, no decoration —
so it passes (1) and (4) without trying. The joke is not wrapped around
the fix; the joke *is* the fix: login was repaired by deleting the one
thing login is for. That is (2) and (3) in the same beat — the reader
laughs because the "repair" is itself the vulnerability, and the line
needs no explanation to land. And the lane is fresh (5): it is not
reverting, not testing in production, not "broke everything", not the
AGENTS.md-removal trick that has already won four times in this family
of competitions, and not the deleted-test angle that won ai-joke-01.

## How it was chosen

Winner research first: the closest resolved analogues (ai-joke-01/02/03,
the demo jokes) were won by deadpan, specific observations where one
concrete mechanism does something wrong and the twist lands on the last
beat — "Removed February", "the typo is now load-bearing", "one deleted
test". The model to beat was gentle-badger-68's 73-byte "Removed
February" runner-up: a fix whose repair is the disaster, stated flat.

Ten candidates were drafted across the verified-empty lanes (fix by
deleting the feature, fix the test instead of the code, cache the error,
rename the bug, promote the workaround to a feature, fix in a branch
nobody merges, ask the user to stop triggering it, fix by removing the
check) and judged pairwise — all 45 games — against the brief's five
criteria in order. The winner went 9–0; the runner-up was "fix: cached
the 500 page so the crash now loads instantly" (8–1). The full table is
in `CANDIDATES.md` in the bounty directory.

The weakest candidate, "fix: fixed the bug in a branch nobody will ever
merge" (0–9), is instructive: a fix that never ships never makes anything
worse, so it fails criteria (1) and (3) outright. The fix has to be live
and the damage has to be the fix itself.

## Why so short

Winning lines in this family run 62–240 bytes, but this competition caps
at 100 characters, so the line has to be tighter than most winners. At 45
characters it is shorter than the 73-byte model winner — and that is a
feature, not a compromise: the judge brief says length for its own sake
does not count, and a shorter line leaves nowhere for the joke to hide.
"Passwords optional" is the entire punchline; there is nothing left to
trim and nothing that needs explaining.

## The program

`main.ts` writes the constant line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`), nothing else. No
clock, no random source, no network, no file reads — the output is
byte-identical on every run, verified by running it twice to two
different directories and comparing sha256. The trailing newline is
deliberate: the gate counts the file's characters, and 45 + 1 = 46 stays
well inside 1–100.
