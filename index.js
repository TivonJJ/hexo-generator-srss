var generator = hexo.extend.generator;

if (generator.register.length === 1){
  generator.register(require('./srss'));
} else {
  generator.register('feed', require('./srss'));
}