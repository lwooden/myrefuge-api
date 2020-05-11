
// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-getting-started

'use strict';

module.exports = async function (app) {
  await app.dataSources.mysqlDb.automigrate('passage');


  const columns = await app.models.passage.create([{
    passageText: 'For God so loved the world, that he gave His only Begotten Son....',
    passageLocation: 'John 3:16',
    categoryId: 1
  }, {
    passageText: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    passageLocation: 'Matthew 11:28-30',
    categoryId: 1

  },
  {
    passageText: 'Pride goes before destruction, a haughty spirit before a fall.',
    passageLocation: 'Proverbs 16:18',
    categoryId: 2
  },{
    passageText: 'When pride comes, then comes disgrace, but with humility comes wisdom.',
    passageLocation: 'Proverbs 11:2',
    categoryId: 2
  }

]);

  console.log('Data created: \n', columns);
};
