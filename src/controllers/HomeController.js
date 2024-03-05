class HomeController {
  showHome(req, res) {
    console.log('chegou em home');
    res.json({
      msg: 'Ack',
    });
  }
}

export default new HomeController();
