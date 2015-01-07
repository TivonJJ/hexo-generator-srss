# hexo-generator-srss
rss generator for hexo

## Install

``` bash
$ npm install hexo-generator-srss --save
```

## Options

configure this plugin in `_config.yml`.

``` yaml
feed:
    type: rss2
    path: rss.xml
    limit: 20
	style: rss_style.xml
	dateFormat: yyyy MM dd hh:mm:ss
```