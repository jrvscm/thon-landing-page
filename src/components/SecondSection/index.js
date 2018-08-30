import React from 'react';
import glamorous from 'glamorous';

import LargeOrangeSlash from '../../assets/images/large-orange-slashes.svg';
import LargeRedSlash from '../../assets/images/large-red-slashes.svg';
import CurveImage from '../../assets/images/curve-bottom-border-one.png';
import GetFunded from '../../assets/images/get-funded-arrows.png';
import Feed from '../../assets/images/feed.png';
import FeedSingle from '../../assets/images/feed-single.png';
import GetFundedSingle from '../../assets/images/get-funded.png';
import OrangeSlashes from '../../assets/images/orange-slashes.png';
import RedSlashes from '../../assets/images/red-slashes.png';
import { orange, darkRed, lightRed, white, textGrey } from '../../colors.js';
import { 
	LargeSlash,
	SectionBorder,
	SubscribeButton,
	Background,
	mediaQueries, 
	Row, 
	Col, 
	VerticalRow, 
	IphoneScreen, 
	LabelCol, 
	P, 
	HR, 
	Slashes, 
	Text,
	Li,
	List 
} from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const SecondSection = ({toggler}) => {
	if(!isMobile || isMobile === `iPad`) {
		return(
			<Container>
				<ContentContainer>
					<Row>
						<LabelCol>
							<VerticalRow>
								<Slashes src={OrangeSlashes} />
								<P color={orange} style={{fontSize: 36}}>MEDIA</P>
							</VerticalRow>
						</LabelCol>
						<Col>
							<Row>
								<Col style={{alignItems: `flex-end`, width: `40%`}}>
									<IphoneScreen src={Feed} />
								</Col>
								<Col style={{alignItems: `flex-start`, width: `60%`}}>
									<Sizer>
										<P color={orange} style={{marginBottom: 15}}>DISCOVER</P>
										<Text color={textGrey} style={{marginBottom: 25}}>
											Discover your next favorite innovation app, website, product. We showcase the best new products
											and apps every day.
										</Text>
										<Text color={textGrey} style={{marginBottom: 25}}>
											This is the place to find innovation you love and share them with friends. A global community of
											innovators founders, mentors, investors, journalists, creators, entrepreneurs and makers.
										</Text>										
									</Sizer>
								</Col>		
							</Row>
						</Col>
					</Row>
					<HR color={textGrey} />
					<Row>
						<LabelCol>
							<VerticalRow>
								<Slashes src={RedSlashes} />
								<P color={lightRed} style={{fontSize: 36}}>GET FUNDED</P>
							</VerticalRow>
						</LabelCol>
            <Col>
							<Row>
								<Col style={{alignItems: `flex-end`, width: `40%`}}>
									<IphoneScreen src={GetFunded} />
								</Col>
								<Col style={{alignItems: `flex-start`, width: `60%`}}>
									<Sizer>
										<P color={lightRed} style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
										<Text color={textGrey} style={{marginBottom: 25}}>
											#Thon is a place where innovators and passionate backers come together to support ideas
											born at hackathons. Explore and Follow innovative apps, websites, products and more, and
											Upvote your favorite right from the app.
										</Text>
										<Text color={textGrey}>With the thon app, you can:</Text>
										<List>
											<Li><Text color={textGrey}>Fund innovative solutions to help make new ideas stay alive</Text></Li>
											<Li><Text color={textGrey}>Save your favorites and get reminders before projects end</Text></Li>
											<Li><Text color={textGrey}>Share innovative ideas with friends via email, messaging, social media and more</Text></Li>
										</List>
										<Text color={textGrey}>Innovators can stay up to date from anywhere:</Text>
										<List style={{paddingBottom: 25}}>
											<Li><Text color={textGrey}>Get notified each time you receive funding</Text></Li>
											<Li><Text color={textGrey}>Keep up with comments and upvotes</Text></Li>
											<Li><Text color={textGrey}>Post updates and respond to backer messages</Text></Li>
										</List>
									</Sizer>
								</Col>		
							</Row>
						</Col>					
					</Row>
				</ContentContainer>
				<CustomBorder src={CurveImage} />	
			</Container>
		)
	} else {
		return (
			<Container>
				<ContentContainer>
					<Row style={{paddingBottom: 40}}>
						<SubscribeButton onClick={() => toggler()}>SUBSCRIBE</SubscribeButton>
					</Row>
					<LargeSlash path={LargeOrangeSlash}>
						<P 
							style={{
								color: orange, 
								marginTop: 25, 
								marginLeft: 40
							}}
						>
							MEDIA
						</P>
					</LargeSlash>
					<Row style={{marginTop: -130}}>	
						<Sizer>
							<P color={orange} style={{marginBottom: 15}}>DISCOVER</P>
							<Text color={textGrey} style={{marginBottom: 25}}>
								Discover your next favorite innovation app, website, product. We showcase the best new products
								and apps every day.
							</Text>
							<Text color={textGrey} style={{marginBottom: 25}}>
								This is the place to find innovation you love and share them with friends. A global community of
								innovators founders, mentors, investors, journalists, creators, entrepreneurs and makers.
							</Text>	
						</Sizer>
					</Row>
					<Row>
						<IphoneScreen src={FeedSingle} />
					</Row>
					<HR color={textGrey} />	
					<LargeSlash path={LargeRedSlash}>
						<P 
							style={{
								color: lightRed, 
								marginTop: 25, 
								marginLeft: 40
							}}
						>GET FUNDED</P>
					</LargeSlash>				
					<Row style={{marginTop: -100}}>
						<SizerTwo>
							<P color={lightRed} style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
							<Text color={textGrey} style={{marginBottom: 25}}>
								#Thon is a place where innovators and passionate backers come together to support ideas
								born at hackathons. Explore and Follow innovative apps, websites, products and more, and
								Upvote your favorite right from the app.
							</Text>
							<Text color={textGrey}>With the thon app, you can:</Text>
							<List>
								<Li><Text color={textGrey}>Fund innovative solutions to help make new ideas stay alive</Text></Li>
								<Li><Text color={textGrey}>Save your favorites and get reminders before projects end</Text></Li>
								<Li><Text color={textGrey}>Share innovative ideas with friends via email, messaging, social media and more</Text></Li>
							</List>
						</SizerTwo>
					</Row>
					<Row style={{marginTop: 50, marginBottom: 50}}>
						<IphoneScreen src={GetFundedSingle} />		
					</Row>
					<Row>
						<SizerTwo>								
							<Text color={textGrey}>Innovators can stay up to date from anywhere:</Text>
							<List style={{paddingBottom: 25}}>
								<Li><Text color={textGrey}>Get notified each time you receive funding</Text></Li>
								<Li><Text color={textGrey}>Keep up with comments and upvotes</Text></Li>
								<Li><Text color={textGrey}>Post updates and respond to backer messages</Text></Li>
							</List>							
						</SizerTwo>
					</Row>								
				</ContentContainer>
				<CustomBorder src={CurveImage} />	
			</Container>
		)
	}
}

export default SecondSection;

const Container = glamorous.div({
	position: 'relative',
	height: `100%`,
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	[mediaQueries.mobile]:{
		marginTop: 55
	},
	[mediaQueries.mobileTall]:{
		marginTop: 30
	},
	[mediaQueries.landscape]:{
		marginTop: 0
	}
})

const ContentContainer = glamorous.div({
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundColor: white
})

const Sizer = glamorous.div({
	maxWidth: 700,
	marginLeft: 25,
	[mediaQueries.small]:{
		maxWidth: 450,
		marginLeft: 15
	},
	[mediaQueries.mobile]:{
		marginLeft: 0,
		padding: 40	
	}
})

const SizerTwo=glamorous.div({
	maxWidth: 700,
	marginRight: 25,
	textAlign: `right`,
	[mediaQueries.regular]:{
		maxWidth: 500
	},
	[mediaQueries.med]:{
		maxWidth: 450
	},
	[mediaQueries.small]:{
		marginRight: 15,
		maxWidth: 350
	},
	[mediaQueries.mobile]:{
		textAlign: `left`,
		padding: 40
	}
})

const CustomBorder = glamorous(SectionBorder)({
	bottom: `-40vh`,
	[mediaQueries.med]:{
		bottom: `-20vh`
	},
	[mediaQueries.mobile]:{
		objectPosition: `top`
	}
})
