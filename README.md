# Skeleton

This is a basic configuration of folders and pre-written files for a PHP + js
project for the way I'm developing it at Sep 2016.

It should do the work for a while, and although I'm pretty confident about the
PHP part for the more general frameworks (except the Symfony's bundle, I
still have to "get" that), I have to confess I'm quite lost at the "correct"
way to organize code at "the js way". So... that means it might change.

### Example
Using this project should create the following in your computer.
```
src/
    bootstrap.php
    Controllers/
        Controller.php
    Models/

tests/
    bootstrap.php

bin/
    install.php         # composer install, npm install, set permissions...
views/
    app.js
    js/
    sass/

config/
    config.yml
    Migrations/
    Seeds/

public/
    index.php
    img/
    fonts/
    js/
    css/

tmp/
docker/
    docker-compose.yml
    ...

composer.json
phpunit.xml.dist
webpack.config.js       # Prepared for multipage config
package.json
.env.example
.phinx.yml.example
.gitignore
README.md
```

I'll call this OSL Framework (Opinionated Set of Libraries). And it aims to help
in not only backend development, but also frontend.

But it doesn't impose you any view library, if you prefer SPA and views with js,
or you prefer using Twig or Blade and just include the js and css files...

What I want is that the full development process should be easier than now.
