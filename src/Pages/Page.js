import {AiOutlineHome , AiFillHome , AiOutlineSearch , AiOutlineHeart , AiFillHeart , AiOutlinePlusSquare , AiFillPlusSquare} from 'react-icons/ai'
import {MdOutlineExplore , MdExplore } from 'react-icons/md'
import {FaRegFileVideo , FaFileVideo } from 'react-icons/fa'
import {RiMessengerFill , RiMessengerLine} from 'react-icons/ri'


export const Page = [
    {
        title : "Home",
        icon : <AiOutlineHome />,
        active : <AiFillHome />,
        link : "/"
    },
    {
        title : "Search",
        icon : <AiOutlineSearch />,
        active : <AiOutlineSearch />,
        link : "/search"
    },
    {
        title : "Explore",
        icon : <MdOutlineExplore />,
        active : <MdExplore />,
        link : "/explore"
    },
    {
        title : "Reels",
        icon : <FaRegFileVideo/>,
        active : <FaFileVideo />,
        link : "/reels"
    },
    {
        title : "Messages",
        icon : <RiMessengerLine />,
        active : <RiMessengerFill />,
        link : "/messages"
    },
    {
        title : "Notification",
        icon : <AiOutlineHeart />,
        active : <AiFillHeart />,
        link : "/notification"
    },
    {
        title : "Create",
        icon : <AiOutlinePlusSquare />,
        active : <AiFillPlusSquare />,
        link : "/create"
    },
    {
        title : "Profile",
        icon : <AiOutlineHeart />,
        active : <AiFillHeart />,
        link : "/profile"
    }
]