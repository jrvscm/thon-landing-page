import React from 'react';
import glamorous from 'glamorous';


import LargeWhiteSlash from '../../assets/images/large-white-slashes.svg';
import CurveImage from '../../assets/images/curve-top-border-two.png';
import RedSlashes from '../../assets/images/red-slashes.png';
import GetNewSkills from '../../assets/images/get-new-skills-arrows.png';
import WhiteSlashes from '../../assets/images/white-slashes.png';
import GetNewSkillsSingle from '../../assets/images/get-new-skills.png';
import GetFundedSingle from '../../assets/images/get-funded.png';
import DiscoverInnovation from '../../assets/images/discover-innovation-arrows.png';
import DiscoverInnovationSingle from '../../assets/images/discover-innovation-single.png';
import { white } from '../../colors.js';
import {
	LargeSlash, 
	SectionBorder,
	mediaQueries, 
	Row, 
	Col, 
	VerticalRow, 
	Slashes,
	LabelCol,
	HR, 
	P,
	Li,
	Text,
	List,
	IphoneScreen
} from '../../UIElements.js';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const ThirdSection = () => {
	if(!isMobile || isMobile === `iPad`) {
		return(
			<Container>
				<Row>
					<LabelCol>
						<VerticalRow>
							<Slashes src={WhiteSlashes} />
							<P color={white} style={{fontSize: 36}}>DISCOVER INNOVATION</P>
						</VerticalRow>
					</LabelCol>				
					<Col style={{width: `60%`, alignItems: `flex-end`}}>
						<SizerTwo>
							<P color={white} style={{marginBottom: 15}}>UPVOTE</P>
							<Text color={white} style={{marginBottom: 25}}>
								When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
								You get one vote per item, but you can change it after it's logged. The number appearing at
								the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
								exposure for your message, brand, or product and have a snowball effect on the traffic a post
								receives.
							</Text>
							<Text color={white} style={{marginBottom: 25}}>
								An upvote on thon is very different than a vote on any other social-media website. Clicking
								that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
								votes are rewarded with US dollars or cryptocurrencies!
							</Text>
							<Text color={white} style={{marginBottom: 25}}>
								When you click the upvote button you are telling the Blockchain, "this is where I want X amount
								of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
								of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
								direct to ideas you like!
							</Text>
						</SizerTwo>
					</Col>
					<Col style={{width: `40%`, alignItems: `flex-start`}}>
						<IphoneScreen src={DiscoverInnovation} style={{objectPosition: `left`}} />
					</Col>					
				</Row>		
				<HR color={white} />
				<Row>
					<LabelCol>
						<VerticalRow>
							<Slashes src={WhiteSlashes} />
							<P color={white} style={{fontSize: 36}}>GET NEW SKILLS</P>
						</VerticalRow>
					</LabelCol>
					<Col>
						<Row>
							<TextCol>
								<div style={{textAlign: `right`}}>
									<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
										DON'T JUST LEARN – LEARN<br />  
										TO INNOVATE<br />
										LEARN SPECIFIC SKILLS:
									</P>
									<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 										Learn from 100+ companies -<br /> 
 										from Cryptocurrency and Blockchain to Artificial Intelligence, 
										Machine Learning, Data Science, Marketing and Photoshop.							
									</Text>
									<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
										LEARN FROM EXPERTS:
									</P>
									<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
										Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
									</Text>
								</div>
							</TextCol>
							<ImageCol>
								<IphoneScreen src={GetNewSkills} />
							</ImageCol>
							<TextCol>
								<div style={{textAlign: `left`}}>
									<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
										BE PART OF A COMMUNITY: 
									</P>
									<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
										Connect with a mentor, interact with other learners, or post questions for your instructor.						
									</Text>
									<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
										EARN SHAREABLE CERTIFICATES:
									</P>
									<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
										Easily share your achievements with employers, colleagues and friends
										Thon offers free and paid courses including video lecture and reading materials. Paid courses unlock 
										quizzes and award you a Certificate
									</Text>
								</div>				
							</TextCol>		
						</Row>
					</Col>
				</Row>
			<SectionBorder src={CurveImage} />
		</Container>
	)} else {
		return(
			<Container>
				<LargeSlash path={LargeWhiteSlash}>
					<P 
						style={{
							color: white, 
							marginTop: 25, 
							marginLeft: 40
						}}
					>DISCOVER<br />INNOVATION</P>
				</LargeSlash>	
				<Row style={{marginTop: -100}}>
					<TextCol>
						<div>
							<P color={white} style={{marginBottom: 15}}>UPVOTE</P>
							<Text color={white} style={{marginBottom: 25}}>
								When you're logged in to #Thon, you'll be able to upvote items to help determine their rank.
								You get one vote per item, but you can change it after it's logged. The number appearing at
								the up arrows is the submission's score: the number of funds raised. Upvotes allow you to get
								exposure for your message, brand, or product and have a snowball effect on the traffic a post
								receives.
							</Text>
							<Text color={white} style={{marginBottom: 25}}>
								An upvote on thon is very different than a vote on any other social-media website. Clicking
								that little arrow is much more than a "Like" on Facebook or a "Heart" on Instagram. On #Thon,
								votes are rewarded with US dollars or cryptocurrencies!
							</Text>
							<Text color={white} style={{marginBottom: 25}}>
								When you click the upvote button you are telling the Blockchain, "this is where I want X amount
								of the daily rewards pool to go." The amount that you're able to direct is dependent on the amount
								of Privilege you have. So the more Privilege you have, the more of the daily rewards pool you can
								direct to ideas you like!
							</Text>	
						</div>
					</TextCol>
				</Row>
				<Row>
					<ImageCol>
						<IphoneScreen src={DiscoverInnovationSingle} />
					</ImageCol>
				</Row>
				<HR color={white} />				
				<LargeSlash path={LargeWhiteSlash}>
					<P 
						style={{
							color: white, 
							marginTop: 25, 
							marginLeft: 40
						}}
					>GET NEW<br />SKILLS</P>
				</LargeSlash>
				<Row style={{marginTop: -100}}>						
					<TextCol>
						<div>
							<P color={white} style={{ paddingBottom: 15, fontSize: 20}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</P>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								LEARN FROM EXPERTS:
							</P>
							<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>				
					</TextCol>		
				</Row>
				<Row>
					<ImageCol>
						<IphoneScreen src={GetNewSkillsSingle} />
					</ImageCol>
				</Row>	
				<Row>
					<TextCol>
						<div style={{textAlign: `left`}}>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								BE PART OF A COMMUNITY: 
							</P>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<P color={white} style={{paddingBottom: 15, fontSize: 20}}>
								EARN SHAREABLE CERTIFICATES:
							</P>
							<Text color={white} style={{fontWeight: 300, marginBottom: 40}}>
								Easily share your achievements with employers, colleagues and friends
								Thon offers free and paid courses including video lecture and reading materials. Paid courses unlock 
								quizzes and award you a Certificate
							</Text>
						</div>
					</TextCol>
				</Row>							
				<SectionBorder src={CurveImage} />
			</Container>
		)
	}
}

export default ThirdSection;

const Container = glamorous.div({
	position: `relative`,
	width: `100vw`,
	backgroundColor: `transparent`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	marginTop: `50vh`,
	paddingBottom: `50vh`,
	[mediaQueries.med]:{
		marginTop: `28vh`,
		paddingBottom: `25vh`
	},
	[mediaQueries.mobile]:{
		marginTop: `15vh`,
		paddingBottom: `10vh`
	},
	[mediaQueries.landscape]:{
		marginTop: 200,
		paddingBottom: 200
	}
})

const TextCol = glamorous(Col)({
	width: `25%`, 
	[mediaQueries.small]:{
		width: `30%`
	},
	[mediaQueries.mobile]:{
		width: `100%`,
		padding: 40
	}
})

const ImageCol = glamorous(Col)({
 	width: `35%`, 
 	[mediaQueries.small]:{
 		width: `30%`
 	},
 	[mediaQueries.mobile]:{
 		width: `100vw`
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
