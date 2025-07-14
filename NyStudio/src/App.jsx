import React from 'react'
import styled from 'styled-components'
import Home from './pages/home'

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100vw;
`

function App() {


  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
