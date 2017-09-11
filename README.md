# react-ssr-simple
Simple server-side rendering React with Redux

TDD/BDD in both [React](https://github.com/facebook/react) and [Sass](https://github.com/sass/sass) with [Webpack](https://github.com/webpack/webpack), [Karma](https://github.com/karma-runner/karma), [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai), [Enzyme](https://github.com/airbnb/enzyme), [Quixote](https://github.com/jamesshore/quixote), [react-i18next](https://github.com/i18next/react-i18next) and [Docker Compose](https://github.com/docker/compose)

### link host's yarn cache dir to project's .yarn-cache
`ln -s ~/.cache/yarn/v1 .yarn-cache`
### install dependencies through yarn
`sudo docker-compose -f docker-compose.install.yml up`
### start the development environment
`sudo docker-compose up -d`
### login into the docker container
`sudo docker exec -it react-ssr-simple_yarn_1 /bin/ash`
### start the Karma environment and log the testing outputs
`npm run test`

![alt text](https://github.com/Mike1Q84/react-ssr-simple/raw/master/Karma.Mocha.Chai.Enzyme.Quixote.output.png)

Failed test cases vs. Passed test cases


## Credit

- [Jason Chambers](https://medium.com/@Jukejc/setting-up-karma-to-work-with-enzyme-mocha-and-webpack-in-2017-1ab0c2e9ef00)
- [André Eife](https://medium.com/@a_eife/unit-test-code-that-uses-css-modules-ef5b49efc707)
- [Cory House](https://github.com/coryhouse/pluralsight-redux-starter)
- [Ryan van Niekerk](https://medium.com/@iamnayr/a-multi-part-analysis-of-node-docker-image-sizes-using-yarn-vs-traditional-npm-2c20f034c08f)
- [Maximilian Schwarzmueller](https://www.youtube.com/playlist?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os)
- [James Shore](https://vimeo.com/144642399)
- [Cássio Souza](https://github.com/cassiozen/ReactCasts/tree/master/episode12)
- [Jason Wilder](https://github.com/jwilder/nginx-proxy)
