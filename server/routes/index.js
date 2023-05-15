import express from 'express';
const { Router } = express;

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  let iconSet = ["⭐","🤖","🍉"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author', (req, res) => {
  // Creating a View-Model
  const author = {
    '"name"': '"Leonardo"',
    '"lastname"': '"Gonzalez"',
    '"twitter"': '"@Leogz"',

  // Sending the view-model to be rendered by a View
  res,render('Author', author),
}),


export default router;