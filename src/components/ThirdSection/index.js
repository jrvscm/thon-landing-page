import React from 'react';
import glamorous from 'glamorous';

import LargeWhiteSlash from '../../assets/images/large-white-slashes.svg';
import CurveImage from '../../assets/images/curve-top-border-two.png';
import RedSlashes from '../../assets/images/red-slashes.png';
import GetNewSkills from '../../assets/images/get-new-skills-arrows.png';
import WhiteSlashes from '../../assets/images/white-slashes.png';
import GetNewSkillsSingle from '../../assets/images/get-new-skills.png';
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
	if(!isMobile){
	return(
	<Container>
		<Row>
			<LabelCol>
				<VerticalRow>
					<Slashes src={WhiteSlashes} />
					<P color={white}>GET NEW SKILLS</P>
				</VerticalRow>
			</LabelCol>
			<Col>
				<Row style={{paddingTop: 70, paddingBottom: 160}}>
					<TextCol>
						<div style={{textAlign: `right`}}>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								LEARN FROM EXPERTS:
							</Text>
							<Text color={white} style={{fontWeight: 300, marginBottom: 65}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>
					</TextCol>
					<ImageCol>
						<GlamorousIphoneScreen src={GetNewSkills} />
					</ImageCol>
					<TextCol>
						<div style={{textAlign: `left`}}>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								BE PART OF A COMMUNITY: 
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								EARN SHAREABLE CERTIFICATES:
							</Text>
							<Text color={white} style={{fontWeight: 300, marginBottom: 65}}>
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
					>GET NEW<br />SKILLS</P>
				</LargeSlash>	
				<Row style={{marginTop: -100}}>
					<TextCol>
						<div>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								DON'T JUST LEARN – LEARN<br />  
								TO INNOVATE<br />
								LEARN SPECIFIC SKILLS:
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
 								Learn from 100+ companies -<br /> 
 								from Cryptocurrency and Blockchain to Artificial Intelligence, 
								Machine Learning, Data Science, Marketing and Photoshop.							
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								LEARN FROM EXPERTS:
							</Text>
							<Text color={white} style={{fontWeight: 300, marginBottom: 30}}>
								Be inspired by 1000+ mentors, expert instructors. Keep learning even when you're offline.
							</Text>
						</div>
					</TextCol>
				</Row>
				<Row>
					<ImageCol>
						<GlamorousIphoneScreen src={GetNewSkillsSingle} />
					</ImageCol>
				</Row>
				<Row>	
					<TextCol>
						<div>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300, marginTop: 30}}>
								BE PART OF A COMMUNITY: 
							</Text>
							<Text color={white} style={{paddingBottom: 25, fontWeight: 300}}>
								Connect with a mentor, interact with other learners, or post questions for your instructor.						
							</Text>
							<Text color={white} style={{paddingBottom: 15, fontWeight: 300}}>
								EARN SHAREABLE CERTIFICATES:
							</Text>
							<Text color={white} style={{fontWeight: 300}}>
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
	marginTop: `30vh`,
	paddingBottom: `30vh`
})

const GlamorousIphoneScreen = glamorous(IphoneScreen)({
	width: 450,
	[mediaQueries.small]:{
		height: 500,
		width: 350
	},
	[mediaQueries.mobile]:{
		height: 600,
		width: 315,
		boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.5)`
	} 
})

const TextCol = glamorous(Col)({
	width: `20%`, 
	alignItems: `flex-start`,
	[mediaQueries.mobile]:{
		width: `100%`,
		padding: 40
	}
})

const ImageCol = glamorous(Col)({
 	width: `30%`, 
 	marginRight: 25, 
 	marginLeft: 25,
 	[mediaQueries.regular]:{
 		marginLeft: 70,
 		marginRight: 70
 	},
 	[mediaQueries.mobile]:{
 		width: `100%`
 	}
})