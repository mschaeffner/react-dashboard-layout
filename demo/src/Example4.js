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
      width={10}
      height={2}
      text="Header"
      style={style}
    />

    <Tile
      width={2}
      height={12}
      text="Sidebar"
      style={style}
    />

    <Tile
      width={3}
      height={5}
      text="Content"
      style={style}
    />

    <Tile
      width={4}
      height={5}
      text="Content"
      style={style}
    />

    <Tile
      width={3}
      height={5}
      text="Content"
      style={style}
    />

    <Tile
      width={5}
      height={3}
      text="Content"
      style={style}
    />

    <Tile
      width={5}
      height={3}
      text="Content"
      style={style}
    />

    <Tile
      width={10}
      height={2}
      text="Footer"
      style={style}
    />

  </ReactDashboardLayout>
