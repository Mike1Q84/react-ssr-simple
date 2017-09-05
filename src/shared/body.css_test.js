import { assert } from 'chai';
import quixote from 'quixote';

describe("body div", () => {
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
  <div class="body"></div>
</div>`);
    body = frame.get(".body");
  });

  it("has width 100px", function() {
    body.assert({
      width: 100
    });
  });
});

describe("body title", () => {
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
  <h1 class="body__title"></h1>
</div>`);
    bodyTitle = frame.get(".body__title");
  });

  it("has color green", function() {
    assert.equal(bodyTitle.getRawStyle("color"), GREEN);
  });
});
