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
  <ReactDashboardLayout cols={10} rows={10}>

    <Tile
      data-grid={{w:10, h:5}}
      text="100% x 50%"
      style={style}
    />

    <Tile
      data-grid={{w:4, h:5}}
      text="40% x 50%"
      style={style}
    />

    <Tile
      data-grid={{w:2, h:5}}
      text="20% x 50%"
      style={style}
    />

    <Tile
      data-grid={{w:4, h:5}}
      text="40% x 50%"
      style={style}
    />


  </ReactDashboardLayout>
