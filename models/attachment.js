var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var AttachmentSchema = new Schema({
    id: {type: String},
    object_id: {type: ObjectId}, 
    object_type: {type: String},
    path: {type: String}
});


mongoose.model('Attachment', AttachmentSchema);
