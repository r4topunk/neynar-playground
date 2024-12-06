"use client";

import { NeynarAuthButton, useNeynarContext } from "@neynar/react";
import Image from "next/image";

export default function Home() {
  const { user } = useNeynarContext();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <NeynarAuthButton />

      {user && (
        <>
          <div className="flex flex-col gap-4 w-96 p-4 rounded-md shadow-md">
            <div className="flex items-center gap-4">
              {user.pfp_url && (
                <Image
                  src={user.pfp_url}
                  width={40}
                  height={40}
                  alt="User Profile Picture"
                  className="rounded-full"
                />
              )}
              <p className="text-lg font-semibold">{user?.display_name}</p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
