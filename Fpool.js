function Fpool() {
  this.objectsArray=[]
}
Fpool.prototype.add = function (theObbject) {
  this.objectsArray.push(theObbject);
};
Fpool.prototype.emit = function (messageType,message) {
  for (meth of this.objectsArray) {
    if (typeof meth[messageType] === "function") {
      meth[messageType](message);
    }
  }
};
