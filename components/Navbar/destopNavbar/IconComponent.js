const IconComponent = ({ Icon, appear }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer sm:w-16 hover:text-[#ff7004]">
      <Icon className="h-6 sm:h-7" />
    </div>
  );
};

export default IconComponent;
