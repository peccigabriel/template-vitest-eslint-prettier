import { render } from './services/testing'
import App from './App'

describe('App', () => {
  function mount() {
    return render(<App />)
  }

  it('should display hello world', () => {
    const { getByText } = mount()
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
