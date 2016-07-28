# hyperterm-draculicious

Another [HyperTerm](https://hyperterm.org) theme currently a tweak of the popular [Dracula](https://draculatheme.com/).

### Installation

1. Open HyperTerm's preferences with `Cmd+,` (or manually at `~/.hyperterm.js`) with your editor.
2. Update your list of plugins to include `hyperterm-draculicious`, like so:

```js
plugins: [
  'hyperterm-draculicious'
],
```
3. Fully reload HyperTerm (`Cmd+Shift+R`), and tada!

### Configuration

There are some basic options available for configuring the draculicious, below is an example hyperterm config

```js
module.exports = {
  config: {
    fontSize: 14,
    fontFamily: '"Source Code Pro for Powerline", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    draculicious: {
      activeTabHighlightHeight: '2px',
      activeTabHighlightTransitionDuration: '0.25s',
      activeTabHighlightTransitionTimingFunction: 'ease-out',
      padding: '14px 1px 14px 1px'
    }
  },
  plugins: ['hyperterm-draculicious']
};
```

A theme inspired by dracula, a project cut from @mxstbr ([hyperterm-spacegray](//github.com/mxstbr/hyperterm-spacegray)) and @mdo ([hyperterm-atom-dark](//github.com/mdo/hyperterm-atom-dark))

Built to work with my fish theme [mattconde/omf-theme-draculicious](//github.com/mattconde/omf-theme-draculicious)
