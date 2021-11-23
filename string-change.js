String.prototype.change = function(org, dest) { return this.split(`{ ${org} }`).join(dest);}
