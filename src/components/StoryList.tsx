import Image from "next/image";

const StoryList = () => {
  return (
    // <div className="flex flex-col items-center gap-2 cursor-pointer relative">
    //   <Image
    //     src="/noAvatar.png"
    //     alt=""
    //     width={80}
    //     height={80}
    //     className="w-20 h-20 rounded-full ring-2 object-cover"
    //     // onClick={() => open()}
    //   />
    // </div>

    // story
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      //   key={story.id}
    >
      <Image
        src="/noAvatar.png"
        alt=""
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-2"
      />
      <span className="font-medium">
        {/* {story.user.name || story.user.username} */}
        Satyakant
      </span>
    </div>
  );
};

export default StoryList;
