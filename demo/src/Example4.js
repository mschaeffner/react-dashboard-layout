import React from 'react'
import Tile from './Tile'
import ReactDashboardLayout from '../../src'


const style = {
  backgroundColor:'#EEE',
  border: '5px solid #CCC',
  paddingTop: 20,
  textAlign: 'center',
}


export default () =>
  <ReactDashboardLayout cols={12} rows={12}>

    <Tile
      data-grid={{w:10, h:2}}
      text="Header"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:12}}
      text="Sidebar"
      style={style}
    />

    <Tile
      data-grid={{w:3, h:5}}
      text="Content"
      style={style}
    />

    <Tile
      data-grid={{w:4, h:5}}
      text="Content"
      style={style}
    />

    <Tile
      data-grid={{w:3, h:5}}
      text="Content"
      style={style}
    />

    <Tile
      data-grid={{w:5, h:3}}
      text="Content"
      style={style}
    />

    <Tile
      data-grid={{w:5, h:3}}
      text="Content"
      style={style}
    />

    <Tile
      data-grid={{w:10, h:2}}
      text="Footer"
      style={style}
    />

  </ReactDashboardLayout>
