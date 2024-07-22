// Write your React code here.
import {Component} from 'react'
import './index.css'


class Feedback extends Component {
  state = {isThankYou: false}
  onClickEmoji = () => {
    this.setState(prevState => ({isThankYou: !prevState.isThankYou}))
  }
  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isThankYou} = this.state
    return (
      <div className="app-container">
        {!isThankYou ? (
          <div className="card-container">
            <h1 className="card-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <li className="emoji-card" key={each.id}>
                  <img
                    className="emoji"
                    src={each.imageUrl}
                    alt={each.name}
                    onClick={this.onClickEmoji}
                  />
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container-2">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
