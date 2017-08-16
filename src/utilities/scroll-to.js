class ScrollTo {
  constructor() {
    this.currentValue = 0;
    this.difference = 0;
    this.finalValue = 0;
    this.duration = 500;
    this.now = 0;
    this.barToMove = null;
  }

  scrollTo(el, offset = 50) {
    this.currentValue = window.pageYOffset;
    this._scroll(el.getBoundingClientRect().top + this.currentValue - offset);
  }

  _easing(t) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  _updateScrollPos() {
    let complete = false;
    let timeDiff = new Date().getTime() - this.now;
    if (timeDiff > this.duration) {
      timeDiff = this.duration;
      complete = true;
    }

    const easedValue = this._easing(timeDiff / this.duration) * this.difference;
    window.scrollTo(0, easedValue + this.currentValue);

    if (!complete) {
      requestAnimationFrame(this._updateScrollPos.bind(this));
    }
  }

  _scroll(finalValue) {
    this.now = new Date().getTime();
    this.difference = finalValue - this.currentValue;
    requestAnimationFrame(this._updateScrollPos.bind(this));
  }

  scrollBar(el, to) {
    this.barToMove = el;
    this.currentValue = this.barToMove.scrollTop;
    this._scrollBar(to + this.currentValue);
  }

  _updateScrollBarPos() {
    let complete = false;
    let timeDiff = new Date().getTime() - this.now;
    if (timeDiff > this.duration) {
      timeDiff = this.duration;
      complete = true;
    }

    const easedValue = this._easing(timeDiff / this.duration) * this.difference;
    this.barToMove.scrollTop = easedValue + this.currentValue;

    if (!complete) {
      requestAnimationFrame(this._updateScrollBarPos.bind(this));
    }
  }

  _scrollBar(finalValue) {
    this.now = new Date().getTime();
    this.difference = finalValue - this.currentValue;
    requestAnimationFrame(this._updateScrollBarPos.bind(this));
  }
}

export default new ScrollTo();
