import { useState } from 'react'
import menu from '../../assets/hamburger-menu.png'
import DotMenu from '../3DotMenu/DotMenu'
import SearchBox from '../search/SearchBox'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [openSearchBox, setOpenSearchBox] = useState<boolean>(false)

    return (
        <>
            <div className='bg-orange-500 p-1'>
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <img src={menu} alt="menu" className='w-6 h-6 cursor-pointer mt-1' />
                        <div className='ml-2.5' style={{ lineHeight: '1' }}>
                            <h6 className='m-0 text-white'>Hacker News</h6>
                            <p className='text-sm font-thin m-0 text-white'>Frontpage</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img className='w-5 h-5 cursor-pointer' src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="search--v1" onClick={() => setOpenSearchBox(!openSearchBox)} />
                        <img className='w-5 h-5 cursor-pointer' src="https://img.icons8.com/ios-glyphs/30/ffffff/refresh--v1.png" alt="refresh--v1" />
                        <img className='w-5 h-5 cursor-pointer' src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-2.png" alt="menu-2" onClick={() => setOpenMenu(!openMenu)} />
                    </div>
                </div>
            </div>
            {
                openSearchBox &&
                <div>
                    <SearchBox />
                </div>
            }
            {
                openMenu &&
                <div className='grid grid-cols-2 z-10 absolute right-0 sm:relative sm:right-auto'>
                    <DotMenu />
                </div>
            }
        </>
    )
}
