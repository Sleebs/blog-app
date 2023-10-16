"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/puslishPorts";
type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session } = useSession();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session) return <div>You must be signed in to post</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = session?.user?.id;
    if (!userId) return;
    try {
      const post = await createPost({ title, content, authorId: userId });
      setSubmitted((submitted) => true);
    } catch (error) {
      console.error(error);
    }
  };
  if (submitted) return <div> Post Submitted!</div>;
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
