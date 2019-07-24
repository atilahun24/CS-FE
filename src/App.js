import React, { Component } from 'react'
import './App.scss'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import CarCreate from './auth/components/CarCreate'
import Cars from './auth/components/Cars'
import Car from './auth/components/Car'
import CarEdit from './auth/components/CarEdit'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container" >
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/create-review' render={() => (
            <CarCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/cars' render={() => (
            <Cars alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/cars/:id' render={() => (
            <Car alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/cars/:id/edit' render={() => (
            <CarEdit alert={this.alert} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
