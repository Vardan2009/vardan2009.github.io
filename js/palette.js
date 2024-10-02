const pallettes = [
    {
        bg1: "green",
        bg2: "black",
        fg: "white",
        hl: "greenyellow",
    }
]


const updateStyles = (idx) =>
    document.documentElement.style =
        `--bg1: ${pallettes[idx].bg1};` +
        `--bg2: ${pallettes[idx].bg2};` +
        `--fg: ${pallettes[idx].fg};`   +
        `--hl: ${pallettes[idx].hl};`
    ;

localStorage['color-mode-idx'] = localStorage['color-mode-idx'] || 0
if(parseInt(localStorage['color-mode-idx']) >= pallettes.length)
    localStorage['color-mode-idx'] = 0
updateStyles(parseInt(localStorage['color-mode-idx']))

window.addEventListener("keydown", (e) => {
    if (e.key == 'm') {
        localStorage['color-mode-idx'] = parseInt(localStorage['color-mode-idx']) + 1;
        if(parseInt(localStorage['color-mode-idx']) >= pallettes.length)
            localStorage['color-mode-idx'] = 0
        updateStyles(parseInt(localStorage['color-mode-idx']))
    }
})