# Node.js Model Testing with Jest example.


## Prerequisite

Setting up MySQL server is needed to run the example. And edit sequelize.config.json if needed.


```
/* sequelize.config.json */

{
  "development": {
    "username": "root",
    "password": null,
    "database": "sample_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "sample_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "sample_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Getting Started


```
yarn
yarn global add sequelize-cli
```


### CREATE DATABASE

```
env NODE_ENV=test sequelize db:create --config sequelize.config.json
```

### Migration

```
 env NODE_ENV=test sequelize db:migrate --config sequelize.config.json
```


### Edit Package.json


Specify the absolute path to tsconfig.json in your machine in order for "ts-jest" to bootstrap.
  

```
/* package.json */ 

    "globals": {
      "ts-jest": {
        "tsConfigFile": "absolute_path_to_your_ts_config_json"
      }
    }
```

### Execute Test with Jest


```
yarn run test
```

