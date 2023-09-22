import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Gnb.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faClock, faCommentDots, } from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH, } from '@fortawesome/free-solid-svg-icons';
// import {faStar} from '@fortawesome/free-brands-svg-icons';

export function Gnb() {

    const txtColor = '#000000';

    const gnbMenu = [
        {value: '공유', type: 'txt'},
        {value: faCommentDots, type: 'icon'},
        {value: faClock, type: 'icon'},
        {value: faStar, type: 'icon'},
        {value: faEllipsisH, type: 'icon'},
    ];

    return(
        <div className={classes.Gnb_header}>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
                    <div></div>
                    <ul className={`${'nav nav-pills'}`}>
                        {gnbMenu.map((item, index) => (
                            <li className={`${'nav-item'}`} key={index}>
                                <a href='#' className={`${'nav-link'}`} style={{color: txtColor,}}>
                                    {item.type !== 'txt' ?  (<FontAwesomeIcon icon={item.value} style={{color: txtColor,}} />)  : (item.value)}
                                </a>
                            </li>   
                        ))}
                    </ul>

                </header>
            </div>
        </div>
    )
}