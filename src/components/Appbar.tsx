import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import SigninButton from "./SigninButton";

const Appbar = async () => {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    return (
      <header className="flex gap-4 p-4 shadow justify-between ">
        <Link
          className="text-[#5f9ea0] hover:text-sky-400 transition-colors"
          href={"/"}
        >
          Youstud.
        </Link>

        <SigninButton />
      </header>
    );
  }

  return (
    <header className="flex gap-4 p-4 shadow justify-between">
      <Link
        className="text-[#5f9ea0] hover:text-sky-400 transition-colors"
        href={"/"}
      >
        Youstud.
      </Link>
      <SigninButton />
    </header>
  );
};

export default Appbar;
