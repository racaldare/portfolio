function removeAllHTMLStyles(htmlElementRef) {
  htmlElementRef.current.classList.remove('number-out-link-back');
  htmlElementRef.current.classList.remove('number-in-link-back');

  htmlElementRef.current.classList.remove('number-out-start');
  htmlElementRef.current.classList.remove('number-out-down');
  htmlElementRef.current.classList.remove('number-out-up');

  htmlElementRef.current.classList.remove('number-in-start');
  htmlElementRef.current.classList.remove('number-in-down');
  htmlElementRef.current.classList.remove('number-in-up');
}

export default removeAllHTMLStyles;
