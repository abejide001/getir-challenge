/* eslint-disable prefer-const */
const {
  sendFailureResponse,
  sendSuccessResponse,
} = require('../utils/appResponse');
const Record = require('../models/Record');

/**
 * @param {Object} req - HTTP request object
 *
 * @param {Object} res - HTTP response object
 *
 * @return {Object} Return success message with records
 */
const filterRecord = async (req, res) => {
  let { startDate, endDate, minCount, maxCount } = req.body;
  minCount = Number(minCount);
  maxCount = Number(maxCount);

  try {
    const records = await Record.aggregate([
      {
        $match: {
          createdAt: { $lte: new Date(endDate), $gte: new Date(startDate) },
        },
      },
      {
        $unwind: '$counts',
      },
      {
        $group: {
          _id: '$_id',
          key: { $first: '$key' },
          createdAt: { $first: '$createdAt' },
          totalCount: {
            $sum: '$counts',
          },
        },
      },
      {
        $match: {
          totalCount: { $gte: minCount, $lte: maxCount },
        },
      },
      { $project: { _id: 0 } },
    ]).exec();
    sendSuccessResponse(res, 200, records);
  } catch (error) {
    sendFailureResponse(res, 500, error.message);
  }
};

module.exports = filterRecord;
