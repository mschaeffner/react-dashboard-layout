import React from 'react'
import Tile from './Tile'
import ReactDashboardLayout from '../../src'


const style = {
  backgroundColor:'#EEE',
  border: '5px solid #CCC',
  paddingTop: 20,
  textAlign: 'center'
}


export default () =>
  <ReactDashboardLayout cols={3}>

    <Tile
      data-grid={{w:4, h:1}}
      text="4 x 1"
      style={style}
    />

    <Tile
      data-grid={{w:3, h:1}}
      text="3 x 1"
      style={style}
    />

    <Tile
      data-grid={{w:8, h:1}}
      text="8 x 1"
      style={style}
    />

  </ReactDashboardLayout>
