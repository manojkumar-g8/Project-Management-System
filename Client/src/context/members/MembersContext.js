import React, { createContext, useEffect, useState } from "react";

export const MemberDatas = createContext();

const MembersContext = ({ children }) => {
    // login member (Admin || Project manager || developer)
    const [loginMember, setLoginMember] = useState("");

    // store Admin email and password

    const [adminLogin, setAdminLogin] = useState({
        email: "",
        password: "",
    });

    return (
        <MemberDatas.Provider
            value={{ loginMember, setLoginMember, adminLogin, setAdminLogin }}
        >
            {children}
        </MemberDatas.Provider>
    );
};

export default MembersContext;
