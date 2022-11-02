import * as Popover from "@radix-ui/react-popover";
import { LogoDash } from "../Logo";
import { AsideBtn } from "./AsideBtn";
import {
  Bell,
  List,
  SignOut,
  X,
  Layout,
  Gear,
  ShoppingBag,
} from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  function handleNotifications() {
    const notification = document.getElementById(
      "notificationPing"
    ) as HTMLElement;

    if (!notification.classList.contains("hidden")) {
      notification.setAttribute("class", "hidden");
    }
  }

  function handleAside() {
    const aside = document.getElementById("aside");

    aside?.classList.toggle("grid");
    aside?.classList.toggle("hidden");
  }

  return (
    <>
      <header title={title}>
        <h2 className="flex justify-between px-4 py-3 text-xl text-gray-100 bg-gray-800 rounded">
          <div className="flex gap-4">
            <button className="hidden md:block" onClick={handleAside}>
              <List size={28} />
            </button>
            {title}
          </div>
          <div className="flex items-center gap-7">
            <Popover.Root>
              <Popover.Trigger asChild title="Notifications">
                <button
                  className="relative"
                  aria-label="Update dimensions"
                  onClick={handleNotifications}
                >
                  <Bell
                    size={24}
                    className="cursor-pointer transition-opacity hover:opacity-60"
                  />
                  <div
                    id="notificationPing"
                    className="w-2 h-2 rounded-full bg-cyan-500 absolute top-0 left-[3px] animate-pulse z-10"
                  ></div>
                </button>
              </Popover.Trigger>

              <Popover.Content className="w-full max-w-xs p-3 mx-auto transition-all ring-2 ring-gray-400 rounded bg-gray-800 animate-fade z-10">
                <div className="flex gap-3">
                  <h3 className="text-sm">Notifications</h3>
                  <Popover.Close className="transition-opacity hover:opacity-60">
                    <X size={20} weight="bold" />
                  </Popover.Close>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-200">System:</p>
                  <p className="text-xs text-gray-100">- Nice to see you!</p>
                </div>
                <Popover.Arrow className="fill-gray-400" />
              </Popover.Content>
            </Popover.Root>
            <a href="./" title="Logout">
              <SignOut
                size={24}
                className="cursor-pointer transition-colors hover:text-cyan-500"
              />
            </a>
          </div>
        </h2>
      </header>

      <div
        id="aside"
        className="fixed inset-0 h-full hidden grid-cols-[224px_1fr]"
      >
        <div className="flex flex-col gap-10 bg-gray-900 p-4">
          <div className="w-full flex justify-between items-center">
            <LogoDash />
            <button className="text-gray-100 p-2" onClick={handleAside}>
              <X size={24} weight="bold" />
            </button>
          </div>

          <div className="w-full flex flex-col gap-4">
            <AsideBtn to="/main" active={true}>
              <Layout size={28} />
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
        <div onClick={handleAside}></div>
      </div>
    </>
  );
}
