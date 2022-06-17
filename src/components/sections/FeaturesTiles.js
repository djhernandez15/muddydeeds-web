import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "Bring a guest!",
		paragraph:
			"A guest pass is $135 a year + $10 for their guest card. This can be used for any guest you invite throughout the year. A guest pass can be used for a single person or married couple, with children under the age of 16 if they are riding in one vehicle. Married couples will need to have the same address on their Driver's License or present their Marriage License. Guests have to be accompanied by RRPOA members when entering or signing out of River Ranch. Subject to 'No Guests' weekends."
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
					/>
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-01.svg")}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Offroad Trails
									</h4>
									<p className="m-0 text-sm">
										Over 70 square miles of riding trails.
										Bring your ATV or SXS and blast through
										the trails to Burnt Bridge. Gas up at
										camp and head to the Ropeswing for a
										unique riding experience with a fun
										destination.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-02.svg")}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Hunting Area</h4>
									<p className="m-0 text-sm">
										Hunting and Fishing are allowed in
										accordance with the rules and
										regulations of the Florida Game and
										Freshwater Fish Commission and the
										special rules of RRPOA. Hunt deer, hog,
										quail, and turkey and bring momma home
										something to be proud of.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-03.svg")}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Family Friendly
									</h4>
									<p className="m-0 text-sm">
										Membership is open to spouses and
										children (under the age of 21 years old)
										of property owners. All children under
										the age of 16 must be accompanied by
										property owner. Bring your family and
										spend a day of riding through Florida's
										pristine landscape and enjoy what makes
										Florida the best place to live!
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-04.svg")}
											alt="Features tile icon 04"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										RV Campers/Toy Haulers
									</h4>
									<p className="m-0 text-sm">
										Temporary camp is a designated area to
										park your RV and camp overnight. Gas,
										solar and wind powered generators
										allowed.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-05.svg")}
											alt="Features tile icon 05"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Fees</h4>
									<p className="m-0 text-sm">
										Annual Membership fee - $155 <br />
										Guest pass(optional) - $135 <br />
										All fees are paid to the front office,
										located at 18550 County Road 630, Lake
										Wales, FL 33898
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-06.svg")}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Support</h4>
									<p className="m-0 text-sm">
										Front office is open 24/7, 365 days a
										year.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
