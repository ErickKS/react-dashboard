import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoLogin } from "../Logo";
import { Input } from "../components/Login/Input";
import { Checkbox } from "../components/Login/Checkbox";
import { Button } from "../components/Login/Button";

import { User, LockKey, AddressBook } from "phosphor-react";

const userLogin = {
  username: "admin",
  password: "admin123",
};

export function Login() {
  const navigate = useNavigate();

  const usernameIcon = document.getElementById(
    "usernameIcon"
  ) as HTMLElement | null;
  const passwordIcon = document.getElementById(
    "passwordIcon"
  ) as HTMLElement | null;

  const [userData, setUserData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      userData !== userLogin.username &&
      passwordData !== userLogin.password
    ) {
      usernameIcon?.classList.replace("text-gray-400", "text-red-800");
      usernameIcon?.classList.add("animate-pulse");

      passwordIcon?.classList.replace("text-gray-400", "text-red-800");
      passwordIcon?.classList.add("animate-pulse");

      setUserData("");
      setPasswordData("");
    } else if (userData !== userLogin.username) {
      usernameIcon?.classList.replace("text-gray-400", "text-red-800");
      usernameIcon?.classList.add("animate-pulse");

      setUserData("");
    } else if (passwordData !== userLogin.password) {
      passwordIcon?.classList.replace("text-gray-400", "text-red-800");
      passwordIcon?.classList.add("animate-pulse");

      setPasswordData("");
    } else {
      navigate("/main");
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-5 text-gray-100">
      <header className="flex flex-col items-center justify-center">
        <LogoLogin />

        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm">Sing in to continue!</p>
      </header>

      <div className="flex items-center gap-3 w-full max-w-sm py-3 px-3 rounded bg-gray-800 mt-6 ring-2 ring-cyan-300">
        <AddressBook className="w-6 h-6 text-gray-400" />
        <div className="flex flex-col text-gray-400">
          <span className="leading-tight">
            <strong>username:</strong> admin
          </span>
          <span className="leading-tight">
            <strong>password:</strong> admin123
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-8"
      >
        <label htmlFor="username" className="flex flex-col gap-2">
          <span id="usernameLabel" className="font-semibold">
            Your username
          </span>
          <Input.Root>
            <Input.Icon id="usernameIcon">
              <User />
            </Input.Icon>

            <Input.Input
              id="username"
              type="text"
              placeholder="Username"
              value={userData}
              autoComplete="off"
              onChange={(e) => setUserData(e.target.value)}
            />
          </Input.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <span className="font-semibold">Your password</span>
          <Input.Root>
            <Input.Icon id="passwordIcon">
              <LockKey />
            </Input.Icon>

            <Input.Input
              id="password"
              type="password"
              placeholder="********"
              value={passwordData}
              autoComplete="off"
              onChange={(e) => setPasswordData(e.target.value)}
            />
          </Input.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 mb-6">
          <Checkbox id="remember" />
          <span className="text-gray-200 text-xs">Remember-me</span>
        </label>

        <Button>Continue</Button>
      </form>

      <a
        href="https://github.com/ErickKS"
        className="mt-4 text-gray-400 underline"
      >
        Developed by Erick Kuwahara
      </a>
    </div>
  );
}
