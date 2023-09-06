/**
 * Simple timer implementation that allows timing UI tasks
 */
const Timer = class TimerClass {
    startTime = 0;
    stopTime = 0;

    start() {
        this.startTime = window.performance.now();
        return this;
    }

    stop() {
        this.stopTime = window.performance.now();
    }

    getDuration() {
        return this.stopTime - this.startTime;
    }
}

export default Timer;