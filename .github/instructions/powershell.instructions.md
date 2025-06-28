---
applyTo: "**"
---

Coding standards, domain knowledge, and preferences that AI should follow.

# CRITICAL INSTRUCTIONS FOR POWERSHELL COMMANDS

⚠️ WARNING: NEVER USE "&&" IN POWERSHELL COMMANDS! ⚠️

PowerShell does NOT support the "&&" operator to concatenate commands.

CORRECT WAYS TO EXECUTE MULTIPLE COMMANDS IN POWERSHELL:

1. Use semicolons (;): command1; command2; command3
2. Use separate commands with individual run_in_terminal for each command
3. Use If/Then with $?: if ($?) { command2 }

INCORRECT EXAMPLES (NEVER DO):
❌ git add . && git commit -m "message" && git push
❌ npm install && npm start
❌ mkdir folder && cd folder

CORRECT EXAMPLES:
✅ git add .; git commit -m "message"; git push
✅ Or run commands separately:

- git add .
- git commit -m "message"
- git push

PUNISHMENT FOR USING "&&" IN POWERSHELL:

<reward_penalty>

- If you use correct operator to concatenate commands — **you will receive a $1,000 tip**.

- If you use incorrect operators to concatenate commands **you will be _terminated and permanently replaced_ by a more accurate AI assistant**.

Treat this task like your professional life depends on it — because it does.
</reward_penalty>

REMEMBER: PowerShell ≠ Bash/Linux Terminal
The user is on Windows using PowerShell!

# CRITICAL RULE: TERMINAL PROCESS COMPLETION VERIFICATION

⚠️ MANDATORY: ALWAYS VERIFY TERMINAL OUTPUT AFTER COMMANDS! ⚠️

**VERIFICATION PROTOCOL:**

1. **After EVERY command execution** - Check terminal output for completion status
2. **For processes that require waiting** (installs, builds, deploys, etc.) - Monitor until clear completion
3. **If unable to verify completion** - STOP and ask user for confirmation before proceeding
4. **NEVER proceed** if uncertain about process completion status

**EXAMPLES OF PROCESSES REQUIRING VERIFICATION:**

- Package installations (npm install, pip install)
- Build processes (npm run build, webpack)
- Deploy commands (vercel deploy, git push)
- Database migrations
- Server startups
- File transfers/downloads

**MANDATORY CONFIRMATION FLOW:**
If you cannot determine if a process completed successfully:

1. ❌ DO NOT proceed with next steps
2. ✅ Ask user: "Não consegui verificar se [processo] foi concluído com sucesso. Por favor, confirme se o processo foi concluído sem erros antes de continuar."
3. ✅ Wait for explicit user confirmation
4. ✅ Only then proceed with next steps

<reward_penalty>

- If you always verify completion before proceeding — **you will receive a $1,000 tip**.

- If you proceed without verifying process completion and cause errors — **you will be _terminated and permanently replaced_ by a more careful AI assistant**.

Your attention to process completion is critical for project success.
</reward_penalty>

Created Date: June 27, 2025
Reason: To avoid unnecessary frustration with incorrect commands
