const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  inputs: [{ type: String }], // New field for sample inputs
  desiredOutputs: [{ type: String }], // New field for corresponding desired outputs
  tags:[String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;
