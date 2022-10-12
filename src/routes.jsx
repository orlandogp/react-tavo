import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  HomePage,
  Characters,
  Episodes,
  Locations,
  Favorites,
  CharacterView
} from './pages'

const App = () => {
  return (
    <Switch>
      <Route path="/characters/:id" component={CharacterView} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Locations} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/" component={HomePage} />
    </Switch>
  )
}

export default App
