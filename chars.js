
var characterArray = [Mal, Zoe, Wash, River, Jane, Simon, Kaylee];

exports.chars = function(req, res) {
  app.send('Responsy');
}

exports.char = function(req, res) {
  var charname = characterArray[req.params.id];
  app.send(charname);
}

