import React from 'react';
import glamorous from 'glamorous';

import Background from '../../assets/images/curve-background-one.png';
import { orange, darkRed, lightRed, white } from '../../colors.js';
import { mediaQueries } from '../../UIElements.js';

const SecondSection = () => (
	<Container>

	</Container>
)

export default SecondSection;

const Container = glamorous.div({
	minHeight: `100vh`,
	width: `100%`,
	backgroundColor: orange,
	backgroundImage: `url(${Background})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`
})