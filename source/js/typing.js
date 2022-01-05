//эффект печатания

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

const typingOptions = {
  strings: [
    "HTML",
    "CSS",
    "JS"
  ],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity
};

let typed = new Typed("#typed-promo-text", typingOptions);
