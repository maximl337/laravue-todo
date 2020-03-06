## Installing

### Pre-requisites
- Docker
- Docker Compose

### In your terminal

cp env file

`cp .env.local .env`

`cd` into laradock-lt and run the following commands

```
docker-compose up -d nginx mysql
docker-compose exec workspace bash
composer install
php artisan key:generate
php artisan migrate
yarn install
```

### Testing
```
docker-compose exec workspace bash
phpunit
yarn run test-js
```
