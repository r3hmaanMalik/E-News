var express = require('express');
var router = express.Router();
var carController = require('../controllers/carController.js');
// var carModel = require('../models/carModel.js');
// var newsModel = require('../models/newsModel.js');


var latestModel = require('../models/latestModel.js');

var sportsModel = require('../models/sportsModel.js');
var entertainmentModel = require('../models/entertainmentModel.js');
var studentModel = require('../models/studentModel.js');
var businessModel = require('../models/businessModel.js');
var worldModel = require('../models/worldModel.js');



router.get('/', function (req, res) {
     latestModel.find(function (err, latests) {
         if (err) {
             return res.status(500).json({
                 message: 'Error when getting sports.',
                 error: err
             });
         }

           sportsModel.find(function (err, sportss) {
               if (err) {
                   return res.status(500).json({
                       message: 'Error when getting sports.',
                       error: err
                   });
               }

                   entertainmentModel.find(function (err, entertainments) {
                       if (err) {
                           return res.status(500).json({
                               message: 'Error when getting sports.',
                               error: err
                           });
                       }
                         studentModel.find(function (err, student) {
                             if (err) {
                                 return res.status(500).json({
                                     message: 'Error when getting sports.',
                                     error: err
                                 });
                             }
                             businessModel.find(function (err, businesss) {
                                 if (err) {
                                     return res.status(500).json({
                                         message: 'Error when getting business.',
                                         error: err
                                     });
                                 }
                                 worldModel.find(function (err, worlds) {
                                     if (err) {
                                         return res.status(500).json({
                                             message: 'Error when getting world.',
                                             error: err
                                         });
                                     }
                                     return res.render('index',{ trendings:latests,sport:sportss,entertainment:entertainments,education:student,business:businesss,world:worlds,category:"latest",randomImage:"lahore"});

                                 });
                             });
                         });
                   });

           });
     });
 });
router.get('/login', function(req, res, next) {

      res.render('error', { message: "mubarakan" });
      // return res.json(cars);

});





// /* GET home page. */
// router.get('/', function(req, res, next) {
//   newsModel.find(function (err, allnews) {
//       if (err) {
//           return res.status(500).json({
//               message: 'Error when getting car.',
//               error: err
//           });
//       }
//       var news = allnews
//
//
//       latestModel.find(function (err, alllatests) {
//           if (err) {
//               return res.status(500).json({
//                   message: 'Error when getting sports.',
//                   error: err
//               });
//           }
//           var latests = alllatests
//           return res.render('index',{ posts: allnews,trendings:latests,category:"latest",randomImage:"lahore"});
//       });
//
//       // res.render('index', { posts: news,
//       //   rehman: "malik"
//       //  });
//       // return res.json(cars);
//   });
//
// });



module.exports = router;
