import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Gnb.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faClock, faCommentDots, } from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH, } from '@fortawesome/free-solid-svg-icons';
// import {faStar} from '@fortawesome/free-brands-svg-icons';

export function Gnb() {

    return(
        <div className={classes.Gnb_header}>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span class="fs-4">제목 없음</span>
                    </a>
                    
                    
                    <ul class="nav nav-pills">
                        <a href="#" class="nav-link" style={{color: '#000000'}}>공유</a>
                        <li class="nav-item"><a href="#" class="nav-link"><FontAwesomeIcon icon={faCommentDots} style={{color: "#000000",}} /></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><FontAwesomeIcon icon={faClock} style={{color: "#000000",}} /></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><FontAwesomeIcon icon={faStar} style={{color: "#000000",}} /></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><FontAwesomeIcon icon={faEllipsisH} style={{color: "#000000",}} /></a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}