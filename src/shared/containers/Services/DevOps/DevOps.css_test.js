import { assert } from 'chai';
import quixote from 'quixote';

describe("DevOps Page", () => {
  let frame;
  let container;
  let image;
  let txtDiv;
  let title;

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
<div class="hero">
  <picture class="hero__img-div">
    <img src="" alt="" class="hero__image" />
  </picture>
  <div class="hero__txt-div">
    <h1 class="hero__title">Hero Title</h1>
  </div>
</div>`);
    image = frame.get(".hero__image");
    txtDiv = frame.get(".hero__txt-div");
    title = frame.get(".hero__title");
  });

  describe("Jumbotron/Hero", () => {
    it("image should have width 100%", function() {
      image.assert({
        width: container.width
      });
    });

    it("txt-div should be vertically aligned", () => {
      txtDiv.assert({
        top: container.middle.minus(txtDiv.height.times(1/2))
      });
    });

    it("title should be centered", () => {
      assert.equal(title.getRawStyle("text-align"), "center");
    });
  });

});
