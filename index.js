var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newOject = Object.assign({}, object)
  delete newObject.key
}