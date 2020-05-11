
// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-getting-started

'use strict';

module.exports = async function (app) {
  await app.dataSources.mysqlDb.automigrate('passage');


  const columns = await app.models.passage.create([{
    passageText: 'For God so loved the world, that he gave His only Begotten Son....',
    passageLocation: 'John 3:16',
    categoryId: 1
  }]);

  console.log('Data created: \n', columns);
};
