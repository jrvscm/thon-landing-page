import React from 'react';
import glamorous from 'glamorous';

import LargeOrangeSlash from '../../assets/images/large-orange-slashes.svg';
import LargeRedSlash from '../../assets/images/large-red-slashes.svg';
import CurveImage from '../../assets/images/curve-bottom-border-one.png';
import GetFunded from '../../assets/images/get-funded-arrows.png';
import GetFundedSingle from '../../assets/images/get-funded.png';
import DiscoverInnovation from '../../assets/images/discover-innovation-arrows.png';
import DiscoverInnovationSingle from '../../assets/images/discover-innovation-single.png';
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
								<P color={orange} style={{fontSize: 36}}>GET FUNDED</P>
							</VerticalRow>
						</LabelCol>
						<Col>
							<Row>
								<Col style={{alignItems: `flex-end`, width: `40%`}}>
									<FundIphoneScreen src={GetFunded} />
								</Col>
								<Col style={{alignItems: `flex-start`, width: `60%`}}>
									<Sizer>
										<P color={orange} style={{marginBottom: 15}}>FUND YOUR FAVORITE INNOVATION</P>
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
					<HR color={textGrey} />
					<Row>
						<LabelCol>
							<VerticalRow>
								<Slashes src={RedSlashes} />
								<P color={lightRed} style={{fontSize: 36}}>DISCOVER INNOVATION</P>
							</VerticalRow>
						</LabelCol>
						<Col style={{width: `60%`, alignItems: `flex-end`}}>
							<SizerTwo>
								<P color={lightRed} style={{marginBottom: 15}}>UPVOTE</P>
								<Text color={textGrey} style={{marginBottom: 25}}>
									When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
									You get one vote per item, but you can change it after it's logged. The number appearing at
									the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
									exposure for your message, brand, or product and have a snowball effect on the traffic a post
									receives.
								</Text>
								<Text color={textGrey} style={{marginBottom: 25}}>
									An upvote on thon is very different than a vote on any other social-media website. Clicking
									that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
									votes are rewarded with US dollars or cryptocurrencies!
								</Text>
								<Text color={textGrey} style={{marginBottom: 25}}>
									When you click the upvote button you are telling the Blockchain, "this is where I want X amount
									of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
									of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
									direct to ideas you like!
								</Text>
								<P color={lightRed} style={{marginBottom: 15}}>DISCOVER</P>
								<Text color={textGrey} style={{marginBottom: 25}}>
									Discover your next favorite innovation app, website, product. We showcase the best new products
									and apps every day.
								</Text>
								<Text color={textGrey} style={{marginBottom: 25}}>
									This is the place to find innovation you love and share them with friends. A global community of
									innovators founders, mentors, investors, journalists, creators, entrepreneurs and makers.
								</Text>
							</SizerTwo>
						</Col>
						<Col style={{width: `40%`, alignItems: `flex-start`}}>
							<DiscoverIphoneScreen src={DiscoverInnovation} />
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
							GET FUNDED
						</P>
					</LargeSlash>
					<Row style={{marginTop: -130}}>	
						<Sizer>
							<P color={orange} style={{marginBottom: 15, fontSize: 16}}>FUND YOUR<br />FAVORITE INNOVATION</P>
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
					</Row>
					<Row>
						<FundIphoneScreen src={GetFundedSingle} />
					</Row>
					<HR color={textGrey} />	
					<LargeSlash path={LargeRedSlash}>
						<P 
							style={{
								color: lightRed, 
								marginTop: 25, 
								marginLeft: 40
							}}
						>DISCOVER<br />INNOVATION</P>
					</LargeSlash>				
					<Row style={{marginTop: -100}}>
						<SizerTwo>
							<P color={lightRed} style={{marginBottom: 15, fontSize: 16}}>UPVOTE</P>
							<Text color={textGrey} style={{marginBottom: 25}}>
								When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
								You get one vote per item, but you can change it after it's logged. The number appearing at
								the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
								exposure for your message, brand, or product and have a snowball effect on the traffic a post
								receives.
							</Text>
							<Text color={textGrey} style={{marginBottom: 25}}>
								An upvote on thon is very different than a vote on any other social-media website. Clicking
								that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
								votes are rewarded with US dollars or cryptocurrencies!
							</Text>
							<Text color={textGrey} style={{marginBottom: 25}}>
								When you click the upvote button you are telling the Blockchain, "this is where I want X amount
								of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
								of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
								direct to ideas you like!
							</Text>
							<P color={lightRed} style={{marginBottom: 15, fontSize: 16}}>DISCOVER</P>
							<Text color={textGrey} style={{marginBottom: 25}}>
								Discover your next favorite innovation app, website, product. We showcase the best new products
								and apps every day.
							</Text>
							<Text color={textGrey} style={{marginBottom: 25}}>
								This is the place to find innovation you love and share them with friends. A global community of
								innovators founders, mentors, investors, journalists, creators, entrepreneurs and makers.
							</Text>
						</SizerTwo>
					</Row>
					<Row>
						<DiscoverIphoneScreen src={DiscoverInnovationSingle} />		
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
	justifyContent: `center`
})

const ContentContainer = glamorous.div({
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundColor: white
})

const FundIphoneScreen = glamorous(IphoneScreen)({
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

const DiscoverIphoneScreen = glamorous(IphoneScreen)({
	width: 380,
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
	bottom: `-19vh`
})
