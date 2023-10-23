import React from 'react'

const ReactContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: '',
  updateRegistration: () => {},
})

export default ReactContext
