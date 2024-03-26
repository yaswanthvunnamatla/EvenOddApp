// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getrandomNumber = () => Math.ceil(Math.random() * 100)
  onClickIncrement = () => {
    const randomNumber = this.getrandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="number-count">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="valid-note">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
