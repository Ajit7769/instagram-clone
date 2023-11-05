import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { MdPostAdd, MdOutlineSaveAlt } from 'react-icons/md'
import { TbUserPentagon } from 'react-icons/tb'

const Profile = () => {
    return (
        <>
            <div className='ml-[20%] w-[80%] h-[100vh]'>
                <div className='flex'>
                    <div className='mt-16 ml-[10%] w-[30%]'>
                        <img className='rounded-full w-36 h-36' src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="profile" />
                    </div>
                    <div className='w-[70%]'>
                        <div className='flex mt-8'>
                            <div >
                                <h1 className='font-medium'>ajit_sarwade_official</h1>
                            </div>
                            <div className='ml-2 '>
                                <button className='p-1 pl-3 pr-3 hover:bg-gray-200 bg-gray-100 rounded-lg font-medium text-sm'>Edit Profile</button>
                            </div>
                            <div className='ml-2'>
                                <button className='p-1 pl-3 pr-3 hover:bg-gray-200 bg-gray-100 rounded-lg font-medium text-sm'>View Archive</button>
                            </div>
                            <div >
                                <h1 className=' text-xl mt-1 ml-1'><IoMdSettings /></h1>
                            </div>
                        </div>
                        <div>
                            <ol className='flex justify-between w-[70%] mt-3'>
                                <li>31 Post</li>
                                <li>682 Followers</li>
                                <li>477 Following</li>
                            </ol>
                        </div>
                        <div className='mt-3 text-left font-normal text-sm'>
                            𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫💻
                            <br />
                            ⚜️|| अंत: आस्ति प्रारंभ: ||♻️
                            <br />
                            सर्वस्व #राधेकृष्ण ♥
                            <br />
                            😋𝔻𝕆𝔹"" 7️⃣/𝐌𝐚𝐫𝐜𝐡
                            <br />
                            𝐏𝐮𝐧𝐞📍
                            <br />
                            𝙱𝚎𝚕𝚒𝚎𝚟𝚎 𝚒𝚗 𝚔𝚊𝚛𝚖𝚊😇🙌
                            <br />
                            🤗𝕭𝖔𝖗𝖓 𝖙𝖔 𝖊𝖝𝖕𝖗𝖊𝖘𝖘 😎 𝕹𝖔𝖙 𝖙𝖔 𝖎𝖒𝖕𝖗𝖊𝖘𝖘💫♥️
                        </div>
                    </div>
                </div>
                <div className='flex justify-evenly mt-7 ml-[10%] items-center'>
                    <div className=' rounded-full'>
                        <img className='border border-gray-300 rounded-full w-16 h-16 p-[3px]' src="https://img.freepik.com/premium-photo/your-heart-will-lead-you-amazing-things-closeup-shot-unrecognizable-couple-making-heart-shape-with-their-hands-outdoors_590464-7846.jpg" alt="Hightlight..." />
                        <div>
                            <p>Love ♥</p>
                        </div>
                    </div>
                    {/* Only For loop */}
                    <div className=' rounded-full'>
                        <img className='border border-gray-300 rounded-full w-16 h-16 p-[3px]' src="https://img.freepik.com/premium-photo/your-heart-will-lead-you-amazing-things-closeup-shot-unrecognizable-couple-making-heart-shape-with-their-hands-outdoors_590464-7846.jpg" alt="Hightlight..." />
                        <div>
                            <p>Love ♥</p>
                        </div>
                    </div>
                    <div className=' rounded-full'>
                        <img className='border border-gray-300 rounded-full w-16 h-16 p-[3px]' src="https://img.freepik.com/premium-photo/your-heart-will-lead-you-amazing-things-closeup-shot-unrecognizable-couple-making-heart-shape-with-their-hands-outdoors_590464-7846.jpg" alt="Hightlight..." />
                        <div>
                            <p>Love ♥</p>
                        </div>
                    </div>
                    <div className=' rounded-full'>
                        <img className='border border-gray-300 rounded-full w-16 h-16 p-[3px]' src="https://img.freepik.com/premium-photo/your-heart-will-lead-you-amazing-things-closeup-shot-unrecognizable-couple-making-heart-shape-with-their-hands-outdoors_590464-7846.jpg" alt="Hightlight..." />
                        <div>
                            <p>Love ♥</p>
                        </div>
                    </div>
                    <div className=' rounded-full'>
                        <img className='border border-gray-300 rounded-full w-16 h-16 p-[3px]' src="https://img.freepik.com/premium-photo/your-heart-will-lead-you-amazing-things-closeup-shot-unrecognizable-couple-making-heart-shape-with-their-hands-outdoors_590464-7846.jpg" alt="Hightlight..." />
                        <div>
                            <p>Love ♥</p>
                        </div>
                    </div>
                    {/* end Loope */}
                </div>
                <hr className='mt-5 text-gray-800 font-extrabold' />
                <div className='flex justify-center ml-3 mt-1'>
                    <div className='flex ml-2'>
                        <MdPostAdd className='mt-1' />
                        <button className='p-1 font-bold text-sm'>POSTS</button>
                    </div>

                    <div className='flex ml-4'>
                        <MdOutlineSaveAlt className='mt-1' />
                        <button className='p-1   font-bold text-sm'>SAVE</button>
                    </div>
                    <div className='flex ml-4'>
                        <TbUserPentagon className='mt-1' />
                        <button className='p-1   font-bold text-sm'>TAGGED</button>
                    </div>

                </div>
                <div className='rounded-sm flex justify-evenly mt-3'>
                    <div>
                        <img className='w-52 h-52' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Post....." />
        
                    </div>
                    <div>
                        <img className='w-52 h-52' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Post....." />
        
                    </div>
                    <div>
                        <img className='w-52 h-52' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Post....." />
        
                    </div>
    
                </div>
            </div>
        </>
    )
}

export default Profile
