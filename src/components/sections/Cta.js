import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool
};

const defaultProps = {
	...SectionProps.defaults,
	split: false
};

const Cta = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	split,
	...props
}) => {
	const outerClasses = classNames(
		"cta section center-content-mobile reveal-from-bottom",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"cta-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
		split && "cta-split"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					{/* <div className="cta-slogan">
            <h3 className="m-0">
              For previewing layouts and visual?
              </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
          </div> */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14117.345323665912!2d-81.3185656!3d27.7994165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d62c781e99528b0!2sRiver%20Ranch%20Home%20Base!5e0!3m2!1sen!2sus!4v1655496301774!5m2!1sen!2sus"
						width="600"
						height="450"
						style={{ border: 0, margin: "auto" }}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="googlemaps"
					></iframe>
				</div>
			</div>
		</section>
	);
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
