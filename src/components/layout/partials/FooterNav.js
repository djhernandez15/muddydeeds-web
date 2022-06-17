import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<a href={`mailto:${"muddydeeds1@gmail.com"}`}>Contact</a>
				</li>
				<li>
					<Link to="#0">About us</Link>
				</li>
				<li>
					<a
						href="https://rrpoa.net/pages/faq"
						target={"_blank"}
						rel="noopener noreferrer"
					>
						FAQ's
					</a>
				</li>
				{/* <li>
					<Link to="#0">Support</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default FooterNav;
