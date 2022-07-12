import React from 'react';
import {ItemNavigation} from "../../pages";
import style from "../../styles/Navigate.module.scss";
import NavigationItem from "./NavigationItem";
import {symbol} from "prop-types";


type NavigationProps = {
    items: ItemNavigation[];
}

export default function Navigation({items}: NavigationProps) {
    return (
        <div className={style.container}>
            {items.map((item) => {
                return <NavigationItem key={item.id} value={item}/>
            })}
            <img src="/adult.png" className={style.mainPhoto}/>
        </div>
    );
}

