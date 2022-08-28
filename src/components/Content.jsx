import React from "react";
import Logo from "../assets/logo.png";
import { Icon } from "../assets/Icons";

function Content() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="absolute left-5 top-5 z-20 opacity-5 select-none">@onurmaden, 2022</div>
      <div className="flex items-end justify-end h-[228px]">
				<img className="h-[92px] aspect-[272/92] shrink-0" src={Logo} alt="" />
			</div>
			<div className="flex flex-col align-middle justify-center items-center w-[584px] h-[160px] p-5 mx-2 max-w-full">
				<div className="flex flex-col  max-w-full h-[48px] rounded-3xl border border-[#dfe1e5] border-solid hover:drop-shadow-xl group justify-center min-w-0 mx-1 bg-white">
					<div className="flex min-w-0 pt-[5px] pr-[8px] pl-[15px]">
						<span className="inline-block pr-[13px]">
							<Icon name="search" size={20} color="#9aa0a6" />
						</span>
						<input
							className="w-[483px] break-words focus:outline-none mt-[-2px] text-[14px] group-focus:drop-shadow-xl"
							type="search"
							name=""
							id=""
						/>
						<span className="px-2">
							<Icon name="mic" size={24} />
						</span>
					</div>
				</div>

				<div className="pt-[18px]">
					<ul className="flex flex-row text-[14px] text-[#3c4043]">
						<li className="flex my-[11px] mx-1 px-4 bg-[#f8f9fa] border border-solid border-[#f8f9fa] leading-7 text-center h-[34px] rounded-[4px] justify-center">
							<button>Google Search</button>
						</li>
						<li className="flex my-[11px] mx-1 px-4 bg-[#f8f9fa] border border-solid border-[#f8f9fa] leading-7 text-center h-[34px] rounded-[4px]">
							<button>I'm Feeling Lucky</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Content;
