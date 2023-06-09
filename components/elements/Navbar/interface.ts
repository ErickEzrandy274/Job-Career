import { ReactNode } from "react";

export interface NavLinkProps {
	children: ReactNode;
	href: string;
	pathname: string;
	onClose: () => void;
}
