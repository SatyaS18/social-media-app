import FriendRequests from "./FriendRequests";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
    </div>
  );
};

export default RightMenu;
