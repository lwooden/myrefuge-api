
// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-getting-started

'use strict';

module.exports = async function (app) {
  await app.dataSources.mysqlDb.automigrate('category');


  const columns = await app.models.category.create([{
    name: 'Pride'
  }, {
    name: 'Lust'
  }]);

  console.log('Models created: \n', columns);
};
