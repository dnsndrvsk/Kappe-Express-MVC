import express from 'express'
import path from 'path'
import helper from '../utils'

const srcpath  = path.join(__dirname,'../client/build')
const api = express.Router()

api.get("/getitem", async (req,res) => {
  const { modelName } = req.query
  const requiredDocument = helper.getUrlEnding(req.headers.referer)
  const requiredModel = helper.getRequiredModel(modelName)
  try {
    const item = await requiredModel.findById(requiredDocument)
    return res.json(item)
  } catch (err) {
    res.status(404)
       .send({ error: 'There is no such document!' })
  }
})

api.post("/postcomment", async (req,res) => {
  const { comment, modelName } = req.body
  const requiredDocument = helper.getUrlEnding(req.headers.referer)
  const requiredModel = helper.getRequiredModel(modelName)

  try {
    await requiredModel.update(
      { _id: requiredDocument },
      {
        $push: { 'comments': comment }
      }
    )
    const item = await requiredModel.findById(requiredDocument)
    return res.json(item)
  } catch (err) {
    return res.status(500).json(err)
  }
})

api.get("/getitems", async (req,res) => {
  const { modelName } = req.query
  const requiredModel = helper.getRequiredModel(modelName)
  try {
    const items = await requiredModel.find()
                                     .sort({ date: -1 })
    return res.json(items)
  } catch (err) {
    return res.status(500).json(err)
  }
})

api.post("/postdata", async (req,res) => {
  const { data, modelName } = req.body
  try {
    const result = await helper.saveDataInDb(data, modelName)
    return res.json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
})

api.get("/*", (req,res) => {
  res.sendFile(srcpath +'/index.html')
})

export default api