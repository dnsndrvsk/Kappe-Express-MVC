export default (req, res) => {
  res.render('about', {
    active: 'About',
    data: 'Some data'
  });
}
