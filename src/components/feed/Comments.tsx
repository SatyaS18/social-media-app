import Image from "next/image";

const Comments = () => {
  return (
    <div>
      <div>
        {/* write  */}
        <div className="flex items-center gap-4">
          {" "}
          <Image
            // src={user.imageUrl || "noAvatar.png"}
            src="/noAvatar.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
              //   onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* comments  */}
        <div>
          {/* comment  */}
          <div className="flex gap-4 justify-between mt-6">
            {/* avatar  */}
            <Image
              //   src={comment.user.avatar || "noAvatar.png"}
              src="/noAvatar.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />

            {/* desc  */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">Satyakant Sahu</span>
              <p>Nive pic!!</p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer w-4 h-4"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">0 Likes</span>
                </div>
                <div className="">Reply</div>
              </div>
            </div>

            {/* icon  */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
