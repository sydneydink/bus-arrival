var mongoose = require('mongoose');
 
var ParticipantSchema = new mongoose.Schema({ 	
  email: {type: String, unique: false}, 
  recipe: String,
  time: Date,
});

ParticipantSchema.pre('save', function(next){
	var now = new Date();
	this.time = now;
	next();
})


mongoose.model("Participant", ParticipantSchema);