# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/cashbags/makefun-worst-fix-ever/rank.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/cashbags/makefun-worst-fix-ever/reward.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

A [make.fun](https://make.fun/r/qrg7fvky) entry for
[Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722):
one line of commit message for a bug fix that made everything worse.

```
fix: login fixed by making passwords optional
```

The fix is the vulnerability — login was "repaired" by removing the one
thing login is for. The entry won a 10-candidate, 45-game pairwise
self-judge tournament against the brief's five criteria; see DESIGN.md
for the reasoning.

## Run it

Requires Node 22+ (the grader runs Node 22). It writes the entry line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output`:

```sh
node main.ts
# or, to a directory of your choice:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Deterministic: the text is a constant, so every run writes byte-identical
output. No network, no clock, no randomness.

## License

MIT — see [LICENSE](LICENSE).
