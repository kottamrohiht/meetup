import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ReactContext from './context'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: '',
  }

  updateRegistration = obj => {
    this.setState({
      isRegistered: true,
      name: obj.userVal,
      topic: obj.userTopic,
    })
  }

  render() {
    const {isRegistered, name, topic} = this.state
    return (
      <ReactContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          updateRegistration: this.updateRegistration,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
