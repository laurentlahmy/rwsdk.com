import React from "react";
import Constants from "src/lib/Constants";

interface SDKButtonProps {
	className?: string;
	size?: "small" | "medium" | "large";
	href?: string;
	text?: string;
}

export const SDKButton: React.FC<SDKButtonProps> = ({
	className = "",
	size = "medium",
	href,
	text,
}) => {
	const sizeClasses = {
		small: "text-[16px] px-3 py-1",
		medium:
			"text-[18px] sm:text-[20px] md:text-[24px] px-4 sm:px-3 md:px-8 py-1",
		large:
			"text-[18px] sm:text-[20px] md:text-[24px] px-4 sm:px-6 md:px-8 py-1",
	};

	return (
		<a
			target="_blank"
			rel="noreferrer"
			href={href || Constants.DOCS_QUICKSTART_URL}
			className={`text-orange-medium border-2 border-orange-light bg-black font-apple  tracking-[-0.03em] w-fit hover:text-orange-light transition-colors ${sizeClasses[size]} ${className}`}
		>
			{text || "QUICK START"}
		</a>
	);
};
