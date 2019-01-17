var mongoose = require('mongoose');
var brandSchema = mongoose.Schema({
    name: {
        type: String,
        reqiured: true
    },
    Desc: {
        type: String,
        required: true
    },
    create_data: {
        type:Date,
        default: Date.now
    }
})
var Brand = module.exports = mongoose.model('Brand', brandSchema);
/*module.exports.getBrands= function(callback){
    Brand.find(callback);
}
module.exports.getBrandsById= function(id, callback){
   Brand.findById(id, callback);
}
*/