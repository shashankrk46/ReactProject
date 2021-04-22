import React, { Component } from 'react'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readMore: false
    }
  }


  render() {


    const { image, name, id, info, price, removeTour } = this.props.items

    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>

          <p>{this.state.readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => this.setState(({ readMore }) => ({
              readMore: !readMore
            }))

            }>
              {this.state.readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)} >
            not interested
        </button>

        </footer>
      </article >
    )
  }
}

export default Details



