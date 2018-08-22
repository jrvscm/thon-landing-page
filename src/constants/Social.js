import React from 'react';
import glamorous from 'glamorous';

import Facebook from '../assets/images/facebook.svg';
import Instagram from '../assets/images/instagram.svg';
import Send from '../assets/images/send.svg';
import Slack from '../assets/images/slack.svg';
import Twitter from '../assets/images/twitter.svg';
import { mediaQueries } from '../UIElements';

const Social = () => (
	<SocialList>
		<li><SocialButton src={Send} /></li>
		<li><SocialButton src={Facebook} /></li>
		<li><SocialButton src={Instagram} /></li>
		<li><SocialButton src={Twitter} /></li>
		<li><SocialButton src={Slack} /></li>
	</SocialList>
)

export default Social;

const SocialList = glamorous.ul({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-between`,
	listStyleType: `none`,
	marginRight: `10%`,
	marginLeft: `10%`,
	marginTop: 30,
	marginBottom: 30,
	padding: 0,
	width: `100%`,
	textAlign: `center`,
	'& li':{
		display: `inline`
	}
})

const SocialButton = glamorous.img({
	backgroundColor: `transparent`,
	border: `none`,
	borderRadius: `50%`,
	cursor: `pointer`,
	outline: `none`,
	height: 50,
	width: 50,	
	[mediaQueries.med]:{
		height: 40,
		width: 40
	},
	[mediaQueries.mobile]:{
		height: 30,
		width: 30
	}
})