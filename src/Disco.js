import React from 'react';

class Disco extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: this.props.interval,
			duration: this.props.duration,
		};
	}

	pulse() {
		let letters = Array.from(document.getElementsByClassName('letter'));

		letters
			.filter((letter, index) => {
				if (index % 2 === 0) {
					return letter;
				} else {
					return null;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1) rotateZ(20deg)';
			});

		letters
			.filter((letter, index) => {
				if (index % 2 !== 0) {
					return letter;
				} else {
					return null;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1.5) rotateZ(0)';
			});
	}

	pulseAlt() {
		let letters = Array.from(document.getElementsByClassName('letter'));
		letters
			.filter((letter, index) => {
				if (index % 2 === 0) {
					return letter;
				} else {
					return null;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1.5) rotateZ(0)';
			});

		letters
			.filter((letter, index) => {
				if (index % 2 !== 0) {
					return letter;
				} else {
					return null;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1) rotateZ(20deg)';
			});
	}

	changeColor(colorCount, colors) {
		let myLetters = Array.from(document.getElementsByClassName('letter'));
		myLetters.forEach((letter, index) => {
			let pointer = (index + colorCount) % colors.length;
			letter.style.color = colors[pointer];
		});
	}

	borderAnim(colorCount, colors, counter, stepSize) {
		let border = document.getElementById('page-border');
		border.style.stroke = colors[colorCount];
		border.style.strokeDashoffset = (stepSize * counter);
		console.log(border.style.strokeDasharray);
	}

	componentDidMount() {
		const colors = [
			'#4BBFE6',
			'#266CDD',
			'#2B20BC',
			'#FFCC33',
			'#A01CA3',
			'#FA1085',
			'#F30F58',
			'#F8A26D',
			'#F3E479',
		];
		let counter = this.state.duration;
		let colorCount = 0;
		let stepSize = 5000/this.state.duration;

		this.timer = setInterval(() => {
			this.pulse();
			this.changeColor(colorCount, colors);
			this.borderAnim(colorCount, colors, counter, stepSize);
			counter--;
			if (colorCount === colors.length) {
				colorCount = 0;
			} else {
				colorCount++;
			}
			if (counter < 1) {
				clearInterval(this.timer);
			}
		}, this.state.interval * 2);

		this.timerAlt = setInterval(() => {
			setTimeout(() => {
				this.pulseAlt();
				this.changeColor(colorCount, colors);
				this.borderAnim(colorCount, colors, counter, stepSize);
				counter--;
				if (colorCount === colors.length) {
					colorCount = 0;
				} else {
					colorCount++;
				}
				if (counter < 1) {
					clearInterval(this.timerAlt);
				}
			}, this.state.interval);
		}, this.state.interval * 2);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		clearInterval(this.timerAlt);
	}

	render() {
		return (
			<div className="page-content">
			<svg className="page-border" id="page-border"><rect></rect></svg>
				<div className="disco-container">
					<div className="letter">D</div>
					<div className="letter">I</div>
					<div className="letter">S</div>
					<div className="letter">C</div>
					<div className="letter">O</div>
					<div className="letter">T</div>
					<div className="letter">E</div>
					<div className="letter">C</div>
					<div className="letter">A</div>
				</div>
			</div>
		);
	}
}

export default Disco;
