import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className=" text-center text-2xl text-black/50 font-medium leading-none tracking-tight sm:text-5xl lg:text-7xl">
          Welcome back!
        </h1>
        <p className="text-sky-600">Hi, {session.user.name}!</p>
        <p>Lets make something new!</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className=" text-center text-3xl text-black/50 font-medium leading-none tracking-tight sm:text-5xl lg:text-7xl">
        Youstud. Lets begin a Journey 🚀
      </h1>
    </main>
  );
};

export default Home;
