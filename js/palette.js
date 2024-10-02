const palettes = [
    {
        name: "lavender",
        bg1: "steelblue",
        bg2: "darkslateblue",
        fg: "white",
        hl: "lightcyan",
    },
    {
        name: "green",
        bg1: "black",
        bg2: "seagreen",
        fg: "white",
        hl: "yellow",
    },
    {
        name: "olive",
        bg1: "olive",
        bg2: "darkkhaki",
        fg: "black",
        hl: "lightgoldenrodyellow",
    },
    {
        name: "terminal",
        bg1: "dimgray",
        bg2: "black",
        fg: "white",
        hl: "yellowgreen",
    },
    {
        name: "silver",
        bg1: "white",
        bg2: "lightgray",
        fg: "black",
        hl: "darkgreen",
    }
];

const themeText = document.querySelector("span#theme")

let currentStyle = Math.floor(Math.random() * palettes.length)

const updateStyles = (idx, scroll) => {
    currentStyle = idx
    document.documentElement.style =
        `--bg1: ${palettes[idx].bg1};` +
        `--bg2: ${palettes[idx].bg2};` +
        `--fg: ${palettes[idx].fg};`   +
        `--hl: ${palettes[idx].hl};`
    ;
    themeText.innerHTML = palettes[idx].name;
    if (scroll)
        container.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
}

updateStyles(currentStyle)

const randomPalette = () => {
    let newStyle = Math.floor(Math.random() * palettes.length)
    if(currentStyle != newStyle) updateStyles(newStyle, true)
    else randomPalette()
}