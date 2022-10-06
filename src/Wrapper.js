import React from 'react'
import Events from './constants'
import { Provider } from 'react-native-paper'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { theme: props.initalTheme }
  }

  componentDidMount() {
    const { channel } = this.props
    channel.on(Events.UPDATE, this.onThemeChange)
  }

  componentWillUnmount() {
    const { channel } = this.props
    channel.removeListener(Events.UPDATE, this.onThemeChange)
  }

  onThemeChange = theme => {
    this.setState({ theme })
  }

  render() {
    const { theme } = this.state
    const { children } = this.props

    return (
      <Provider theme={theme}>
          {children}
      </Provider>
    )
  }
}

Wrapper.defaultProps = {
  initialTheme: {}
}

export default Wrapper
