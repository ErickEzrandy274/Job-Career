import React from "react";
import { IconProps } from "./interface";

const TimeIcon: React.FC<IconProps> = ({
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
			viewBox="0 0 6.35 6.35"
		>
			<path
				fillRule="evenodd"
				d="M12.004.998C5.94.998.996 5.935.996 11.998s4.945 11.006 11.008 11.006c6.063 0 10.998-4.943 10.998-11.006 0-6.063-4.935-11-10.998-11zm0 2a8.983 8.983 0 018.998 9 8.988 8.988 0 01-8.998 9.006 8.997 8.997 0 01-9.008-9.006c0-4.982 4.026-9 9.008-9zm-.016 1.986a1 1 0 00-.99 1.02v5.994a1 1 0 00.297.707l4 4.002a1 1 0 101.41-1.418L13 11.584v-5.58a1 1 0 00-1.012-1.02z"
				fontWeight="400"
				overflow="visible"
				paintOrder="stroke fill markers"
				transform="scale(.24)"
				fill="#A0AEC0"
			></path>
		</svg>
	);
};

export default TimeIcon;
