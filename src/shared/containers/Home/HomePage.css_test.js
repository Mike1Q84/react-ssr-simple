import { assert } from 'chai';
import quixote from 'quixote';

describe("HomePage div", () => {
  let frame;
  let container;
  let body;

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
<div>
  <div class="home"></div>
</div>`);
    body = frame.get(".home");
  });

  it("should have width 100px", function() {
    body.assert({
      width: 100
    });
  });
});

describe("HomePage title", () => {
  let GREEN = "rgb(0, 128, 0)";

  let frame;
  let container;
  let bodyTitle;

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
<div>
  <h1 class="home__title"></h1>
</div>`);
    bodyTitle = frame.get(".home__title");
  });

  it("should have color green", function() {
    assert.equal(bodyTitle.getRawStyle("color"), GREEN);
  });
});
