import React from 'react';
import classNames from 'classnames';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuClick } from '../../redux/actions';

function HeaderMenu({ pageNumber, menuClick, goToPage }) {
  const [menuState, setMenuState] = useState(false),
    [openClick, setOpenClick] = useState(true),
    [closeClick, setCloseClick] = useState(false);

  const navRef = useRef(null),
    prevNumber = useRef(0);

  const dispatch = useDispatch();

  const handleOutsideMenuClick = useCallback(
    (e) => {
      var path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(navRef.current)) {
        setOpenClick(true);
        setMenuState(false);
      }
    },
    [setOpenClick],
  );

  useEffect(() => {
    if (pageNumber === 4 && prevNumber.current === 3 && !menuClick) {
      setCloseClick(true);
      setMenuState(true);
      setOpenClick(false);
    } else if (pageNumber === 3 && prevNumber.current === 4 && !menuClick) {
      setCloseClick(false);
      setMenuState(false);
      setOpenClick(true);
    }

    document.body.addEventListener('click', handleOutsideMenuClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideMenuClick);
      prevNumber.current = pageNumber;
    };
  }, [handleOutsideMenuClick, pageNumber, menuClick, dispatch]);

  const onMenuClick = () => {
    if (!(openClick || closeClick)) {
      setCloseClick(true);
      dispatch(setMenuClick(true));
    } else {
      if (openClick) {
        dispatch(setMenuClick(true));
        setCloseClick(true);
        setOpenClick(false);
      } else {
        dispatch(setMenuClick(false));
        setCloseClick(false);
        setOpenClick(true);
      }
    }
    setMenuState(!menuState);
  };

  return (
    <nav className="front-nav" ref={navRef}>
      <button
        className={classNames('menu-open opposite-svg', {
          'menu-fade-in': openClick && !menuState,
          'menu-fade-out': closeClick && menuState,
        })}
        onClick={onMenuClick}></button>
      <ul
        className={classNames('nav-list', {
          'nav-collapsed': menuState & closeClick,
          'nav-closed': !menuState & openClick,
        })}>
        <li
          className={classNames({ 'menu-clicked': pageNumber === 1 })}
          onClick={() => goToPage(1)}>
          <div>
            Home
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageNumber === 2 })}
          onClick={() => goToPage(2)}>
          <div>
            About
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageNumber === 3 })}
          onClick={() => goToPage(3)}>
          <div>
            Portfolio
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageNumber === 4 })}
          onClick={() => goToPage(4)}>
          <div>
            Contact
            <div></div>
            <div></div>
          </div>
        </li>
      </ul>

      <button
        className={classNames('menu-close', {
          'nav-collapsed': menuState & closeClick,
          'nav-closed': !menuState & openClick,
        })}
        onClick={onMenuClick}></button>
    </nav>
  );
}

export default HeaderMenu;
