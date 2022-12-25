import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'

export const ContactCardData = [
    {
        id : 1,
        icon : <MdOutlineMail />,
        title : 'Email',
        ownerId : 'ssarwar459@gmail.com',
        link : 'mailto:ssarwar459@gmail.com'
    },
    {
        id : 2,
        icon : <RiMessengerLine />,
        title : 'Messenger',
        ownerId : 'Md Sarwar Ahmed',
        link : 'https://m.me/SGSarWaRz'
    },
    {
        id : 3,
        icon : <RiWhatsappLine />,
        title : 'WhatApp',
        ownerId : '+8801726239708',
        link : 'https://api.whatsapp.com/send?phone=+8801726239708'
    },
] 