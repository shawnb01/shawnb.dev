"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();
  // const latestPost = null;

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 justify-self-center rounded-lg bg-zinc-700/30 p-4">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <Input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        /> */}
        <Button type="submit" disabled={createPost.isPending || !name.trim()}>
          {createPost.isPending ? "Submitting..." : "Submit"}
        </Button>
        {/* <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button> */}
      </form>
    </div>
  );
}
