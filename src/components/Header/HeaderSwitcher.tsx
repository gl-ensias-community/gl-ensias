"use client";
import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import MemberHeader from "./MemberHeader";
import VisitorHeader from "./VisitorHeader";

const HeaderSwitcher = () => {
  const [sticky, setSticky] = useState(false);
  const [userRole, setUserRole] = useState("visitor"); // By default, the user is a visitor

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    setUserRole("visitor"); // TODO: Get user role from the server
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      {userRole === "visitor" && <VisitorHeader sticky={sticky} />}
      {userRole === "member" && <MemberHeader sticky={sticky} />}
      {userRole === "admin" && <AdminHeader sticky={sticky} />}
    </>
  );
};

export default HeaderSwitcher;
