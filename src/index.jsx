import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentPosition: 0,
    };
  }

  static getDerivedStateFromProps = ({ items }) => {
    return {
      items,
      currentPosition: 0,
    };
  }
  
  previous = () => {
    let { currentPosition, items } = { ...this.state };
    this.setState({ currentPosition: currentPosition <= 0 ? items.length - 1 : currentPosition - 1 });
  }

  current = () => {
    const { currentPosition, items } = { ...this.state };
    return items[currentPosition];
  }

  next = () => {
    let { currentPosition, items } = { ...this.state };
    this.setState({ currentPosition: currentPosition < items.length - 1 ? currentPosition + 1 : 0 });
  }


  render() {
    const { className, leftArrow, rightArrow } = this.props;
    const  currentItem = this.current();
    return (
      <div
        className={className}
      >
        <div
          className="img"
          style={{
            background: `url(${currentItem.src}) no-repeat center / contain`,
          }}
        >
          <div className="content">
            <div className="title">{currentItem.title}</div>
            <div className="description">{currentItem.description}</div>
          </div>
        </div>
        <button
          onClick={this.previous}
          className="previous"
        >
          <img src={leftArrow} />
        </button>
        <button
          onClick={this.next}
          className="next"
        >
          <img src={rightArrow} />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string.isRequired,
  }),
  leftArrow: PropTypes.string,
  rightArrow: PropTypes.string,
}

export default styled(Carousel)`
  position: relative;
  overflow: hidden;
  background: #221E22;

  &, .img {
    height: 500px;
    width: 100%;
  }

  .img {
    margin: 0;
    padding: 0;
    .content {
      margin: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #221E22;
      color: #FFF;
      padding: 20px;
      .title {
        font-size: 25px;
        font-weight: bold;
      }

      .description {

      }
    }
  }

  .previous {
    left: 0;
    top: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.5), transparent);
    text-align: left;
  }

  .next {
    right: 0;
    top: 0;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.5));
    text-align: right ;
  }
  
  .next, .previous {
    position: absolute;
    width: 30%;
    height: 100%;
    border: none;
    transition: all 0.2s;
    color: #FFF;
    padding: 20px;
    margin: 0;
    opacity: 0.1;
    
    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
    
    &:active, &:focus {
      outline: none;
    }

    img {
      width: 30%;
      height: 30%;
    }
  }
`;
