import React from 'react';
import glamorous from 'glamorous';

import BuildYourCommunity from '../../assets/images/build-your-community.png';
import ShowcaseYourInnovation from '../../assets/images/showcase-your-innovation.png';
import OrangeSlashes from '../../assets/images/orange-slashes.png'; 
import RedSlashes from '../../assets/images/red-slashes.png'; 
import CurveBackgroundTwo from '../../assets/images/curve-background-two.png';
import { 
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

import { orange, textGrey, lightRed } from '../../colors.js';
const FourthSection = () => (
	<Container>
		<Background src={CurveBackgroundTwo} />
		<ContentContainer>
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={OrangeSlashes} />
						<P color={orange}>SHOWCASE YOUR INNOVATION</P>
					</VerticalRow>
				</LabelCol>
				<Col>
					<Row>
						<Col style={{alignItems: `flex-end`, width: `40%`}}>
							<ShowcaseIphoneScreen src={ShowcaseYourInnovation} />
						</Col>
						<Col style={{alignItems: `flex-start`, width: `60%`}}>
							<div style={{maxWidth: 700, marginLeft: 25}}>
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
							</div>
						</Col>		
					</Row>
				</Col>
			</Row>
			<HR color={textGrey} />
			<Row>
				<LabelCol>
					<VerticalRow>
						<Slashes src={RedSlashes} />
						<P color={lightRed}>BUILD YOUR COMMUNITY</P>
					</VerticalRow>
				</LabelCol>
				<Col style={{width: `60%`, alignItems: `flex-end`}}>
					<div style={{maxWidth: 600, textAlign: `right`, marginRight: 25}}>
						<Text color={textGrey} style={{marginBottom: 25}}>
							Create a fundraising hackathon quickly and easily. Start accepting funding in minutes. Share your event 
							on Facebook, Instagram, WhatsApp,Twitter, email or text message. Get notified each time someone funds.
						</Text>
						<Text color={textGrey} style={{marginBottom: 5}}>
							FOR SUPPORTERS, BACKERS, INVESTORS:							
						</Text>
						<Text color={textGrey}>
							Fund hackathon directly from the app. Search for hackathon to support that matter to you.
						</Text>
					</div>
				</Col>
				<Col style={{width: `40%`, alignItems: `flex-start`}}>
					<CommunityIphoneScreen src={BuildYourCommunity} />
				</Col>	
			</Row>
		</ContentContainer>	
	</Container>
)

export default FourthSection;

const Container = glamorous.div({
	position: 'relative',
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const ContentContainer = glamorous.div({
	position: `absolute`,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const ShowcaseIphoneScreen = glamorous(IphoneScreen)({
	minWidth: 380
})

const CommunityIphoneScreen = glamorous(IphoneScreen)({
	minWidth: 380
})