import React from 'react';
import glamorous from 'glamorous';

import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import FourthSection from '../FourthSection';
import FooterSection from '../FooterSection';

const LandingPage = () => (
	<Container>
		<FirstSection />
		<SecondSection />
		<ThirdSection />
		<FourthSection />
		<FooterSection />
	</Container>
)

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

