const postRepository = require("../repositories/post.repository");


module.exports = {
  create(requestBody) {
    return postRepository.create(requestBody);
  },

  update(id, requestBody) {
    return postRepository.update(id, requestBody);
  },

  delete(id) {
    return postRepository.delete(id);
  },

  list() {
    return postRepository.findAll();
  },

  get(id) {
    return postRepository.find(id);
  },
};
