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
      width={4}
      height={1}
      text="4 x 1"
      style={style}
    />

    <Tile
      width={3}
      height={1}
      text="3 x 1"
      style={style}
    />

    <Tile
      width={8}
      height={1}
      text="8 x 1"
      style={style}
    />

  </ReactDashboardLayout>
