import Image from "next/image";
import { Suspense } from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {/* {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username} */}
            username
          </span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
        {/* {userId === post.user.id && <PostInfo postId={post.id} />} */}
      </div>

      {/* description */}
      <div className="flex flex-col gap-4">
        {/* {post.img && ( */}
        <div className="w-full min-h-96 relative">
          <Image
            //   src={post.img}
            src="/noAvatar.png"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        {/* )} */}
        {/* <p>{post.desc}</p> */}
        <p>description for the post</p>
      </div>

      {/* interaction */}
      <div className="flex items-center justify-between text-sm my-4 ">
        <div className="flex gap-8">
          {/* likes  */}
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">
              523 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          {/* comments  */}
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">
              523 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        {/* shares  */}
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-300">
              523 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
