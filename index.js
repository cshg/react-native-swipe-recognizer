const minimumSwipeDistance = 30;
const minimumSwipeSpeed = 0.1;

class SwipeRecognizer {
    constructor(event, gestureState) {
        Object.assign(this, gestureState);
    }

    isHorizontalSwipe() {
        return !!(Math.abs(this.dx) > Math.abs(this.dy));
    }

    isVerticalSwipe() {
        return !this.isHorizontalSwipe();
    }

    isHorizontallyFastEnough() {
        return !!(Math.abs(this.vx) > minimumSwipeSpeed);
    }

    isVerticallyFastEnough() {
        return !!(Math.abs(this.vy) > minimumSwipeSpeed);
    }

    isRightSwipe() {
        if (!this.isHorizontalSwipe() || !this.isHorizontallyFastEnough()) return false;
        return !!(this.dx > minimumSwipeDistance);
    }

    isLeftSwipe() {
        if (!this.isHorizontalSwipe() || !this.isHorizontallyFastEnough()) return false;
        return !!(this.dx < -minimumSwipeDistance);
    }

    isUpSwipe() {
        if (!this.isVerticalSwipe() || !this.isVerticallyFastEnough()) return false;
        return !!(this.dy < -minimumSwipeDistance);
    }

    isDownSwipe() {
        if (!this.isVerticalSwipe() || !this.isVerticallyFastEnough()) return false;
        return !!(this.dy > minimumSwipeDistance);
    }
}

export default SwipeRecognizer;
