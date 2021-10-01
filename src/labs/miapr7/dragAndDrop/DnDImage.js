import React, { Component } from 'react';
import './Dialog.css'

export default class DnDImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {}
    }

    this._dragStart = this._dragStart.bind(this);
    this._dragging = this._dragging.bind(this);
    this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true
    });
  }

  _dragging(e) {

    if (this.state.dragging) {
      var left = e.screenX - this.state.diffX;
      var top = e.screenY - this.state.diffY;

      this.setState({
        styles: {
          left: left,
          top: top
        }
      });
    }
  }

  _dragEnd(e) {
    this.setState({
      dragging: false
    });
    this.props.setPos({
      x: e.currentTarget.getBoundingClientRect().left, 
      y: e.currentTarget.getBoundingClientRect().top,
    });
  }

  render() {
    var classes = true ? 'Dialog' : 'Dialog hidden';
    return (
        <div className={classes} style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
          <img src={this.props.img} draggable={false}  width={this.props.size}/>
        </div>
    );
  }
}