
// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-getting-started

'use strict';

module.exports = async function (app) {
  await app.dataSources.mysqlDb.automigrate('category');


  const columns = await app.models.category.create([{
    categoryName: 'Love'
  }, {
    categoryName: 'Pride'
  }, {
    categoryName: 'Fear'
  }, {
    categoryName: 'Marriage'
  }
]);

  console.log('Data created: \n', columns);
};
