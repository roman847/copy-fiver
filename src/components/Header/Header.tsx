import { FC, useEffect, useState } from "react";
import BlockAuthBtn from "components/BlockAuthBtn/BlockAuthBtn";
import Logo from "components/Logo/Logo";
import HeaderNav from "components/HeaderNav/HeaderNav";
import ModalAuth from "components/ModalAuth/ModalAuth";
import { Context } from "Context/context";
import { TypesModalAuth } from "core/enums/index";
import AsideBar from "components/AsideBar/AsideBar";
import SubMenu from "components/Header/components/SubMenu/SubMenu";
import style from "./style.module.scss";

const Header: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalsType, setModalsType] = useState<TypesModalAuth>(
    TypesModalAuth.sign
  );
  const [isActive, setIsActive] = useState(false);
  const [isSubMenuOpen, setSubMenuopen] = useState(false);

  const handleClose = () => setOpenModal(false);

  const navlist = [
    { path: "/business", text: "Business" },
    { path: "/explore", text: "Explore" },
    { path: "/become", text: "Become a Seller" },
  ];

  const isScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
    window.scrollY > 100 ? setSubMenuopen(true) : setSubMenuopen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isScroll);

    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  }, []);

  const handleSign = () => {
    setOpenModal(true);
    setModalsType(TypesModalAuth.sign);
  };

  const handleJoin = () => {
    setOpenModal(true);
    setModalsType(TypesModalAuth.join);
  };
  return (
    <Context.Provider value={{ isActive }}>
      <>
        <div className={isActive ? style.wrapperActive : style.wrapper}>
          <div className={isActive ? style.containerActive : style.container}>
            <ModalAuth
              type={modalsType}
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
            />
            <AsideBar list={navlist} />
            <Logo />
            <HeaderNav list={navlist} />
            <BlockAuthBtn
              onClickClose={handleClose}
              onclickSign={handleSign}
              onClickJoin={handleJoin}
            />
          </div>
          {isSubMenuOpen && <SubMenu />}
        </div>
      </>
    </Context.Provider>
  );
};

export default Header;
