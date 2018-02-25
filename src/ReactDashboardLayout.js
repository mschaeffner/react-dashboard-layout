import React from 'react'
import ReactDOM from 'react-dom'


const DEFAULT_NO_OF_COLS = 12

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
    const sortedBreakpoints = breakpoints.sort((a,b) => a.width - b.width)
    const breakPoint = sortedBreakpoints.find(x => layoutWidth <= x.width)
    return breakPoint || sortedBreakpoints[sortedBreakpoints.length-1]
  } else {
    return null
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
    const layoutCols = breakpoint ? breakpoint.cols : (this.props.cols || DEFAULT_NO_OF_COLS)

    const cellWidth = this.state.width / layoutCols
    const cellHeight = (this.props.rows) ? (this.state.height / this.props.rows) : cellWidth

    let grid = []
    let minRow = 0

    const children = React.Children.map(this.props.children, (child, i) => {
        const childProps = {...child.props}

        // if child width is greater than number of cols in layout, then change child width
        if(childProps.width > layoutCols) {
          childProps.width = layoutCols
        }

        // get child position
        const childPosition = calculateChildPosition({
          grid,
          minRow,
          childWidth: childProps.width
        })

        // if fill layout and child is below max screen width, then don't show it
        if(this.props.rows && this.props.rows <= childPosition.top) {
          return null
        }

        minRow = childPosition.top

        // add new rows if grid is not high enough
        if((childPosition.top+childProps.height) > grid.length) {
          for (let r = grid.length; r < (childPosition.top+childProps.height); r++) {
            const newRow = []
            for (let c = 0; c < layoutCols; c++) {
              newRow.push(FREE_CELL)
            }
            grid.push(newRow)
          }
        }

        // mark grid cells as filled with dimensions current child
        for (let r = 0; r < childProps.height; r++) {
          for (let c = 0; c < childProps.width; c++) {
            if( (childPosition.top+r) < grid.length && (childPosition.left+c) < grid[0].length ) {
              grid[childPosition.top+r][childPosition.left+c] = FILLED_CELL
            }
          }
        }

        const style = {
          ...childProps.style,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'absolute',
          left: (childPosition.left * cellWidth),
          width: (childProps.width * cellWidth) + 'px',
          top: (childPosition.top * cellHeight),
          height: (childProps.height * cellHeight) + 'px',

        }

        return React.cloneElement(child, {style, key: 'child-'+i})
    })

    return (
      <div style={{boxSizing: 'border-box', width: '100%', height: '100%', position: 'relative'}}>
        {children}
      </div>
    )
  }

}
