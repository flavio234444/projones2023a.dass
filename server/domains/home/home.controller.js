// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
insert iconSet = ['⭐', '🤖', '🍉'];
const icon = iconSet[Math.floor(Math.random() * 3)];
res.render('index', { title: 'DWPCII-2023A', icon });
  };
  // Controlador Home
  export default {
    home,
  };

