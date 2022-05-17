import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  onClickingMango = () => {
    this.setState(prevCount => ({mangos: prevCount.mangos + 1}))
  }

  onClickingBanana = () => {
    this.setState(prevCount => ({bananas: prevCount.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div>
            <h1>
              Bob ate <span>{mangos}</span> mangoes <span>{bananas}</span>{' '}
              bananas
            </h1>
            <div className="imagesContainer">
              <div className="image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <div>
                  <button type="button" onClick={this.onClickingMango}>
                    Eat Mango
                  </button>
                </div>
              </div>
              <div className="image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <div>
                  <button type="button" onClick={this.onClickingBanana}>
                    Eat Banana
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
