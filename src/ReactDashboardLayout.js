import React from 'react'
import ReactDOM from 'react-dom'


const DEFAULT_NO_OF_COLS = 12
const DEFAULT_CELL_MARGIN_X = 10
const DEFAULT_CELL_MARGIN_Y = 10

const DEFAULT_CHILD_HEIGHT = 1
const DEFAULT_CHILD_WIDTH = 1

const FREE_CELL = 0
const FILLED_CELL = 1


const calculateChildPosition = ({grid, minRow, childWidth}) => {

  for (let r = minRow; r < grid.length; r++) {
    const row = grid[r]
    for (let c = 0; c < row.length; c++) {

      let found = true
      for(let k = 0; k < childWidth; k++) {
        if(row[c+k] !== FREE_CELL) {
          found = false
          break
        }
      }
      if(found) {
        return {top: r, left: c}
      }

    }
  }

  return {left: 0, top: grid.length}
}


const getBreakpointForWidth = ({breakpoints, layoutWidth}) => {
  if(breakpoints && breakpoints.length) {
    const sortedBreakpoints = breakpoints.sort((a,b) => b.width - a.width)
    const breakPoint = sortedBreakpoints.find(x => layoutWidth >= x.width)
    return breakPoint || sortedBreakpoints[0]
  } else {
    return null
  }
}


const getCellMargin = (marginProp) => {
  if(marginProp && marginProp.length === 2) {
    return {
      x: (typeof marginProp[0] === 'number') ? marginProp[0] : DEFAULT_CELL_MARGIN_X,
      y: (typeof marginProp[1] === 'number') ? marginProp[1] : DEFAULT_CELL_MARGIN_Y,
    }
  } else {
    return {
      x: DEFAULT_CELL_MARGIN_X,
      y: DEFAULT_CELL_MARGIN_Y
    }
  }
}


export default class ReactDashboardLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 1280,
      height: 800
    }
    this.mounted = false
  }

  componentDidMount() {
    this.mounted = true
    window.addEventListener("resize", this.onWindowResize)
    this.onWindowResize()
  }

  componentWillUnmount() {
    this.mounted = false
    window.removeEventListener("resize", this.onWindowResize)
  }

  onWindowResize = () => {
    if (this.mounted) {
      const node = ReactDOM.findDOMNode(this)
      if (node instanceof HTMLElement) {
        this.setState({
          width: node.offsetWidth,
          height: node.offsetHeight
        })
      }
    }
  }

  render() {
    if (!this.mounted) {
      return <div style={{width:'100%', height:'100%'}} />
    }

    // find breakpoint for current layout width
    const breakpoint = getBreakpointForWidth({
      breakpoints: this.props.breakpoints,
      layoutWidth: this.state.width
    })

    // determine number of columns for the layout
    const layoutCols = breakpoint ? breakpoint.cols : (this.props.cols || DEFAULT_NO_OF_COLS)

    // get margin between cells
    const cellMargin = getCellMargin(this.props.margin)

    // calculate current width and height of a cell
    const cellWidth = this.state.width / layoutCols
    const cellHeight = (this.props.rows) ? (this.state.height / this.props.rows) : cellWidth

    let grid = []
    let minRow = 0

    // clone all child components and set position and dimensions to absolute values
    const children = React.Children.map(this.props.children, (child, i) => {

        const gridProp = child.props['data-grid']
        const childHeight = (gridProp && gridProp.h) || DEFAULT_CHILD_HEIGHT
        const childWidthTemp = (gridProp && gridProp.w) || DEFAULT_CHILD_WIDTH

        // if child width is greater than number of cols in layout, then change child width
        const childWidth = (childWidthTemp > layoutCols) ? layoutCols : childWidthTemp

        // get child position
        const childPosition = calculateChildPosition({grid, minRow, childWidth})

        // if layout is of type 'fill screen' and child is below max screen height, then don't show it
        if(this.props.rows && this.props.rows <= childPosition.top) {
          return null
        }

        minRow = childPosition.top

        // add new rows to the grid if the grid is not yet 'high' enough
        if((childPosition.top + childHeight) > grid.length) {
          for (let r = grid.length; r < (childPosition.top + childHeight); r++) {
            const newRow = []
            for (let c = 0; c < layoutCols; c++) {
              newRow.push(FREE_CELL)
            }
            grid.push(newRow)
          }
        }

        // mark grid cells as filled with dimensions of current child
        for (let r = 0; r < childHeight; r++) {
          for (let c = 0; c < childWidth; c++) {
            if( (childPosition.top+r) < grid.length && (childPosition.left+c) < grid[0].length ) {
              grid[childPosition.top+r][childPosition.left+c] = FILLED_CELL
            }
          }
        }

        // define new style properties
        const style = {
          ...child.props.style,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'absolute',
          left: (childPosition.left * cellWidth) + (cellMargin.x / 2),
          width: (childWidth * cellWidth - cellMargin.x) + 'px',
          top: (childPosition.top * cellHeight) + (cellMargin.y / 2),
          height: (childHeight * cellHeight - cellMargin.y) + 'px',
        }

        // clone and return child component with new style propeties
        return React.cloneElement(child, {style, key: 'child-'+i})
    })

    const layoutHeight = (cellHeight * grid.length) + 'px'
    return (
      <div style={{boxSizing: 'border-box', height: layoutHeight, position: 'relative'}}>
        {children}
      </div>
    )
  }

}
