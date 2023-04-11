/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useWindowSize } from "app/hooks";
import Burger from "components/Burger/Burger";
import { INavigationProps } from "core/interfaces/props/index";
import style from "./style.module.scss";

type Anchor = "top" | "left" | "bottom" | "right";

const AsideBar: FC<INavigationProps> = ({ list }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const size = useWindowSize();

  return (
    <>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <ul className={style.list}>
              {list.map(({ text, path }, index) => {
                return (
                  <li key={index + text + 'AsideBar'} className={style.listItem}>
                    <Link href={path}>{text}</Link>
                  </li>
                );
              })}
              <hr className={style.asideLine}></hr>
              <div className={style.containerAuth}>
                <Link href="/signin" className={style.listItem}>
                  Sign in
                </Link>
                <Link href="join" className={style.listItem}>
                  Join
                </Link>
              </div>

            </ul>
          </Drawer>
        </React.Fragment>
      ))
      }
      {size.width as number < 940 && <div className={style.burgerContainer} onClick={toggleDrawer("left", true)}>
        <Burger />
      </div>}

    </>
  );
};

export default AsideBar;
