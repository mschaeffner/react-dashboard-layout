# react-dashboard-layout

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## Install
``npm install --save react-dashboard-layout``

## Use

```
import ReactDashboardLayout, {Item} from 'react-dashboard-layout'
...
render() {
  <ReactDashboardLayout
    cols={12}
    rows={12}
  >

    <div data-grid={{w:2, h:2}}>
      content
    </div>

    <div data-grid={{w:2, h:2}}>
      content
    </div>

    <div data-grid={{w:2, h:2}}>
      content
    </div>

  </ReactDashboardLayout>
}

```

## Properties

#### ReactDashboardLayout
```javascript
  // the number of columns.
  cols: ?number = 12,

  // the number of rows. Optional, if set layout will fill screen, otherwise it will be a scrollable layout.
  rows: ?number,

  // controls the responsiveness of the layout, so that having a different number of columns based on the screen width. If set then, cols property is ignored.
  // Example:  [ {width: 768, cols: 6}, {width: 1024, cols: 12}, {width: 480, cols: 3} ]
  breakpoints: ?Array,

  // the margin between children inside the layout in px, [x, y]
  margin: ?[number, number] = [10, 10],

```

#### Child component inside the layout
```javascript
  // the width of the child, meaning how many columns it will take of the layout.
  w: number,

  // the height of the child. If number of rows is set for the layout, then height of this child means how many rows it will take of the layout. Else height is relative to the width of the child. E.g. w=4 and h=2 would mean, that the child's height is always 50% of its width.
  h: number,
```
