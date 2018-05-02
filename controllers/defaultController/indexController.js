import models from '../../models';


export default async (req, res) => {
  const Card = models.Card;
  
  try {
    const cards = await Card.find({ }).sort({ date: -1 });
    res.render('home', {
      active: 'Home',
      cards: cards
    });
  } catch(error) {
    res.render('home', {
      active: 'Home'
    });
  }
}
