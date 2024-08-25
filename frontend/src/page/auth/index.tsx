import React from "react";
import * as S from "./style";
import Polygon from "../../assets/Polygon 2.png";
import logo from "../../assets/logo.svg";


const Auth = ()=>{
    return(
        <S.auth>
            <S.main>
                <S.loginText>
                    <h2>로그인 하기</h2>
                </S.loginText>
                <S.buttonMain>
                    <S.userButton>
                        <p>사용자</p>
                    </S.userButton>
                    <S.userButton>
                    <p>여행 진행자</p>
                    </S.userButton>
                </S.buttonMain>
                
                <img src={Polygon}></img>
            </S.main>
            <S.logoMain>
                <S.logo src={logo}>

                </S.logo>
            </S.logoMain>
            
        </S.auth>
    )
}
export default Auth;