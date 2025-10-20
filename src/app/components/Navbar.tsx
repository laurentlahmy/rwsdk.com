import { CloudflareImage } from "./CloudflareImage";
import Constants from "src/lib/Constants";
import { GitHubStarWidget } from "./GitHubStarWidget";
import { Suspense } from "react";

interface NavbarProps {
	activePage?: string;
}

export function Navbar(props: NavbarProps) {
	return (
		<div className="flex flex-col h-16 lg:flex-row justify-between sticky top-0 bg-beige z-99 items-center transition-shadow duration-200 bg-neutral-900">
			<a
				className="cursor-pointer bg-orange-400 h-full flex items-center px-8 border-r-8 border-cyan-400"
				href="/"
			>
				<CloudflareImage
					imageId="37162c6c-890c-48e3-790a-48b2b87fcd00"
					alt="logo"
					className="w-[140px] sm:w-[186px] sm:mb-4 lg:mb-0"
				/>
			</a>
			<div className="px-8 flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 font-mil tracking-[-0.17em] font-bold text-[14px] sm:text-[16px] md:text-[18px] mt-4 lg:mt-0 text-[#bbb]">
				<span className="text-orange-light hidden sm:inline text-sm">
					{">"}
				</span>
				<a
					href={Constants.LEARN_URL}
					className="hover:text-orange-light transition-colors"
				>
					Learn
				</a>
				<span className="text-orange-light hidden sm:inline text-sm">\</span>
				<a
					href={Constants.DOCS_URL}
					className="hover:text-orange-light transition-colors"
				>
					Docs
				</a>
				<span className="text-orange-light hidden sm:inline text-sm">\</span>
				<a
					href="/personal-software"
					className={`hover:text-orange-light transition-colors ${
						props.activePage === "personal-software" ? "text-orange-medium" : ""
					}`}
				>
					Personal Software
				</a>
				<span className="text-orange-light hidden sm:inline text-sm">\</span>
				<a
					href="/blog"
					className={`hover:text-orange-light transition-colors ${
						props.activePage === "blog" ? "text-orange-medium" : ""
					}`}
				>
					Blog
				</a>
				<span className="text-orange-light hidden sm:inline text-sm">\</span>
				<a
					href={Constants.DISCORD_URL}
					className="hover:text-orange-light transition-colors"
				>
					Discord
				</a>
				<span className="text-orange-light hidden sm:inline text-sm">\</span>
				<Suspense
					fallback={
						<div className="text-[14px] sm:text-[16px] md:text-[18px]">
							Loading...
						</div>
					}
				>
					<GitHubStarWidget />
				</Suspense>
			</div>
		</div>
	);
}
