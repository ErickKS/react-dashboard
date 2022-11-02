import { LogoDash } from "../Logo";
import { AsideBtn } from "./AsideBtn";

import { Layout, Gear, ShoppingBag } from "phosphor-react";

export function Aside() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-10 p-4 sticky top-0 md:hidden">
      <LogoDash />

      <div className="w-full flex flex-col gap-4">
        <AsideBtn to="/main" active={true}>
          <Layout size={24} />
          dashboard
        </AsideBtn>

        <AsideBtn
          to="/main"
          active={false}
          onClick={() => alert("under construction")}
        >
          <ShoppingBag size={24} />
          eCommerce
        </AsideBtn>

        <AsideBtn to="/main" active={false}>
          <Gear size={24} />
          soon ...
        </AsideBtn>

        <AsideBtn to="/main" active={false}>
          <Gear size={24} />
          soon ...
        </AsideBtn>

        <AsideBtn to="/main" active={false}>
          <Gear size={24} />
          soon ...
        </AsideBtn>
      </div>
    </div>
  );
}
