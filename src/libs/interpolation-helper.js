class InterpolationHelper {
	xPrev = [];
	interpolationFactor = 0;
	constructor({interpolationFactor = 10}) {
		this.xPrev = null;
		this.initialized = false;
		this.interpolationFactor = interpolationFactor;
	}

	reset() {
		this.initialized = false;
		this.xPrev = [];
	}

	filter(t, x) {
		if (!this.initialized) {
			this.initialized = true;
			this.xPrev = x;
			return x;
		}

		if (this.interpolationFactor > 0) {
			for (let j = 0; j < x.length; j++) {
				this.xPrev[j] = this.xPrev[j] + (x[j] - this.xPrev[j]) / this.interpolationFactor;
			}
		} else {
			this.xPrev = x;
		}

		return this.xPrev;
	}
}

export {
	InterpolationHelper
}
