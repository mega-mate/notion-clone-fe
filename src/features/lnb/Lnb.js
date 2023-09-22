import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faGear, faCirclePlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import {faClock,} from '@fortawesome/free-regular-svg-icons';
import classes from './Lnb.module.css';


export function Lnb() {

    const colorObj = {
        black_color: '#000000',
        grey_color: '#9e9a9a',
        back_ground: '#e0e0e0',
    }
    // 마우스 호버 데이터
    const hover01 = [false, false, false, false];
    const [hoverList, setHoverList] = useState(hover01);
    const eventHover = (e) => {
        
        let idx = e.target.value;
        let list = hover01;

        list.splice(idx, 1, !list[idx]);

        setHoverList(list);
    }

    // 추후 메뉴 구획 컴포넌트화 예정
    const lnb01 = [
        {icon: <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: colorObj.grey_color,}} />, name: '검색' },
        {icon: <FontAwesomeIcon icon={faClock} style={{color: colorObj.grey_color,}} />, name: '업데이트' },
        {icon: <FontAwesomeIcon icon={faGear} style={{color: colorObj.grey_color,}} />, name: '설정과 멤버' },
        {icon: <FontAwesomeIcon icon={faCirclePlus} style={{color: colorObj.grey_color,}} />, name: '새 페이지' },
    ];

    return(
        <div>
            <div class="flex-shrink-0" style={{ width: '280px' }}>
                <ul class="list-unstyled ps-0">
                    <li className={classes.fir_menu}>
                        <div className={`${'d-flex justify-content-between flex-grow-1'}`}>
                            <button className={`${'btn'}`} style={{ color: colorObj.black_color, }}>USER의 <strong>NOTION</strong> </button>
                        </div>
                    </li>
                </ul>
                <ul class="list-unstyled ps-0">
                    {/* 첫 번째 메뉴 구역 lnb01 */}
                    {lnb01.map((item, index) => (
                        <li className={classes.fir_menu} key={index} style={{ width: '250px' }}>
                            <div className={`${'d-flex justify-content-between flex-grow-1'}`}>
                                <button className={`${'btn'}`} style={{ color: colorObj.grey_color, }}
                                    onMouseLeave={() => { setHoverList(hover01) }} onMouseOver={eventHover} value={index}>
                                    {item.icon} {item.name}
                                </button>
                                {hoverList[index] ? (<div className={`${'p-1'}`}><FontAwesomeIcon icon={faCheck} /></div>) : ''}
                            </div>
                        </li>
                    ))}
                    <li className={`${'border-top my-3'}`}></li>
                    {/* 두 번째 메뉴 구역 */}
                    <div>

                    </div>

                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>
                        <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="border-top my-3"></li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}