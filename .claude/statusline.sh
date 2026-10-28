#!/usr/bin/env bash
# Claude Code status line: model | context usage | git branch
input=$(cat)

model=$(jq -r '.model.display_name // "Claude"' <<<"$input")
pct=$(jq -r '.context_window.used_percentage // empty | floor' <<<"$input")
dir=$(jq -r '.workspace.current_dir // empty' <<<"$input")
branch=$(git -C "${dir:-.}" branch --show-current 2>/dev/null)

line="$model"
[ -n "$pct" ] && line="$line | ctx ${pct}%"
[ -n "$branch" ] && line="$line | $branch"
printf '%s' "$line"
