import React from "react";
import { IconProps } from "./interface";

const BriefcaseIcon: React.FC<IconProps> = ({
	className,
	onClick,
	width = 20,
	height = 20,
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1792 1792"
		>
			<path
				fill="#A0AEC0"
				d="M640 256h512V128H640v128zm1152 640v480q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V896h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45V896h672zm-768 0v128H768V896h256zm768-480v384H0V416q0-66 47-113t113-47h352V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z"
				className="color000000 svgShape"
			></path>
		</svg>
	);
};

export default BriefcaseIcon;
