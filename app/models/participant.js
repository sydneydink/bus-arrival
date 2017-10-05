var mongoose = require('mongoose');
 
var ParticipantSchema = new mongoose.Schema({ 	
  email: {type: String, unique: false}, 
  recipe: String
});

mongoose.model("Participant", ParticipantSchema);