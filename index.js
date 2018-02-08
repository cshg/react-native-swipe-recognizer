const defaultOptions = {
    minimumSwipeDistance: 30,
    minimumSwipeSpeed: 0.1,
};

class SwipeRecognizer {
    constructor(options = defaultOptions) {
        Object.assign(this, options);
    }

    isHorizontalSwipe(gestureState) {
        return !!(Math.abs(gestureState.dx) > Math.abs(gestureState.dy));
    }

    isVerticalSwipe(gestureState) {
        return !this.isHorizontalSwipe(gestureState);
    }

    isHorizontallyFastEnough(gestureState) {
        return !!(Math.abs(gestureState.vx) > this.minimumSwipeSpeed);
    }

    isVerticallyFastEnough(gestureState) {
        return !!(Math.abs(gestureState.vy) > this.minimumSwipeSpeed);
    }

    isRightSwipe(gestureState) {
        if (!this.isHorizontalSwipe(gestureState) || !this.isHorizontallyFastEnough(gestureState)) return false;
        return !!(gestureState.dx > this.minimumSwipeDistance);
    }

    isLeftSwipe(gestureState) {
        if (!this.isHorizontalSwipe(gestureState) || !this.isHorizontallyFastEnough(gestureState)) return false;
        return !!(gestureState.dx < -this.minimumSwipeDistance);
    }

    isUpSwipe(gestureState) {
        if (!this.isVerticalSwipe(gestureState) || !this.isVerticallyFastEnough(gestureState)) return false;
        return !!(gestureState.dy < -this.minimumSwipeDistance);
    }

    isDownSwipe(gestureState) {
        if (!this.isVerticalSwipe(gestureState) || !this.isVerticallyFastEnough(gestureState)) return false;
        return !!(gestureState.dy > this.minimumSwipeDistance);
    }
}

export default SwipeRecognizer;
