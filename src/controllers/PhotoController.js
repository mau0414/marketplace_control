class PhotoController {
  async create(req, res) {
    try {
      return res.json(req.file);
    } catch (e) {
      return res.json('erro');
    }
  }
}

export default new PhotoController();
