const colors = {
  black: '#282a36',
  red: '#ee3c3c',
  green: '#66de3d',
  yellow: '#ffb86c',
  blue: '#2f77b9',
  magenta: '#bd93f9',
  cyan: '#77d6fb',
  white: '#47474c',
  lightBlack: '#a7a8ad',
  lightRed: '#ff5555',
  lightGreen: '#50fa7b',
  lightYellow: '#f1fa8c',
  lightBlue: '#4590d6',
  lightMagenta: '#ff79c6',
  lightCyan: '#8be9fd',
  lightWhite: '#f8f8f2'
};

const background = colors.black;
const foreground = colors.lightWhite;

exports.decorateConfig = config => {
  const draculicious = Object.assign({}, {
    activeTabHighlightHeight: '2px',
    activeTabHighlightTransitionDuration: '0.25s',
    activeTabHighlightTransitionTimingFunction: 'ease-out',
    padding: '14px 0px 0px 0px'
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
        color: ${colors.lightGrey};
      }
      .tabs_nav .tabs_list .tab_textActive {
        color: ${colors.magenta};
      }
      .tabs_nav .tabs_title {
        color: ${colors.magenta};
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
        background: ${colors.magenta};
        left: 0;
        right: 0;
      }
    `,
    colors,
  });
};
