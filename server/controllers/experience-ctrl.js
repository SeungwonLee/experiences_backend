const Experience = require('../models/experience-model')

getExperiences = async (req, res) => {
  await Experience.find({}, (err, experience) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!experience.length) {
      return res
        .status(404)
        .json({ success: false, error: `Experience not found` })
    }
    return res.status(200).json({ success: true, data: experience })
  }).catch(err => console.log(err))
}

module.exports = { getExperiences }
