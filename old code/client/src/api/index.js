import $ from 'jquery'

export default {
  getModels(name) {
    return $.ajax({
       url: "/api/getitems",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       data: {modelName: name}
    })
  },
  
  getModel(name) {
    return $.ajax({
       url: "/api/getitem",
       type: "GET",  
       dataType: 'json',  
       ContentType: 'application/json',
       data: {modelName: name} 
    })
  },
  
  postComment(comment, name) {
    return $.ajax({
      url: "/api/postcomment",
      dataType: 'json',
      type: 'POST',
      data: {
        comment: comment,
        modelName: name
      }
    })
  }
}