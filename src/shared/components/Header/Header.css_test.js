import { assert } from 'chai';
import quixote from 'quixote';

// import t from './_lang.json';

describe("Header", () => {
  let frame;
  let container;
  let header;

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
  });

  describe("wrapper", () => {
    it("should have width 100%", function() {
      header.assert({
        width: container.width
      });
    });

    it("should have height 50px", function() {
      header.assert({
        height: 50
      });
    });
  });

});
