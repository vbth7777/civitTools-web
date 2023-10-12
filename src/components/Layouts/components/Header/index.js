import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss';
const cx = className.bind(styles);
function Header() {
  const [input, setInput] = useState('');
  const btnSearch = useRef();
  const paths = [
    '/',
    '/tools',
  ]
  const handleClear = () => {
    setInput('');
  }
  const isActive = function(path) {
    path = path.split('/')[1];
    const pathname = window.location.pathname.split('/')[1];
    return pathname === path ? 'true' : false;
  }
  const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <header className={cx('header')}>
      {/* <img className={cx('logo')} src='' alt='logo' /> */}
      <ul className={cx('nav')}>
        {/* <li active={isActive('')}><Link to='/' >Home</Link></li> */}
        {/* <li active={isActive('tools')} ><Link to='/tools' >Tools</Link></li> */}
        {paths.map((path, index) => {
          return (
            <li key={index} active={isActive(path)} >
              <Link to={path} >{path === '/' ? 'Home' : capitalize(path.split('/')[1])}</Link>
            </li>
          )
        })}


      </ul>
      <div className={cx('search')}>
        <input
          type='text'
          placeholder='Search'
          value={input}
          onKeyDown={(e) => { if (e.key === 'Enter') btnSearch.current.click() }}
          onChange={(e) => setInput(e.target.value)} />
        <button className={cx('clear-btn')} onClick={handleClear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <button className={cx('search-btn')} onClick={handleClear} >
          <Link
            to={input ? `/search?query=${input}` : '/'}
            state={{ query: input }}
            ref={btnSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          {/* <a href={input ? `/search?query=${input}` : '/'} ref={btnSearch}> */}
          {/*   <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {/* </a> */}
        </button>
      </div>
    </header >
  )
}
export default Header;
