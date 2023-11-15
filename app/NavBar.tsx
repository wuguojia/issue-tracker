'use client'
import classnames from "classnames";
import Link from "next/link";
import {AiFillBug} from "react-icons/ai";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        {link: '/', name: 'Dashboard'},
        {link: '/issues', name: 'Issues'},
    ]
    return (
        <nav className='flex space-x-6 border-b px-5 mb-6 h-14 items-center'>
            <Link href='/'><AiFillBug/></Link>
            <ul className='flex space-x-6'>
                {links.map(({link, name}) =>
                    <Link
                        key={link}
                        href={link}
                        className={classnames({
                            'text-zinc-900': link === currentPath,
                            'text-zinc-500': link !== currentPath,
                            'hover:text-zinc-900 transition-colors': true
                        })}
                    >{name}</Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;
