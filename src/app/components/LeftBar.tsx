import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id: 7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id: 8,
        name: "Premium",
        link: "/",
        icon: "logo.svg",
    },
    {
        id: 9,
        name: "Profile",
        link: "/",
        icon: "profile.svg",
    },
    {
        id: 10,
        name: "More",
        link: "/",
        icon: "more.svg",
    },
];


const LeftBar = () => {
    return (
        <div className='h-screen flex flex-col  justify-between sticky top-1 '  >

            {/* Logo Menu  */}
            <div className=' flex flex-col text-lg gap-4 items-center xxl:items-start xl:items-start lg:items-start'>
                <Link href={"/"} className='hover:bg-[#181818] rounded-full p-2'>
                    <Image src={'icons/logo.svg'} alt='logo' width={24} height={24} className='l' />
                </Link>
            </div>


            {/* Menu List */}
            <div className='flex flex-col'>
                {menuList.map((item) => (
                    <Link href={item.link} key={item.id}
                        className="p-2  hover:bg-[#181818] rounded-full flex items-center   gap-2 ">
                        <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24}  />
                        <span className='hidden xxl:inline xl:inline lg:inline'>{item.name}</span>
                    </Link>
                ))}
            </div>

            {/* button*/}
                <Link href={'/'} className='bg-white text-black rounded-full  w-12 h-12  
                flex items-center justify-center xxl:hidden xl:hidden lg:hidden '>
                <Image src='icons/post.svg' alt="new post" width={24}  height={24}/>
                </Link>
                <Link href={'/'} className='bg-white text-black rounded-full font-bold py-2 px-20 hidden xxl:block  lg:block '>
               Post
                </Link>
    

            {/* { user section} */}
            <div className=''>user</div>
        </div>
    )
}

export default LeftBar