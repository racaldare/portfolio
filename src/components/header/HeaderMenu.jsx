import React from 'react';
import classNames from 'classnames';
import { useRef, useCallback, useEffect } from 'react';

function HeaderMenu({ pageSettings, goToPage, setPageSettings }) {
  const navRef = useRef(null);

  const handleOutsideMenuClick = useCallback(
    (e) => {
      var path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(navRef.current) && !['a', 'button'].includes(e.target.nameTage)) {
        setPageSettings({ ...pageSettings, isMenuClicked: false });
      }
    }, // eslint-disable-next-line
    [pageSettings.current, pageSettings.prev],
  );

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideMenuClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideMenuClick);
    };
    // eslint-disable-next-line
  }, [handleOutsideMenuClick, pageSettings.current]);

  const onMenuClick = () => {
    setPageSettings({ ...pageSettings, isMenuClicked: !pageSettings.isMenuClicked });
  };

  return (
    <nav className="front-nav" ref={navRef}>
      <button
        className={classNames('menu-open opposite-svg', {
          'menu-fade-in': !pageSettings.isMenuClicked,
          'menu-fade-out': pageSettings.isMenuClicked,
        })}
        onClick={onMenuClick}></button>
      <ul
        className={classNames('nav-list', {
          'nav-collapsed': pageSettings.isMenuClicked,
          'nav-closed': !pageSettings.isMenuClicked,
        })}>
        <li
          className={classNames({ 'menu-clicked': pageSettings.current === 1 })}
          onClick={() => goToPage(1)}>
          <div>
            Home
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageSettings.current === 2 })}
          onClick={() => goToPage(2)}>
          <div>
            About
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageSettings.current === 3 })}
          onClick={() => goToPage(3)}>
          <div>
            Portfolio
            <div></div>
            <div></div>
          </div>
        </li>
        <li
          className={classNames({ 'menu-clicked': pageSettings.current === 4 })}
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
          'nav-collapsed': pageSettings.isMenuClicked,
          'nav-closed': !pageSettings.isMenuClicked,
        })}
        onClick={onMenuClick}></button>
    </nav>
  );
}

export default HeaderMenu;
