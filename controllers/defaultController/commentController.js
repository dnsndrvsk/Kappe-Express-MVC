import models from '../../models';


export default async (req, res) => {
  const Card = models.Card;
  console.log(req.body);
  console.log(req.params.id);
//  try {
//    const card = await Card.update({})
//  }
}
