"use strict";var _express=_interopRequireDefault(require("express"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const{Router}=_express.default,router=Router();router.get("/author",(req,res)=>{// Responding to the client using res object
res.json({name:"Leonardo Flavio",lastname:"Gonzalez Reyes ",twitter:"@leogrz",job:"ITGAM \uD83C\uDFEB"})});// function(req, res){}
// Exporting the router
var _default=router;exports.default=_default;