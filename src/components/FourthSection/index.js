import React from 'react';
import glamorous from 'glamorous';

import LargeOrangeSlash from '../../assets/images/large-orange-slashes.svg';
import LargeRedSlash from '../../assets/images/large-red-slashes.svg';
import CurveImage from '../../assets/images/images_min/curve-top-border-two.png';
import BuildYourCommunity from '../../assets/images/images_min/build-your-community.png';
import BuildYourCommunitySingle from '../../assets/images/images_min/build-your-community-single.png';
import ShowcaseYourInnovation from '../../assets/images/images_min/showcase-your-innovation.png';
import ShowcaseYourInnovationSingle from '../../assets/images/images_min/showcase-your-innovation-single.png';
import OrangeSlashes from '../../assets/images/images_min/orange-slashes.png'; 
import RedSlashes from '../../assets/images/images_min/red-slashes.png'; 
import {
	LargeSlash,
	SectionBorder,
	mediaQueries, 
	Background, 
	Row, 
	LabelCol, 
	Slashes, 
	P,
	VerticalRow,
	List,
	Li,
	Text,
	Col,
	IphoneScreen,
	HR, 
} from '../../UIElements';

import { orange, textGrey, lightRed, white } from '../../colors.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const FourthSection = () => {
	if(!isMobile || isMobile === `iPad`) {
	return(
	<Container>
		<ContentContainer>
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={OrangeSlashes} />
						<P color={orange} style={{fontSize: 36}}>SHOWCASE YOUR INNOVATION</P>
					</VerticalRow>
				</LabelCol>
				<Col>
					<Row>
						<Col style={{alignItems: `flex-end`, width: `40%`}}>
							<IphoneScreen src={ShowcaseYourInnovation} />
						</Col>
						<Col style={{alignItems: `flex-start`, width: `60%`}}>
							<SizerOne>
								<Text color={textGrey} style={{marginBottom: 25}}>
									This is a place to showcase your innovation, protect your idea.
								</Text>
								<Text color={textGrey}>Get media exposure.</Text>
								<List>
									<Li><Text color={textGrey}>Promotion to our 100,000+ community of devs & supporters</Text></Li>
									<Li><Text color={textGrey}>Watch live video stories of your favorite innovative teams</Text></Li>
									<Li><Text color={textGrey}>Connect with the teams in real time with full-featured live chat</Text></Li>
									<Li><Text color={textGrey}>Go live with a touch and share your passion with the world</Text></Li>
									<Li><Text color={textGrey}>Be a part of the leading social innovation marketplace on iphone, android</Text></Li>
									<Li><Text color={textGrey}>Switch to Dark Mode for those late night viewing sessions</Text></Li>									
								</List>
								<Text color={textGrey}>
									Join the millions of entrepreneurs and supporters who have found a place to connect over the 
									innovation they love. Take your innovation to the next level with #Thon
								</Text>
							</SizerOne>
						</Col>		
					</Row>
				</Col>
			</Row>
			<HR color={textGrey} />
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={RedSlashes} />
						<P color={lightRed} style={{fontSize: 36}}>BUILD YOUR COMMUNITY</P>
					</VerticalRow>
				</LabelCol>
				<Col style={{width: `60%`, alignItems: `flex-end`}}>
					<SizerTwo>
						<Text color={textGrey} style={{marginBottom: 25}}>
							Create a fundraising hackathon quickly and easily. Start accepting funding in minutes. Share your event 
							on Facebook, Instagram, WhatsApp,Twitter, email or text message. Get notified each time someone funds.
						</Text>
						<P color={textGrey} style={{marginBottom: 5, fontSize: 20}}>
							FOR SUPPORTERS, BACKERS, INVESTORS:							
						</P>
						<Text color={textGrey}>
							Fund hackathon directly from the app. Search for hackathon to support that matter to you.
						</Text>
					</SizerTwo>
				</Col>
				<Col style={{width: `40%`, alignItems: `flex-start`}}>
					<IphoneScreen src={BuildYourCommunity} />
				</Col>	
			</Row>
		</ContentContainer>	
	</Container>
)} else {
		return(
				<Container>
					<ContentContainer>
						<LargeSlash path={LargeOrangeSlash}>
							<P 
								style={{
									fontSize: 20,
									color: orange, 
									marginTop: 25, 
									marginLeft: 40
								}}
							>
								SHOWCASE YOUR<br />INNOVATION
							</P>
						</LargeSlash>					
						<Row style={{marginTop: -100}}>
							<SizerOne>
								<Text color={textGrey} style={{marginBottom: 25}}>
									This is a place to showcase your innovation, protect your idea.
								</Text>
								<Text color={textGrey}>Get media exposure.</Text>
								<List>
									<Li><Text color={textGrey}>Promotion to our 100,000+ community of devs & supporters</Text></Li>
									<Li><Text color={textGrey}>Watch live video stories of your favorite innovative teams</Text></Li>
									<Li><Text color={textGrey}>Connect with the teams in real time with full-featured live chat</Text></Li>
									<Li><Text color={textGrey}>Go live with a touch and share your passion with the world</Text></Li>
									<Li><Text color={textGrey}>Be a part of the leading social innovation marketplace on iphone, android</Text></Li>
									<Li><Text color={textGrey}>Switch to Dark Mode for those late night viewing sessions</Text></Li>									
								</List>
							</SizerOne>
						</Row>
						<Row>
							<IphoneScreen src={ShowcaseYourInnovationSingle} />
						</Row>		
						<Row>
							<SizerOne>		
								<Text color={textGrey}>
									Join the millions of entrepreneurs and supporters who have found a place to connect over the 
									innovation they love. Take your innovation to the next level with #Thon
								</Text>
							</SizerOne>
						</Row>
					<HR color={textGrey} />
					<LargeSlash path={LargeRedSlash}>
						<P 
							style={{
								fontSize: 20,
								color: lightRed, 
								marginTop: 25, 
								marginLeft: 40
							}}
						>BUILD YOUR<br />COMMUNITY
					</P>
					</LargeSlash>						
					<Row style={{marginTop: -100}}>
						<SizerTwo>
							<Text color={textGrey} style={{marginBottom: 25}}>
								Create a fundraising hackathon quickly and easily. Start accepting funding in minutes. Share your event 
								on Facebook, Instagram, WhatsApp,Twitter, email or text message. Get notified each time someone funds.
							</Text>
						</SizerTwo>
					</Row>
					<Row>
						<IphoneScreen src={BuildYourCommunitySingle} />
					</Row>							
					<Row>
						<SizerTwo>	
							<P color={textGrey} style={{marginBottom: 5, fontSize: 16}}>
								FOR SUPPORTERS, BACKERS, INVESTORS:							
							</P>
							<Text color={textGrey}>
								Fund hackathon directly from the app. Search for hackathon to support that matter to you.
							</Text>
						</SizerTwo>
					</Row>
				</ContentContainer>	
			</Container>		
		)
	}
}
export default FourthSection;

const Container = glamorous.div({
	position: 'relative',
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
})

const ContentContainer = glamorous.div({
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundColor: white,
	paddingBottom: 20
})

const ShowcaseIphoneScreen = glamorous(IphoneScreen)({
	width: 380,
	[mediaQueries.med]:{
		height: 500,
		width: 300
	},
	[mediaQueries.small]:{
		height: 450,
		width: 280
	},
	[mediaQueries.mobile]:{
		height: 600,
		width: 315,
		boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.5)`
	}		
})

const CommunityIphoneScreen = glamorous(IphoneScreen)({
	width: 380,
	[mediaQueries.med]:{
	height: 500,
	width: 300
},
	[mediaQueries.small]:{
	height: 500,
	width: 320
},
	[mediaQueries.mobile]:{
		height: 600,
		width: 315,
		boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.5)`
	}
})

const SizerOne = glamorous.div({
	maxWidth: 700, 
	marginLeft: 25,
	[mediaQueries.med]:{
		maxWidth: 550
	},
	[mediaQueries.small]:{
		maxWidth: 450
	},
	[mediaQueries.mobile]:{
		textAlign: `left`,
		marginLeft: 0,
		padding: 40
	}
})

const SizerTwo = glamorous.div({
	maxWidth: 600, 
	textAlign: `right`, 
	marginRight: 25,
	[mediaQueries.med]:{
		maxWidth: 500
	},
	[mediaQueries.small]:{
		maxWidth: 400
	},
	[mediaQueries.mobile]:{
		textAlign: `left`,
		marginRight: 0,
		padding: 40
	}
})