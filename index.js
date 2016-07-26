const black = '#282a36';
const red = '#ee3c3c';
const green = '#66de3d';
const yellow = '#ffb86c';
const blue = '#2f77b9';
const magenta = '#bd93f9';
const cyan = '#77d6fb';
const lightGrey = '#D3D7CF';
const darkGrey = '#8a8b96';
const brightRed = '#ff5555';
const brightGreen = '#50fa7b';
const brightYellow = '#f1fa8c';
const brightBlue = '#4590d6';
const brightMagenta = '#ff79c6';
const brightCyan = '#8be9fd';
const brightWhite = '#f8f8f2';

const background = black;
const foreground = brightWhite;
// const border = '#44475a'; // Original dark grey

exports.decorateConfig = config => Object.assign({}, config, {
  padding: '14px 1px 14px 1px',
  foregroundColor: foreground,
  backgroundColor: background,
  cursorColor: foreground,
  borderColor: background,
  css: `
    ${config.css || ''}
    .tabs_nav .tabs_list .tab_text {
      color: ${lightGrey};
    }
    .tabs_nav .tabs_list .tab_textActive {
      color: ${magenta};
    }
    .tabs_nav .tabs_title {
      color: ${magenta};
    }
    .tab_tab:before{
      position: absolute;
      content: " ";
      border-bottom: 1px solid ${background};
      display: block;
      left: 50%;
      right: 0px;
      bottom: -1px;
      transform: translateX(-50%);
      transition: color 200ms ease-in,
                  width 175ms ease-in;
      width: 0%;
    }
    .tab_active:before {
      border-color: ${magenta};
      width: 100%;
    }
  `,
  colors: [
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    lightGrey,
    darkGrey,
    brightRed,
    brightGreen,
    brightYellow,
    brightBlue,
    brightMagenta,
    brightCyan,
    brightWhite,
    foreground,
  ],
});
