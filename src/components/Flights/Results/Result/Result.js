import classes from './Result.module.css'

const Result = (props) => {
	return (
		<div className={classes.Result}>
			<svg
				height="100%"
				width="100%"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<g>
					<path
						d="M0 15 S3 15 3 0 L97 0 S97 15 100 15 L100 85 S97 85 97 100 L3 100 S3 85 0 85 Z"
						fill="currentColor"
					/>
					<line
						x1="3"
						y1="100"
						x2="97"
						y2="100"
						stroke="currentColor"
						strokeWidth="3"
						strokeDasharray="1 0.5"
					/>
				</g>
			</svg>
			{props.children}
		</div>
	);
};

export const FirstResult = (props) => {
	return (
		<div className={classes.Result}>
			<svg
				height="100%"
				width="100%"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<g>
					<path
						d="M0 15 S0 0 3 0 L97 0 S100 0 100 15 L100 85 S97 85 97 100 L3 100 S3 85 0 85 Z"
						fill="currentColor"
					/>
					<line
						x1="3"
						y1="100"
						x2="97"
						y2="100"
						stroke="currentColor"
						strokeWidth="3"
						strokeDasharray="1 0.5"
					/>
				</g>
			</svg>
			{props.children}
		</div>
	);
};

export const LastResult = (props) => {
	return (
		<div className={classes.Result}>
			<svg
				height="100%"
				width="100%"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<g>
					<path
						d="M0 15 S3 15 3 0 L97 0 S97 15 100 15 L100 85 S100 100 97 100 L3 100 S0 100 0 85 Z"
						fill="currentColor"
					/>
				</g>
			</svg>
			{props.children}
		</div>
	);
};
export default Result;
