// import {firebaseRef} from '../src/firebase'
// require('dotenv').config()

var firebaseRef = require('../src/firebase').firebaseRef;

var updates = {};
// updates['/app'] = {
//     'isAuthApp': false,
//     'hasHeader': true,
//     'hasFooter': false,
//     'routes': {
//         'landing': ''
//     }
// };
//
// updates['/specifications/header']=[
//     {
//         'id':1,
//         'parentId':'',
//         'type':'Row',
//         'orderNo':1,
//         'uiComponent':'materializecss',
//         'className':'row'
//     },
//     {
//         'id':2,
//         'parentId':1,
//         'type':'Column',
//         'orderNo':1,
//         'uiComponent':'materializecss',
//         'className':'col s12'
//     },
//     {
//         'id':3,
//         'parentId':2,
//         'type':'Common',
//         'orderNo':1,
//         'uiComponent':'materializecss',
//         'className':'card'
//     },
//     {
//         'id':4,
//         'parentId':3,
//         'type':'Common',
//         'orderNo':1,
//         'uiComponent':'materializecss',
//         'className':'card-content'
//     },
//     {
//         'id':5,
//         'parentId':4,
//         'type':'Label',
//         'orderNo':1,
//         'defaultValue':'UI Components',
//         'uiComponent':'materializecss',
//         'className':'card-title'
//     }
// ];

updates['/specifications/landing']=[ {
      "className" : "row",
      "id" : 1,
      "orderNo" : 1,
      "parentId" : "",
      "type" : "Row",
      "uiComponent" : "materializecss"
    }, {
      "className" : "col s8 offset-s2",
      "id" : 2,
      "orderNo" : 1,
      "parentId" : 1,
      "type" : "Column",
      "uiComponent" : "materializecss"
    }, {
      "className" : "card",
      "id" : 3,
      "orderNo" : 1,
      "parentId" : 2,
      "type" : "Common",
      "uiComponent" : "materializecss"
    }, {
      "className" : "card-title",
      "defaultValue" : "Demo Form",
      "id" : 6,
      "orderNo" : 2,
      "parentId" : 7,
      "type" : "Label",
      "uiComponent" : "materializecss"
    }, {
      "className" : "card-content",
      "id" : 7,
      "orderNo" : 2,
      "parentId" : 3,
      "type" : "Common",
      "uiComponent" : "materializecss"
},
{
  "id":8,
  "orderNo":2,
  "parentId":7,
  "className":"input-field",
  "label":"Person's state",
  "type":"DropDown",
  "values": [
     {key:"MAH",value:"Maharashtra"},
     {key:"KER",value:"Kerala"},
     {key:"TN",value:"Tamil Nadu"}
   ],
 "uiComponent" : "materializecss"
},
{
  "className":"validate",
  "label":"Person's name",
  "placeholder":"Person's name",
  "id":9,
  "orderNo":2,
  "parentId":7,
  "type":"TextField",
  "inputType":"text",
  "uiComponent" : "materializecss"
}
  // {
  //   "className" : "",
  //   "id" : 8,
  //   "orderNo" : 2,
  //   "parentId" : 7,
  //   "type" : "TextField",
  //   "uiComponent" : "materializecss"
  // }
];

firebaseRef.update(updates).then((res) => {
    console.log(res);
});

// console.log(process.env);

// {

//     rows:[
//       {
//         cols:[
//           {
//             colWidth:12,
//             textAlign:"center",
//             hasChildren:true,
//           }
//         ]
//       }
//     ]
// }
