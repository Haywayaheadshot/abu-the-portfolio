import React, { useEffect } from 'react';
import '../styles/hamburger-pop.css';

const HamburgerPop = () => {
  useEffect(() => {
    const buttonsContainer = document.querySelector('.btn-container');

    function click(e) {
      const el = e.target;

      if (el !== e.currentTarget) {
        if (el.nodeName === 'BUTTON') {
          if (el.classList.contains('is-active')) {
            el.classList.remove('is-active');
          } else {
            el.classList.add('is-active');
          }
        }
      }
      e.stopPropagation();
    }

    buttonsContainer.addEventListener('click', click);

    return () => {
      buttonsContainer.removeEventListener('click', click);
    };
  }, []);
  return (
    <section className="hamburger-pop-bg">
      <p>
        <strong>Click</strong>
        {' '}
        a button to activate its animation.
      </p>
      <div className="btn-container">
        <button type="button" className="btn btn--shockwave is-active">
          Shockwave
        </button>
        <button type="button" className="btn btn--jump">
          Jump
        </button>
        <button type="button" className="btn btn--pulse">
          Pulse
        </button>
        <button type="button" className="btn btn--blink">
          Blink
        </button>
        <button type="button" className="btn btn--wiggle">
          Wiggle
        </button>
        <button type="button" className="btn btn--wut">
          H. Alien
        </button>
      </div>
    </section>
  );
};

export default HamburgerPop;
