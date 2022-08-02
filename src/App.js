import { Redirect, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import './assets/sass/animations.sass';
import { AboutPage, MainPage } from './pages';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import removeAllHTMLStyles from './utils/removeAllStyles';
import { useRef, useEffect } from 'react';
import { useState } from 'react';

function App() {
  const firstFrontNumberRef = useRef(null),
    secondFrontNumberRef = useRef(null),
    homePageMovingBlock = useRef(null),
    [pageSettings, setPageSettings] = useState({
      current: 1,
      prev: 0,
      isMenuClicked: false,
    });

  useEffect(() => {
    if (homePageMovingBlock.current !== null) {
      if (pageSettings.prev === 0) {
        homePageMovingBlock.current.classList.add('main-start');
        firstFrontNumberRef.current.classList.add('number-out-start');
        secondFrontNumberRef.current.classList.add('number-in-start');
      }
      void homePageMovingBlock.current.offsetWidth;

      homePageMovingBlock.current.classList.add('slide-in-main');
    }

    // If it does not work, move out of useEffect hook.
    global.screen.orientation.lock('portrait').catch(() => {
      console.log('I got you Captain! No orientation on this device :)');
    });

    return () => {};
  });
  console.log(pageSettings);

  const goToPage = (pNumber) => {
    if (pNumber < pageSettings.current) {
      if (homePageMovingBlock.current !== null && pageSettings.current !== pNumber) {
        homePageMovingBlock.current.classList.remove('main-start');
        void homePageMovingBlock.current.offsetWidth;
        homePageMovingBlock.current.classList.add('slide-up-main');

        setTimeout(() => {
          setPageSettings({ current: pNumber, prev: pageSettings.current, isMenuClicked: true });

          if (firstFrontNumberRef.current !== null) {
            removeAllHTMLStyles(firstFrontNumberRef);
            removeAllHTMLStyles(secondFrontNumberRef);

            void firstFrontNumberRef.current.offsetWidth;
            void firstFrontNumberRef.current.offsetWidth;

            firstFrontNumberRef.current.classList.add('number-out-down');
            secondFrontNumberRef.current.classList.add('number-in-down');
          }
        }, 500);
      }
    } else {
      if (homePageMovingBlock.current !== null && pageSettings.current !== pNumber) {
        homePageMovingBlock.current.classList.remove('main-start');
        void homePageMovingBlock.current.offsetWidth;
        homePageMovingBlock.current.classList.add('slide-down-main');

        setTimeout(() => {
          setPageSettings({ current: pNumber, prev: pageSettings.current, isMenuClicked: true });

          if (firstFrontNumberRef.current !== null) {
            removeAllHTMLStyles(firstFrontNumberRef);
            removeAllHTMLStyles(secondFrontNumberRef);

            void firstFrontNumberRef.current.offsetWidth;
            void firstFrontNumberRef.current.offsetWidth;

            firstFrontNumberRef.current.classList.add('number-out-up');
            secondFrontNumberRef.current.classList.add('number-in-up');
          }
        }, 500);
      }
    }
  };

  const onUpWheel = (e) => {
    if (pageSettings.current > 1) {
      if (homePageMovingBlock.current !== null) {
        homePageMovingBlock.current.classList.remove('main-start');
        void homePageMovingBlock.current.offsetWidth;
        homePageMovingBlock.current.classList.add('slide-up-main');

        setTimeout(() => {
          if (pageSettings.current === 4) {
            setPageSettings({
              ...pageSettings,
              current: pageSettings.current - 1,
              prev: pageSettings.current,
              isMenuClicked: false,
            });
          } else {
            setPageSettings({
              ...pageSettings,
              current: pageSettings.current - 1,
              prev: pageSettings.current,
            });
          }

          if (firstFrontNumberRef.current !== null) {
            removeAllHTMLStyles(firstFrontNumberRef);
            removeAllHTMLStyles(secondFrontNumberRef);

            void firstFrontNumberRef.current.offsetWidth;
            void firstFrontNumberRef.current.offsetWidth;

            firstFrontNumberRef.current.classList.add('number-out-down');
            secondFrontNumberRef.current.classList.add('number-in-down');
          }
        }, 500);
      }
    }
  };

  const onDownWheel = (e) => {
    if (pageSettings.current < 4) {
      if (homePageMovingBlock.current !== null) {
        homePageMovingBlock.current.classList.remove('main-start');
        void homePageMovingBlock.current.offsetWidth;
        homePageMovingBlock.current.classList.add('slide-down-main');

        setTimeout(() => {
          if (pageSettings.current === 3) {
            setPageSettings({
              ...pageSettings,
              current: pageSettings.current + 1,
              prev: pageSettings.current,
              isMenuClicked: true,
            });
          } else {
            setPageSettings({
              ...pageSettings,
              current: pageSettings.current + 1,
              prev: pageSettings.current,
            });
          }

          if (firstFrontNumberRef.current !== null) {
            removeAllHTMLStyles(firstFrontNumberRef);
            removeAllHTMLStyles(secondFrontNumberRef);

            void firstFrontNumberRef.current.offsetWidth;
            void firstFrontNumberRef.current.offsetWidth;

            firstFrontNumberRef.current.classList.add('number-out-up');
            secondFrontNumberRef.current.classList.add('number-in-up');
          }
        }, 500);
      }
    }
  };

  return (
    <ReactScrollWheelHandler upHandler={onUpWheel} downHandler={onDownWheel} timeout={1000}>
      <Switch>
        <Route path="/" exact>
          <MainPage
            pageSettings={pageSettings}
            setPageSettings={setPageSettings}
            firstFrontNumberRef={firstFrontNumberRef}
            secondFrontNumberRef={secondFrontNumberRef}
            pageBlock={homePageMovingBlock}
            goToPage={goToPage}
            onDownWheel={onDownWheel}
          />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </ReactScrollWheelHandler>
  );
}

export default App;
