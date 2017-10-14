import { assert } from 'chai';
import quixote from 'quixote';

// import t from './_lang.json';

describe("Header", () => {
  let frame;
  let container;
  let header;
  let navbtn;

  before((done) => {
    frame = quixote.createFrame({
      stylesheet: '/base/dist/css/main.css'
    }, done);
  });

  after(() => {
    frame.remove();
  });

  beforeEach(() => {
    frame.reset();
    container = frame.add(`
<div class="header">
  <h1 class="header__title">Header</h1>
  <span class="navbtn">
    <span class="navbtn__line1"></span>
    <span class="navbtn__line2"></span>
    <span class="navbtn__line3"></span>
  </span>
  <nav class="navbar">
    <ul class="navlink">
      <li class="navlink__item">
        <a href="/en-AU/link1">
          Link 1
        </a>
      </li>
      <li class="navlink__item">
        <a href="/en-AU/link2">
          Link 2
        </a>
      </li>
    </ul>
  </nav>
</div>`);
    header = frame.get(".header");
    navbtn = frame.get(".navbtn");
  });

  describe("wrapper", () => {
    it("should have width 100% and height 50px", function() {
      header.assert({
        width: container.width,
        height: 50
      });
    });
  });

  describe("navbtn", () => {
    it("should have positioned correctly", function() {
      navbtn.assert({
        top: 13,
        bottom: header.bottom.minus(13),
        right: header.right.minus(15),
        width: 24,
        height: 24
      });
    });
  });

});
