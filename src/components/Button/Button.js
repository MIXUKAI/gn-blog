import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const 
  buttonType = ['default', 'primary', 'danger'],
  sizeType = ['small', 'medium', 'large'];

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      loading: props.loading,
      prefixCls: 'mxk-btn'
    };
  };

  static defaultProps = {
    loading: false,
    size: 'medium',
    circle: false,
    type: 'default',
    disabled: false
  };

  static propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(sizeType),
    circle: PropTypes.bool,
    type: PropTypes.oneOf(buttonType),
    icon: PropTypes.string,
    disabled: PropTypes.bool
  };


  handleClick(e) {
    if (this.props.http) {
      this.props.onClick && console.warn('this.props.onClick will never be invoked when this.props.http had be seted')
      this.setState({loading: true})
      this.props.http()
        .then(res => {
          // this.setState({res});
          this.setState({loading: false});
        })
        .catch(err => {
          console.log(err);
          this.setState({loading: false});
        })
    } else {
      this.props.onClick && this.props.onClick(e);
    }
  }

  componentWillReceiveProps(nextProps) {      
    this.setState({loading: nextProps.loading});
  }

  render() {
    const { className, type, size, circle, disabled, icon, children, style, name } = this.props;
    const { prefixCls, loading } = this.state;

    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-circle`]: circle,
      [`${prefixCls}-${type}`]: buttonType.includes(type) && type !== 'default'
    })

    return (
      <button className={classes} onClick={this.handleClick} disabled={loading || disabled} style={style} name={name}>
        { icon && !loading && <i className={classNames('iconfont', icon)}></i> }
        { loading && <i className="iconfont icon-loading"></i> }
        { !circle && <span>{children}</span> }
      </button>
    );
  }

};