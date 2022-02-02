# Code Editor

All your code is written here. Even though the characters you see in the code
editor are uppercase, you type them in lowercase. PICO-8's font uses uppercase
characters for glyphs (graphical characters). For example, **L**, **R**, **U**, **D**, **X**, and **O** map to `L`, `R`, `U`, `D`, `X, and `O`.

You can organize your code into tabs. Due to the limited space available, tabs
only have a number (starting at `0`). If the first line of code in a tab is a
comment (i.e. beings with `--`), the comment will be shown when you hover over
the tab number.

**Syntax Highlighting** is what causes words and lines to be colored differently. Comment lines have a darker color. Keywords (like `function`, `for`, `do`, `if`, `then`, and `if` are colored pink. Built-in functions like `btn`, `btnp`, `print`, and `spr` are colored green.

Be on the lookout for words or lines colored differently than you expect. This can help you spot a typo in your code.

The bottom left of the code editor tells you which line you are on.

The bottom right shows the token count, by default. If you click it, you can
also view the character count or the compressed size. See the
[Limitations](./limitations.md) section for more on why these are included.

## Shortcuts

- **Alt-Up/Down** - Go up/down a function at a time
- **Ctrl-L** - Move to a specific line number
- **Ctrl-Up/Down** - Move to the very top/bottom
- **Ctrl-Left/Right** - Move left/right by one word
- **Ctrl-F, Ctrl-G** - Find text, or find again
- **Ctrl-D** - Duplicate the current line
- **Tab/Shift-Tab** - Indent/un-indent the currently selected line(s)
- **Ctrl-Tab/Shift-Ctrl-Tab** - Move to next/previous code tab

(Use Cmd instead of Ctrl on macOS.)
