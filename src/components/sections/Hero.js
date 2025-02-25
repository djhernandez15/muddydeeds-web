import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Modal from "../elements/Modal";

const propTypes = {
	...SectionProps.types
};

const defaultProps = {
	...SectionProps.defaults
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [videoModalActive, setVideomodalactive] = useState(false);

	const closeModal = (e) => {
		e.preventDefault();
		setVideomodalactive(false);
	};

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							Get access to Florida's premier off-road
							destination,
							<span className="text-color-primary">
								{" River Ranch."}
							</span>
						</h1>
						<div className="container-xs">
							<p
								className="m-0 mb-32 reveal-from-bottom"
								data-reveal-delay="400"
							>
								For $899, you can purchase a River Ranch deed
								and have access to over 50,000 acres of off-road
								riding trails and hunting grounds. Open 24/7,
								bring your ATV, SXS, Jeep, or Swamp Buggy.
							</p>
							<div
								className="reveal-from-bottom"
								data-reveal-delay="600"
							>
								<ButtonGroup>
									<Button
										tag="a"
										color="primary"
										wideMobile
										href="#access-deeds-for-sale"
									>
										Access Deeds
									</Button>
									<Button
										tag="a"
										color="tertiary"
										disabled={true}
										wideMobile
									>
										Campsite Lots
									</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
					<div
						className="hero-figure reveal-from-bottom illustration-element-01"
						data-reveal-value="20px"
						data-reveal-delay="800"
					>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/hhMI6y8WUg4"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
						{/* <a
							data-video="https://player.vimeo.com/video/174002812"
							href="#0"
							aria-controls="video-modal"
							onClick={openModal}
						>
							<Image
								className="has-shadow"
								src={require("./../../assets/images/video-placeholder.jpg")}
								alt="Hero"
								width={896}
								height={504}
							/>
						</a> */}
					</div>
					<Modal
						id="video-modal"
						show={videoModalActive}
						handleClose={closeModal}
						video="https://player.vimeo.com/video/174002812"
						videoTag="iframe"
					/>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
