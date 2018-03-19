import React, {Component} from 'react'
import {render} from 'react-dom'

import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'
import Example8 from './Example8'
import Example9 from './Example9'
import Example10 from './Example10'


const examples = [
  { name: 'Example 1', component: Example1 },
  { name: 'Example 2', component: Example2 },
  { name: 'Example 3', component: Example3 },
  { name: 'Example 4', component: Example4 },
  { name: 'Example 5', component: Example5 },
  { name: 'Example 6', component: Example6 },
  { name: 'Example 7', component: Example7 },
  { name: 'Example 8', component: Example8 },
  { name: 'Example 9', component: Example9 },
  { name: 'Example 10', component: Example10 },
]


const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20
  },
  navigation: {
    width: '200px',
    height: '100%'
  },
  content: {
    flex: 1,
    height: '100%'
  }
}

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedExample: 0
    }
  }

  render() {
    const Example = examples[this.state.selectedExample].component
    return (
      <div style={styles.container}>

        <div style={styles.navigation}>
          {examples.map((item, i) =>
            <div key={i} onClick={() => this.setState({selectedExample: i})} style={{color: 'blue', cursor: 'pointer'}}>
              {this.state.selectedExample === i ? <b>{item.name}</b>: item.name}
            </div>
          )}
        </div>

        <div style={styles.content}>
          <Example />
        </div>

      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
