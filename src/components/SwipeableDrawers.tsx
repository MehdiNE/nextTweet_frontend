import SwipeableDrawer from "@mui/material/SwipeableDrawer";

interface IProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SwipeableDrawersUI({
  open,
  onOpen,
  onClose,
  children,
}: IProps) {
  return (
    <SwipeableDrawer
      onOpen={onOpen}
      open={open}
      // disableDiscovery={true}
      disableSwipeToOpen={true}
      onClose={onClose}
      anchor="bottom"
      sx={{
        "& .MuiDrawer-paperAnchorBottom": {
          borderRadius: "14px 14px 0 0",
          maxWidth: 768,
          mx: "auto",
        },
        zIndex: 50,
      }}
    >
      <div
        className={`flex w-full max-w-3xl flex-col gap-4 rounded-md bg-onBkg pb-5 pt-2 font-medium`}
      >
        <div className="mx-auto h-1.5 w-10 rounded-lg bg-slate-300 dark:bg-slate-700"></div>
        <div className={`text-typography`}>{open && children}</div>
      </div>
    </SwipeableDrawer>
  );
}
