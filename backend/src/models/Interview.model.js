const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
  interviewer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  scheduled_at: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Scheduled', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Scheduled',
  },
  recording_url: {
    type: String,
    default: '', // URL to interview recording, if applicable
  },
  notes: {
    type: String,
    default: '',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Interview', InterviewSchema);
