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
      width={3}
      height={6}
      text="3x6 (1)"
      style={style}
    />

    <Tile
      width={9}
      height={2}
      text="9x2 (2)"
      style={style}
    />

    <Tile
      width={3}
      height={2}
      text="3x2 (3)"
      style={style}
    />

    <Tile
      width={3}
      height={6}
      text="3x6 (4)"
      style={style}
    />

    <Tile
      width={3}
      height={2}
      text="3x2 (5)"
      style={style}
    />

    <Tile
      width={3}
      height={4}
      text="3x4 (6)"
      style={style}
    />

    <Tile
      width={3}
      height={4}
      text="3x4 (7)"
      style={style}
    />

    <Tile
      width={2}
      height={6}
      text="4x6 (8)"
      style={style}
    />

    <Tile
      width={1}
      height={6}
      text="1x6 (9)"
      style={style}
    />

    <Tile
      width={9}
      height={4}
      text="9x4 (10)"
      style={style}
    />

  </ReactDashboardLayout>
