import RegisterFrom from "@/components/RegisterFrom";
import {getUserFromCookie} from "@/lib/getUser";

export default async function Home() {
    const user = await getUserFromCookie()
  return (
    <div className="flex w-screen min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
          {user && <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {user.username}</h1>}
          {!user && (
              <RegisterFrom />
          )}

      </main>
    </div>
  );
}
