import React from 'react'
import Tile from './Tile'
import ReactDashboardLayout from '../../src'


const style = {
  backgroundColor:'#EEE',
  border: '5px solid #CCC',
  paddingTop: 20,
  textAlign: 'center'
}


const breakpoints = [
  { width: 1024, cols: 12 },
  { width: 768, cols: 8 },
  { width: 480, cols: 4 },
  { width: 0, cols: 2 },
]


export default () =>
  <ReactDashboardLayout cols={8} breakpoints={breakpoints} margin={[0, 0]}>

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:3}}
      text="2 x 3"
      style={style}
    />

    <Tile
      data-grid={{w:3, h:3}}
      text="3 x 3"
      style={style}
    />

  </ReactDashboardLayout>
