function vine(x, y, length, direction, line, grow, callback, branch) {
    this.x = x;
    this.y = y;
    this.colorr = 0;
    this.colorg = 0;
    this.colorb = 0;
    this.linewidth = line;
    this.curlength = 0;
    this.length = length;
    this.direction = direction;
    this.widen = grow;
    this.callback = callback;
    this.calledBack = false;
    this.branch = branch;
}

vine.prototype.grow = function () {
    if (this.curlength < this.length) {
        if (this.direction === 'left') this.x++;
        else if (this.direction === 'down') this.y++;
        else if (this.direction === 'right') this.x--;
        else if (this.direction === 'up') this.y--;

        if (this.widen) {
            if (this.curlength < this.length / 2) this.linewidth++;
            else this.linewidth--;
        }

        this.curlength++;
    } else if (!this.calledBack) {
        this.calledBack = true;
        this.callback(this.branch);

    }
}
/*
function grow(interval)
{
	if(this.curlength  < this.length){
		if(this.direction === 'left')
			this.x++;
		else if(this.direction === 'up')
			this.y++;
		
		this.linewidth++;
	}
}*/

vine.prototype.drawColor = function (context, color) {
    context.fillStyle = color;
    if (this.direction === 'left' || this.direction === 'right') 
		context.fillRect(this.x, this.y - this.linewidth / 2, 4, this.linewidth);
    else if (this.direction === 'up' || this.direction === 'down')
		context.fillRect(this.x - this.linewidth / 2, this.y, this.linewidth, 4);
}

vine.prototype.draw = function (context) {
    if (this.direction === 'left' || this.direction === 'right') 
		context.fillRect(this.x, this.y - this.linewidth / 2, 4, this.linewidth);
    else if (this.direction === 'up' || this.direction === 'down') 
		context.fillRect(this.x - this.linewidth / 2, this.y, this.linewidth, 4);
}