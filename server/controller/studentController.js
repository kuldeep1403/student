const Student = require("../model/studentModel");
const catchAsync = require("../utils/catchAsync");

exports.getAll = catchAsync(async (req, res, next) => {
  const docs = await Student.find({ checkin: req.params.date });
  const stats = await Student.aggregate([
    {
      $match: {
        $and: [
          {
            checkout: false,
          },
          {
            checkin: req.params.date,
          },
        ],
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    results: docs.length,
    active: stats.length,
    data: {
      data: docs,
    },
  });
});

exports.createOne = catchAsync(async (req, res, next) => {
  const newDoc = await Student.create({
    name: req.body.name,
    rollNumber: req.body.rollNumber,
    checkin: req.body.checkin,
  });

  res.status(201).json({
    status: "success",
    data: {
      doc: newDoc,
    },
  });
});

exports.updateCheckout = catchAsync(async (req, res, next) => {
  const doc = await Student.findByIdAndUpdate(
    req.params.Id,
    {
      checkout: true,
      checkoutTime: Date.now(),
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      doc: doc,
    },
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  const doc = await Student.findById(req.params.Id);
  res.status(200).json({
    status: "success",
    data: {
      doc: doc,
    },
  });
});
