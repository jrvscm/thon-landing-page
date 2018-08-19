import React, {Component} from 'react';
import glamorous from 'glamorous';

import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import FourthSection from '../FourthSection';
import FooterSection from '../FooterSection';
import Popup from '../Popup';


class LandingPage extends Component {
	
	constructor() {
		super();

		this.state = {
			hidden: false
		}
	}

	toggleHidden() {
		const { hidden } = this.state;
		
		if(hidden === true) {
			this.setState({
				hidden: false
			})
		} else {
			this.setState({
				hidden: true
			})
		}
	}

	render() {
		const { hidden } = this.state;
		return(
			<Container>
				<Popup 
					hidden={hidden} 
					toggler={() => this.toggleHidden()} 
				/>
				<FirstSection toggler={() => this.toggleHidden()} />
				<SecondSection toggler={() => this.toggleHidden()} />
				<ThirdSection />
				<FourthSection />
				<FooterSection toggler={() => this.toggleHidden()} />
			</Container>
		)
	}
}

export default LandingPage;

const Container = glamorous.div({
	height: `100%`,
	minHeight: `100vh`,
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justyfContent: `center`
})

