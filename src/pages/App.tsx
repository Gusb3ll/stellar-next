import type { Component } from 'solid-js'
import { Routes, Route } from '@solidjs/router'

import Nav from '../components/nav'
import Home from './home'
import About from './about'
import Projects from './projects'

const App: Component = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </>
  )
}

export default App
