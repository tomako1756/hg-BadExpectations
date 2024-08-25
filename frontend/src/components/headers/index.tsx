import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import headerLogo from "../../assets/headerLogo.svg";

const Header: React.FC = () => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname !== "/sign" && <div style={{
                    display: "flex",
                    width: 393,
                    height: 124,
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    // backgroundColor: "#F0F0F0",
                }}>
                    <div style={{display: "flex", flexDirection: "column", width: 304, height: 78}}>
                        <img src={headerLogo} alt="Logo" style={{width: 98, height: 28, marginLeft: 5}}/>
                        <div style={{width: 1, height: 25}}></div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: "100%",
                            height: 49,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: '20px',
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 161,
                                height: 24
                            }}>
                                <a href="/home" style={{
                                    textDecoration: 'none',
                                    color: location.pathname == "/home" ? '#ffa800' : '#333',
                                    fontWeight: '800',
                                    fontSize: 15
                                }}>
                                    홈
                                </a>
                                <a href="/search" style={{
                                    textDecoration: 'none',
                                    color: location.pathname == "/search" ? '#ffa800' : '#333',
                                    fontWeight: '800',
                                    fontSize: 15
                                }}>
                                    검색
                                </a>
                                <a href="/settings" style={{
                                    textDecoration: 'none',
                                    color: location.pathname == "/settings" ? '#ffa800' : '#333',
                                    fontWeight: '800',
                                    fontSize: 15
                                }}>
                                    설정
                                </a>
                            </div>
                            <a href="/profile">
                                <img src="https://i.ibb.co/BcXcg8j/Vector.png" alt="Navigation"
                                     style={{width: 23, height: 23}}/>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Header;
