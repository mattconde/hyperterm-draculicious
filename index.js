const black = '#282a36';
const red = '#ee3c3c';
const green = '#66de3d';
const yellow = '#ffb86c';
const blue = '#2f77b9';
const magenta = '#bd93f9';
const cyan = '#77d6fb';
const darkGrey = '#8a8b96';
const lightGrey = '#D3D7CF';
const brightRed = '#ff5555';
const brightGreen = '#50fa7b';
const brightYellow = '#f1fa8c';
const brightBlue = '#4590d6';
const brightMagenta = '#ff79c6';
const brightCyan = '#8be9fd';
const brightWhite = '#f8f8f2';

const background = black;
const foreground = brightWhite;

exports.decorateConfig = config => {
  const draculicious = Object.assign({}, {
    activeTabHighlightHeight: '2px',
    activeTabHighlightTransitionDuration: '0.25s',
    activeTabHighlightTransitionTimingFunction: 'ease-out',
    padding: '14px 1px 14px 1px'
  }, config.draculicious || {});
  return Object.assign({}, config, {
    padding: draculicious.padding,
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
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: ${background};
        height: ${draculicious.activeTabHighlightHeight};
        transition-property: left, right;
        transition-duration: ${draculicious.activeTabHighlightTransitionDuration};
        transition-timing-function: ${draculicious.activeTabHighlightTransitionTimingFunction};
      }
      .tab_tab.tab_active:before {
        background: ${magenta};
        left: 0;
        right: 0;
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
      darkGrey,
      lightGrey,
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
