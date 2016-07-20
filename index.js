const black = '#282a36';
const red = '#ee3c3c';
const green = '#66de3d';
const yellow = '#ffb86c';
const blue = '#2f77b9';
const magenta = '#bd93f9';
const cyan = '#77d6fb';
const lightGrey = '#D3D7CF';
const darkGrey = '#44475a';
const brightRed = '#ff5555';
const brightGreen = '#50fa7b';
const brightYellow = '#f1fa8c';
const brightBlue = '#4590d6';
const brightMagenta = '#ff79c6';
const brightCyan = '#8be9fd';
const brightWhite = '#f8f8f2';

const background = '#282a36';
const foreground = '#f8f8f2';

const css = `
  .tabs_nav .tabs_list .tab_active:before{
    border-bottom-color: ${brightMagenta};
  }
`;

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    padding: '4px 4px 14px 4px',
    foregroundColor: foreground,
    backgroundColor: background,
    cursorColor: brightWhite,
    borderColor: background,
    css,
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
};
