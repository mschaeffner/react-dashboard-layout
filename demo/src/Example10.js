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
      data-grid={{w:5, h:5}}
      text="50% x 50%"
      style={style}
    />

  </ReactDashboardLayout>
