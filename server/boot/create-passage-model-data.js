
// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-getting-started

'use strict';

module.exports = async function (app) {
  await app.dataSources.mysqlDb.automigrate('passage');


  const columns = await app.models.passage.create([{
    passageText: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
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
  }, {
    passageText: 'Be strong and very courageous, for you will give this people as an inheritance the land which I swore to their fathers to give them.',
    passageLocation: 'Joshua 1:6',
    categoryId: 3
  }, {
    passageText: 'Husbands, love your wives, just as Christ also loved the church and gave Himself up for her,',
    passageLocation: 'Ephesians 5:25',
    categoryId: 4
  }


]);

  console.log('Data created: \n', columns);
};
