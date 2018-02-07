const defaultOptions = {
    minimumSwipeDistance: 30,
    minimumSwipeSpeed: 0.1,
};

class SwipeRecognizer {
    constructor(event, gestureState, options = defaultOptions) {
        Object.assign(this, gestureState, options);
    }

    isHorizontalSwipe() {
        return !!(Math.abs(this.dx) > Math.abs(this.dy));
    }

    isVerticalSwipe() {
        return !this.isHorizontalSwipe();
    }

    isHorizontallyFastEnough() {
        return !!(Math.abs(this.vx) > this.minimumSwipeSpeed);
    }

    isVerticallyFastEnough() {
        return !!(Math.abs(this.vy) > this.minimumSwipeSpeed);
    }

    isRightSwipe() {
        if (!this.isHorizontalSwipe() || !this.isHorizontallyFastEnough()) return false;
        return !!(this.dx > this.minimumSwipeDistance);
    }

    isLeftSwipe() {
        if (!this.isHorizontalSwipe() || !this.isHorizontallyFastEnough()) return false;
        return !!(this.dx < -this.minimumSwipeDistance);
    }

    isUpSwipe() {
        if (!this.isVerticalSwipe() || !this.isVerticallyFastEnough()) return false;
        return !!(this.dy < -this.minimumSwipeDistance);
    }

    isDownSwipe() {
        if (!this.isVerticalSwipe() || !this.isVerticallyFastEnough()) return false;
        return !!(this.dy > this.minimumSwipeDistance);
    }
}

export default SwipeRecognizer;
