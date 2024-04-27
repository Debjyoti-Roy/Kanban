import React from "react";
import { ChevronDown, NotificationsOutline, PersonOutline, SearchOutline, SettingsOutline, ShareSocialOutline } from "react-ionicons";

export const Navbar = () => {
  return (
    <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-8 h-[70.5px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#006400]">
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="text-slate-100 font-semibold md:text-lg text-sm whitespace-nowrap">
          Quotation
        </span>
      </div>
			<div className="md:flex hidden items-center gap-10">
      <span className="text-slate-100 font-semibold md:text-lg text-sm whitespace-nowrap">
          Hi Dev
        </span>
			</div>
    </div>
  );
};
