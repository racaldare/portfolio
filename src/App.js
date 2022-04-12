import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AboutPage, MainPage } from './pages';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goTo, setPage } from './redux/actions';

function App() {
  const fNum = useRef(null),
    sNum = useRef(null),
    pageBlock = useRef(null),
    prevNumber = useRef(0);
  const dispatch = useDispatch();

  const globalState = useSelector(({ settings }) => {
    return {
      page: settings.page,
      prev: settings.prev,
      menuClick: settings.menuClick,
    };
  });

  console.log('global', globalState);

  useEffect(() => {
    if (pageBlock.current !== null) {
      if (prevNumber.current === 0) {
        pageBlock.current.classList.add('main-start');
        fNum.current.classList.add('number-out-start');
        sNum.current.classList.add('number-in-start');
      }
      void pageBlock.current.offsetWidth;
      pageBlock.current.classList.add('slide-in-main');
      prevNumber.current = globalState.page;
    }

    return () => {};
  });

  const goToPage = (pNumber) => {
    if (pNumber < globalState.page) {
      if (pageBlock.current !== null && globalState.page !== pNumber) {
        pageBlock.current.classList.remove('main-start');
        void pageBlock.current.offsetWidth;
        pageBlock.current.classList.add('slide-up-main');
        setTimeout(() => {
          dispatch(goTo({ page: pNumber, prev: prevNumber.current, menuClick: true }));
          if (fNum.current !== null) {
            fNum.current.classList.remove('number-out-start');
            fNum.current.classList.remove('number-out-down');
            fNum.current.classList.remove('number-out-up');
            sNum.current.classList.remove('number-in-start');
            sNum.current.classList.remove('number-in-down');
            sNum.current.classList.remove('number-in-up');

            void fNum.current.offsetWidth;
            void fNum.current.offsetWidth;

            fNum.current.classList.add('number-out-down');
            sNum.current.classList.add('number-in-down');
          }
        }, 500);
      }
    } else {
      if (pageBlock.current !== null && globalState.page !== pNumber) {
        pageBlock.current.classList.remove('main-start');
        void pageBlock.current.offsetWidth;
        pageBlock.current.classList.add('slide-down-main');
        setTimeout(() => {
          dispatch(goTo({ page: pNumber, prev: prevNumber.current, menuClick: true }));
          if (fNum.current !== null) {
            fNum.current.classList.remove('number-out-start');
            fNum.current.classList.remove('number-out-down');
            fNum.current.classList.remove('number-out-up');
            sNum.current.classList.remove('number-in-start');
            sNum.current.classList.remove('number-in-down');
            sNum.current.classList.remove('number-in-up');

            void fNum.current.offsetWidth;
            void fNum.current.offsetWidth;

            fNum.current.classList.add('number-out-up');
            sNum.current.classList.add('number-in-up');
          }
        }, 500);
      }
    }
  };

  const onUpWheel = (e) => {
    if (globalState.page > 1) {
      if (pageBlock.current !== null) {
        pageBlock.current.classList.remove('main-start');
        void pageBlock.current.offsetWidth;
        pageBlock.current.classList.add('slide-up-main');
        setTimeout(() => {
          dispatch(setPage({ page: globalState.page - 1, prev: prevNumber.current }));
          if (fNum.current !== null) {
            fNum.current.classList.remove('number-out-start');
            fNum.current.classList.remove('number-out-down');
            fNum.current.classList.remove('number-out-up');
            sNum.current.classList.remove('number-in-start');
            sNum.current.classList.remove('number-in-down');
            sNum.current.classList.remove('number-in-up');

            void fNum.current.offsetWidth;
            void fNum.current.offsetWidth;

            fNum.current.classList.add('number-out-down');
            sNum.current.classList.add('number-in-down');
          }
        }, 500);
      }
    }
  };

  const onDownWheel = (e) => {
    if (globalState.page < 4) {
      if (pageBlock.current !== null) {
        pageBlock.current.classList.remove('main-start');
        void pageBlock.current.offsetWidth;
        pageBlock.current.classList.add('slide-down-main');
        setTimeout(() => {
          dispatch(setPage({ page: globalState.page + 1, prev: prevNumber.current }));
          if (fNum.current !== null) {
            fNum.current.classList.remove('number-out-start');
            fNum.current.classList.remove('number-out-down');
            fNum.current.classList.remove('number-out-up');
            sNum.current.classList.remove('number-in-start');
            sNum.current.classList.remove('number-in-down');
            sNum.current.classList.remove('number-in-up');

            void fNum.current.offsetWidth;
            void fNum.current.offsetWidth;

            fNum.current.classList.add('number-out-up');
            sNum.current.classList.add('number-in-up');
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
            globalState={globalState}
            fNum={fNum}
            sNum={sNum}
            pageBlock={pageBlock}
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
