"use client";
import { logo } from "@/assets";
import { DownArrow, Flag } from "@/assets/svg/Icon";
import { navbarData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Navbar = () => {
  const { navLinks } = navbarData;

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const list = (
    <div style={{ width: 300 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Option " />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Option 2" />
        </ListItem>
        {/* Add more options as needed */}
      </List>
    </div>
  );
  return (
    <div
      className="fixed w-full top-0 z-40 bg-white"
      style={{ boxShadow: "0px 2px 50px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="container py-[10px] flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>

        <ul className="xl:flex 2xl:gap-[30px] gap-[15px] items-center hidden">
          {navLinks?.map((item, i) => (
            <li key={i}>
              <Link
                className={` text-[#232323] ${
                  pathname === item.href
                    ? "text-[#4161C8] font-semibold"
                    : "text-[#232323] font-medium"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          {/* <button className="hidden xl:block border-[1px] border-[#4161C8] py-3 2xl:px-[30px] lg:px-[20px] text-[#4161C8] font-bold lg:text-lg rounded-2xl 2xl:rounded-3xl">
            Get Appointment
          </button> */}

          <button className="xl:flex hidden gap-2 items-center">
            <Flag />
            <DownArrow />
          </button>

          <button onClick={toggleDrawer(true)} className="xl:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        style={{ width: "80%" }}
      >
        {list}
      </Drawer>
    </div>
  );
};

export default Navbar;
