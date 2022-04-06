import React from 'react'
import {FaAward, FaUserSecret} from 'react-icons/fa';
import {RiFolderOpenFill} from 'react-icons/ri'

const CardDetails = [
    {
        id: 1,
        title:"Experience",
        img: <FaAward />,
        details: '3+ Years Working'
    },
    {
        id: 2,
        title:"Clients",
        img: <FaUserSecret />,
        details: '100+ Worldwide'
    },
    {
        id: 3,
        title:"Projects",
        img: <RiFolderOpenFill />,
        details: '50+ Completed'
    },
]

export default CardDetails