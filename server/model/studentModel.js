const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of student!"],
    },
    rollNumber: {
      type: Number,
      required: [true, "Please provide the roll number of student!"],
      unique: true,
    },
    checkin: {
      type: String,
      default: null,
    },
    checkinTime: {
      type: Date,
      default: Date.now,
    },
    checkout: {
      type: Boolean,
      default: false,
    },
    checkoutTime: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
