const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  counts: {
    type: [Number],
  },
});

module.exports = mongoose.model('Record', RecordSchema);
