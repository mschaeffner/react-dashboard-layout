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
  <ReactDashboardLayout cols={10}>

    <Tile
      width={10}
      height={5}
      text="100% x 50%"
      style={style}
    />

    <Tile
      width={4}
      height={5}
      text="40% x 50%"
      style={style}
    />

    <Tile
      width={2}
      height={5}
      text="20% x 50%"
      style={style}
    />

    <Tile
      width={4}
      height={5}
      text="40% x 50%"
      style={style}
    />


  </ReactDashboardLayout>
