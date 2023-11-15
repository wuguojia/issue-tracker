import Link from "next/link";
import {AiFillBug} from "react-icons/ai";

const NavBar = () => {
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
                        className='text-zinc-500 hover:text-zinc-800 transition-colors'
                    >{name}</Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;
