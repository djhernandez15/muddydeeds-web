import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
	...SectionSplitProps.types
};

const defaultProps = {
	...SectionSplitProps.defaults
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top"
	);

	const sectionHeader = {
		title: "Access Deeds for Sale",
		paragraph:
			"Purchase an access deed to become a member of River Ranch Property Owners Association. RRPOA membership fees are $155. Membership is open to all property owners within River Ranch acres. Membership is also open to spouses and children (under the age of 21 years old) of property owners. All children under the age of 16 must be accompanied by property owner. A current paid tax receipt will be required. All persons entering 16 years and older are required to have a legal picture ID."
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
					/>
					<div className={splitClasses} id="access-deeds-for-sale">
						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									0.31 acre Lot
								</div>
								<h3 className="mt-0 mb-12">
									Access Deed - $899
								</h3>
								<p className="mt-0 mb-24">
									Grants eligibility to become a member of the
									River Ranch Property Owners Association. You
									will own property and receive a recorded
									deed from Polk County Clerk of Courts.
									Present the deed and $155 to the front
									office and come and go as you please for up
									to a year! Renew membership annually.
								</p>
								<Button
									tag="a"
									color="primary"
									wideMobile
									href=""
								>
									Buy Now
								</Button>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/RiverRanchSunset.webp")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>

						{/* <div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-right"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Lightning fast workflow
								</div>
								<h3 className="mt-0 mb-12">
									Data-driven insights
								</h3>
								<p className="m-0">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									— Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-02.png")}
									alt="Features split 02"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Lightning fast workflow
								</div>
								<h3 className="mt-0 mb-12">
									Data-driven insights
								</h3>
								<p className="m-0">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
									— Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-03.png")}
									alt="Features split 03"
									width={528}
									height={396}
								/>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
