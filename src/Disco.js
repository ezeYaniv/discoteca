import React from 'react';

class Disco extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: this.props.interval,
			duration: this.props.duration,
		};
	}

	pulse(counter) {
		console.log('pulse' + counter);

		let letters = Array.from(document.getElementsByClassName('letter'));

		letters
			.filter((letter, index) => {
				if (index % 2 === 0) {
					return letter;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1) rotateZ(20deg)';
			});

		letters
			.filter((letter, index) => {
				if (index % 2 !== 0) {
					return letter;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1.5) rotateZ(0)';
			});
	}

	pulseAlt(counter) {
		console.log('pulseAlt' + counter);

		let letters = Array.from(document.getElementsByClassName('letter'));
		letters
			.filter((letter, index) => {
				if (index % 2 === 0) {
					return letter;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1.5) rotateZ(0)';
			});

		letters
			.filter((letter, index) => {
				if (index % 2 !== 0) {
					return letter;
				}
			})
			.forEach((letter) => {
				letter.style.transform = 'scale(1) rotateZ(20deg)';
			});
	}

	changeColor(colorCount, colors, counter) {
		let myLetters = Array.from(document.getElementsByClassName('letter'));
		myLetters.forEach((letter, index) => {
			let pointer = (index + colorCount) % colors.length;
			console.log(pointer);
			letter.style.color = colors[pointer];
		});
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

		this.timer = setInterval(() => {
			this.pulse(counter);
			this.changeColor(colorCount, colors, counter);
			counter--;
			if (colorCount === colors.length) {
				colorCount = 0;
			} else {
				colorCount++;
			}
			// console.log(colorCount);
			if (counter < 1) {
				clearInterval(this.timer);
			}
		}, this.state.interval * 2);

		this.timerAlt = setInterval(() => {
			setTimeout(() => {
				this.pulseAlt(counter);
				this.changeColor(colorCount, colors);
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
