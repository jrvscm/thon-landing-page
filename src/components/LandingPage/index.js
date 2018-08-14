import React from 'react';
import glamorous from 'glamorous';

import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';

const LandingPage = () => (
	<Container>
		<FirstSection />
		<SecondSection />
	</Container>
)

export default LandingPage;

const Container = glamorous.div({
	height: `100%`,
	minHeight: `100vh`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justyfContent: `center`
})
