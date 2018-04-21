import React, { Component } from 'react';
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
    const { className } = this.props;
    return (
      <div
        className={className}
      >
        <div
          className="img"
          style={{
            background: `url(${this.current()}) no-repeat center / cover`,
          }}
        >
        </div>
        <button
          onClick={this.previous}
          className="previous"
        > 
        </button>
        <button
          onClick={this.next}
          className="next"
        >
        </button>
      </div>
    );
  }
}

export default styled(Carousel)`
  position: relative;
  overflow: hidden;

  &, .img {
    height: 500px;
    width: 100%;
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
    opacity: 0;
    
    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
    
    &:active, &:focus {
      outline: none;
    }
  }
`;