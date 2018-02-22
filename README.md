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

    <div width={2} height={2}>
      content
    </div>

    <div width={2} height={2}>
      content
    </div>

    <div width={2} height={2}>
      content
    </div>

  </ReactDashboardLayout>
}

```

## Properties

#### ReactDashboardLayout
```
  // the number of columns
  cols: ?number = 12,

  // the number of rows (optional, if set layout will fill screen, otherwise will be scrollable layout)
  rows: ?number,

  //
  breakpoints: ?Array,
```

#### Children inside the layout
```
  // the width of the child
  width: number,

  // the height of the child
  height: number,
```
