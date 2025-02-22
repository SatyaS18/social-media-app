import Image from "next/image";
import { Suspense } from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import PostInteraction from "./PostInteraction";
import PostInfo from "./PostInfo";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};
const Post = ({ post }: { post: FeedPostType }) => {
  const { userId } = auth();
  return (
    <div className="flex flex-col gap-4">
      {/* user  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>

        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>

      {/* description */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>

      {/* interaction */}
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>

      <Suspense fallback="Loading...">
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default Post;
