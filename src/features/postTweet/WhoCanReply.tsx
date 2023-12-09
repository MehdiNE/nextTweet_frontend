import { Button } from "@/components/Button";
import { Popover } from "@mui/material";
import React, { useState } from "react";
import { FaEarthEurope } from "react-icons/fa6";
import {
  MdOutlinePerson,
  MdOutlineVerified,
  MdAlternateEmail,
  MdCheck,
} from "react-icons/md";

interface IItem {
  id: number;
  title: string;
  listTitle: string;
  icon: React.ReactNode;
}

const items = [
  {
    id: 0,
    title: "Everyone can reply",
    listTitle: "Everyone",
    icon: <FaEarthEurope />,
  },
  {
    id: 1,
    title: "Accounts you follow can reply",
    listTitle: "Accounts you follow",
    icon: <MdOutlinePerson />,
  },
  {
    id: 2,
    title: "Only Verified accounts can reply",
    listTitle: "Verified accounts",
    icon: <MdOutlineVerified />,
  },
  {
    id: 3,
    title: "Only accounts you mention can reply",
    listTitle: "Only accounts you mention",
    icon: <MdAlternateEmail />,
  },
];

function WhoCanReply() {
  const [selected, setSelected] = useState<IItem>(items[0]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  function handleSelectOption(item: IItem) {
    setSelected(item);
    handleClose();
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="mb-2 ml-14">
      <Button
        aria-describedby={id}
        onClick={handleClick}
        variant="link"
        size="xs2"
        className="w-auto text-sm p-1 text-sky-500 px-2 h-6"
      >
        <div className="mr-1 px-1 text-lg">{selected.icon}</div>{" "}
        {selected.title}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPopover-paper": {
            borderRadius: 4,
          },
        }}
      >
        <div className="w-80 rounded-2xl">
          <div className="p-3">
            <h5 className="font-semibold">Who can reply?</h5>
            <p className="text-sm text-slate-600">
              Choose who can reply to this post. Anyone mentioned can always
              reply.
            </p>
          </div>

          <div className="pb-1">
            {items.map((item) => (
              <div
                onClick={() => handleSelectOption(item)}
                key={item.title}
                className="flex p-3.5 cursor-pointer py-3 items-center gap-3 text-sm font-semibold hover:bg-slate-100"
              >
                <div className="flex items-center justify-center text-white text-xl bg-sky-500 rounded-full w-10 h-10">
                  {item.icon}
                </div>

                <p>{item.listTitle}</p>

                {item.id === selected.id && (
                  <div className="ml-auto pr-2">
                    <MdCheck className="text-lg text-sky-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default WhoCanReply;
