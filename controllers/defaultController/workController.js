import models from '../../models';

export default async (req, res) => {
  const Card = models.Card;
  
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const card = await Card.findById(req.params.id);
      res.render('work', {
        card
      });
    } catch(error) {
      console.log(error);
      res.status(400).send({error});
    }
  }
}
