const typing = (text, elem, delay) => {
  if (text.length > 0) {
    elem.innerHTML += text[0];
    setTimeout(
      () => {
        typing(text.slice(1), elem, delay);
      }, delay
    );
  }
};

export { typing };


