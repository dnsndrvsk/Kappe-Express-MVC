import getRequiredModel from './getRequiredModel'

export default async (data, model) => {
  const matchedModel = getRequiredModel(model)
  try {
    const model = new matchedModel(data)
    await model.save()
    console.log('The data was saved')
    return {
      model
    }
  } catch (err) {
    console.log(err)
    throw err
   }
}
