import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import { Bell, SignOut, X } from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  function handleNotifications(event: any) {
    const notification = document.getElementById(
      "notificationPing"
    ) as HTMLElement;

    if (!notification.classList.contains("hidden")) {
      notification.setAttribute("class", "hidden");
    }
  }

  return (
    <header title={title}>
      <h2 className="flex justify-between px-4 py-3 text-xl text-gray-100 bg-gray-800 rounded">
        {title}
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

            <Popover.Content className="w-full max-w-xs p-3 mx-auto transition-all ring-2 ring-gray-400 rounded bg-gray-800 animate-fade">
              <div className="flex gap-3">
                <h3 className="text-sm">Notifications</h3>
                <Popover.Close className="transition-opacity hover:opacity-60">
                  <X size={20} weight="bold" />
                </Popover.Close>
              </div>
              <Popover.Arrow className="fill-gray-400" />
            </Popover.Content>
          </Popover.Root>
          <Link to="/" title="Logout">
            <SignOut
              size={24}
              className="cursor-pointer transition-colors hover:text-cyan-500"
            />
          </Link>
        </div>
      </h2>
    </header>
  );
}
