import React from "react";
import { IconProps } from "./interface";

const SalaryIcon: React.FC<IconProps> = ({
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
			fill="none"
			viewBox="0 0 32 32"
		>
			<path
				fill="#A0AEC0"
				d="M17.65 18.348c.424.41.635.914.635 1.513 0 .71-.244 1.27-.732 1.68-.489.41-1.16.615-2.012.615-.872 0-1.546-.244-2.021-.732-.476-.488-.713-1.185-.713-2.09H11c0 1.289.342 2.311 1.025 3.066.69.75 1.641 1.179 2.852 1.29v1.865h1.445v-1.866c1.192-.123 2.116-.52 2.774-1.191.664-.67.996-1.556.996-2.656 0-.69-.134-1.293-.4-1.807-.261-.514-.671-.963-1.231-1.348-.553-.39-1.328-.745-2.324-1.064-.99-.325-1.703-.683-2.139-1.074-.43-.397-.644-.928-.644-1.592 0-.716.205-1.273.615-1.67.41-.404 1.002-.605 1.777-.605.742 0 1.332.27 1.768.81.436.54.654 1.27.654 2.188h1.797c0-1.335-.306-2.386-.918-3.155-.606-.768-1.455-1.227-2.549-1.377V7h-1.455v2.139c-1.087.13-1.943.537-2.568 1.22-.619.684-.928 1.56-.928 2.627 0 1.048.316 1.914.947 2.598.638.677 1.65 1.227 3.037 1.65.996.332 1.703.703 2.12 1.114z"
				className="color000000 svgShape"
			></path>
			<path
				fill="#A0AEC0"
				fillRule="evenodd"
				d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16z"
				className="color000000 svgShape"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default SalaryIcon;
