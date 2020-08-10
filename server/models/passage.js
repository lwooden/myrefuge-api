'use strict';

module.exports = function(Passage) {
    Passage.likeVerse = async function(data) {
        // Passage.findById(passageId, function (err, instance) {
        //     var response = "The text of the verse is " + instance.passageText;
        //     // callback(null, response);
        //     console.log(response);
        // });
      

        Passage.upsertWithWhere({id:data.passageId}, {likeCounter: data.currentLikeCounter}, function(err, obj) {
            console.log(err)
            console.log("Like Counter updated: ", obj)
            
        })

      }

      Passage.remoteMethod (
            'likeVerse',
            {
              http: {path: '/likeVerse', verb: 'post'},
              accepts: [
                  {arg: 'data', type: 'object', http: { source: 'body' } }
            ],
              returns: {arg: 'name', type: 'string'}
            }
        );

};
