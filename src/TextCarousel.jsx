import { Component, PropTypes } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import s from './TextCarousel.css';

export function AnimationContainer({ children, animState }) {
  return (
    <div className={classnames(s.animContainer, animState)}>
      <div className={s.text}>
        {children}
      </div>
    </div>
  )
}

class TextCarousel extends Component {
  timeout: number;
  animTimeout: number;
  refs: {
    shadowLayout: any;
  }

  componentWillMount() {
    const { items, animationStates } = this.props;
    this.state = {
      activeItem: items[0],
      lastActiveItem: items[items.length - 1],
      animState: animationStates.in,
      outAnimState: animationStates.out,
      index: 0,
      animWidth: 0
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.animTimeout = requestAnimationFrame(() => {
        const { items, animationStates } = this.props;
        const lastIndex = this.state.index;
        const index = (this.state.index + 1) % items.length;
        this.setState({
          index,
          activeItem: items[index],
          lastActiveItem: items[lastIndex],
          animState: animationStates.inStart,
          outAnimState: animationStates.outStart
        }, () => this.mounted = true);
      });
    }, this.props.duration);

    this.measureWidth();
  }

  measureWidth() {
    const animWidth = ReactDOM.findDOMNode(this.refs.shadowLayout).clientWidth;
    if (animWidth !== this.state.animWidth) {
      this.setState({
        animWidth,
        oldWidth: this.state.animWidth,
        animState: this.props.animationStates.in,
        outAnimState: this.props.animationStates.out
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.animTimeout);
  }

  componentDidUpdate() {
    this.animTimeout = requestAnimationFrame(() => this.measureWidth());
  }

  render() {
    const { animWidth, animState, outAnimState, activeItem, lastActiveItem } = this.state;
    const style = { width: animWidth ? animWidth : 0 };
    const bgStyle = { width: animWidth ? animWidth + 10 : 0 };
    return (
      <div className={classnames(s.txt, this.props.className)}>
        <div className={s.shadowLayout} ref='shadowLayout'>
          {activeItem}
        </div>
        <div className={s.verticalSizer}>{activeItem}</div>
        <div className={s.bgContainer}>
          <div className={classnames(s.bg, this.mounted && s.bgAnim, this.props.bgClassName)} style={bgStyle}>
            &nbsp;
          </div>
        </div>
        <div className={s.animWrapper} style={style}>
          <AnimationContainer animState={animState}>
            {activeItem}
          </AnimationContainer>
          <AnimationContainer animState={outAnimState}>
            {lastActiveItem}
          </AnimationContainer>
        </div>
      </div>
    );
  }
}

TextCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  duration: PropTypes.number,
  animationStates: PropTypes.shape({
    inStart: PropTypes.string,
    in: PropTypes.string,
    outStart: PropTypes.string,
    out: PropTypes.string
  }),
  className: PropTypes.string,
  textClassName: PropTypes.string
};

TextCarousel.defaultProps = {
  duration: 3000,
  animationStates: {
    inStart: s.inStart,
    in: s.in,
    outStart: s.outStart,
    out: s.out
  }
};


export const styles = s;
export const AnimContainer = AnimationContainer;

export default TextCarousel;
