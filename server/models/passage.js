'use strict';

module.exports = function(Passage) {
    Passage.likeVerse = async function(data) {
        Passage.findById(data.passageId, function (err, instance) {
            // var response = "The text of the verse is " + instance.passageText;
            // callback(null, response);

          console.log("Before: ", instance.likeCounter);

           ++instance.likeCounter // increment likeCounter by 1

           console.log("After: ", instance.likeCounter);

           instance.save()

            console.log("Done!");
        });
      
        // Not the correct implementation
        // A user that has not refereshed their device will have a lower like count displayed and would therefore cause 
        // the likeCounter to become in accurate over time. The value should simply be incremented from the database side 
        // regardless of what the user sees on their screen at any point and time

        // Passage.upsertWithWhere({id:data.passageId}, {likeCounter: data.currentLikeCounter}, function(err, obj) {
        //     console.log(err)
        //     console.log("Like Counter updated: ", obj)
            
        // })

      }

      Passage.remoteMethod (
            'likeVerse',
            {
              http: {path: '/likeVerse', verb: 'post'},
              accepts: [
                  {arg: 'data', type: 'object', http: { source: 'body' } }
            ],
              returns: {arg: 'name', type: 'string'},
              description: ["increments the likeCounter of a passage by 1"]
            }
        );

};
