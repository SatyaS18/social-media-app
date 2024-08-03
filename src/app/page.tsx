const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">LeftMenu</div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          stories <br /> addpost <br /> feed
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">rightmenu</div>
    </div>
  );
};

export default Homepage;
