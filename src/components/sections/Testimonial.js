import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const Testimonial = ({
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
		"testimonial section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"testimonial-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

	const sectionHeader = {
		title: "Customer testimonials",
		paragraph: "Check out what other customers have to say!"
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
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— I love riding at River Ranch! There is
										so much land to ride on that you won't
										see the same place twice!
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Beau Billiams
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Lakeland</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— I like working to relax on the
										weekends. And that's exactly what I do
										at River Ranch. The main road is
										maintained and easy to get to Temp Camp.
										The folks at the front office are very
										helpful!
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Janice Tylers
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Tampa</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-left"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— My wife and I enjoy going to River
										Ranch with our kids and riding the
										trails all day. There is so much to see
										and do, the kids love going and are
										always bummed when it's time to go home.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Ben Stafford
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Miami</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
