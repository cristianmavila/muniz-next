interface MenuIconProps {
  open: boolean;
}

const MenuIcon = ({ open }: MenuIconProps) => {
  return (
    <div className="size-11 flex gap-[10px] flex-col relative">
      {!open ? (
        <>
          <span className="w-full h-[4px] bg-slate-400 block"></span>
          <span className="w-full h-[4px] bg-slate-400 block"></span>
          <span className="w-full h-[4px] bg-slate-400 block"></span>
        </>
      ) : (
        <>
          <span className="w-full h-[4px] rotate-45 bg-slate-400 block absolute bottom-1/2 left-1/2 -translate-x-1/2"></span>
          <span className="w-full h-[4px] -rotate-45 bg-slate-400 block absolute bottom-1/2"></span>
        </>
      )}
    </div>
  );
};

export default MenuIcon;
