import React, {useEffect, useRef, useState} from 'react';
import {ItemNavigation} from "../../pages";
import style from "../../styles/Navigate.module.scss";

type NavigationItemProps = {
    value: ItemNavigation;
}

function NavigationItem({value}: NavigationItemProps) {

    return (
        <>
            <div className="nav">
                <div className="wrap">
                    <img src={value.pathImg} className="photo"/>
                    <div className="content">{value.content}</div>
                </div>
            </div>
            <style jsx>
                {`
                  .nav {
                    width: 400px;
                    height: 400px;
                    position: absolute;
                    transform: translate(-50%, -10%) rotate(${value.style.rotate});
                    left: 50%;
                  }

                  .wrap {
                    position: relative;
                  }

                  .photo {
                    position: relative;
                    left: 50%;
                    transition: all 0.5s ease-out;
                    cursor: pointer;
                    transform: translate(-50%, -100%) rotate(-${value.style.rotate});
                  }
                  .photo:hover {
                    transform: translate(-50%, -100%) rotate(-${value.style.rotate}) scale(1.1);
                  }

                  .content {
                    opacity: 0;
                    display: inline-block;
                    position: absolute;
                    transition: all 0.5s ease-out;
                    font-family: 'Roboto-Bold';
                    font-size: 18px;
                    line-height: 22px;
                    color: #223867;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    transform: ${value.style.translate} rotate(-${value.style.rotate});
                  }

                  .photo:hover ~ .content {
                    opacity: 1;
                  }
                `}
            </style>
        </>


    );
}

export default NavigationItem;