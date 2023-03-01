import React from 'react';

// Assets | ICONS :
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsFillCreditCardFill } from "react-icons/bs";


// CSS :
import "./Cards.scss";




let tempCardsData = [
    {
        icon: FiUsers,
        static: 80,
        value: 130,
        name: "Register Users"
    },
    {
        icon: AiOutlineFileProtect,
        static: -30,
        value: 0.350,
        name: "Total Products"
    },
    {
        icon: HiOutlineShoppingCart,
        static: 40,
        value: 4.720,
        name: "Item Sales"
    },
    {
        icon: BsFillCreditCardFill,
        static: 60,
        value: 76,
        name: "New Orders"
    },
]
const Cards = () => {
    return (
        <>
            <div className="cardsContainer">
                {
                    tempCardsData.map((data, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="bottomLine" />
                                <div className="iconBox">
                                    <data.icon className='icon' /> <div className="counts" style={data.static < 0 ? { backgroundColor: "red" } : {}}>{data.static}% {data.static < 0 ? <RiArrowDownSLine /> : <RiArrowUpSLine />}</div>
                                </div>
                                <div className="detials">
                                    <div className="value">{data.value}</div>
                                    <div className="title">{data.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards