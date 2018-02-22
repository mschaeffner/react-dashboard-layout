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
  <ReactDashboardLayout cols={8}>

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

    <Tile
      width={2}
      height={3}
      text="2 x 3"
      style={style}
    />

  </ReactDashboardLayout>
