function branch(whenFinished) {
    this.totalVines = Math.round(Math.random() * 2 + 1);
    if (Math.random() > 0.5) this.dir = 'up';
    else this.dir = 'down';
    this.x = Math.round(Math.random() * width);
    if (this.x % 2 != 0) this.x++;
    this.y = height / 2;
    this.line = Math.round(Math.random() * 50) + 5;
    this.max = Math.round(Math.random() * width/2 + width/10);

    this.vine = new vine(this.x, this.y, this.max, this.dir, this.line, false, this.callBack, this);
    this.vineNum = 1;
    this.direct = 'vert';
    this.finished = whenFinished;
}

function branch(whenFinished, direction) {
    this.totalVines = Math.round(Math.random() * 2 + 1);
    this.dir = direction;
    this.x = Math.round(Math.random() * width);
    if (this.x % 2 != 0) this.x++;
    this.y = this.x;
    this.line = Math.round(Math.random() * 50) + 5;
    this.max = Math.round(Math.random() * width/2 + this.line);

    this.vine = new vine(this.x, this.y, this.max, this.dir, this.line, false, this.callBack, this);
    this.vineNum = 1;
    this.direct = 'vert';
    this.finished = whenFinished;
}


branch.prototype.callBack = function (owner) {
    if (owner.dir == 'down') {
        owner.y += owner.max + owner.line / 2;
        //owner.y += owner.line/2;
        //owner.x -= owner.line/2;
    } else if (owner.dir == 'up') {
        owner.y -= owner.max + owner.line / 2;
        //owner.y -= owner.line/2
        //owner.x -= owner.line/2;
    } else if (owner.dir == 'left') {
        owner.x += owner.max + owner.line / 2;
        //owner.x += owner.line/2;
        //owner.y -= owner.line/2;
    } else if (owner.dir == 'right') {
        owner.x -= owner.max + owner.line / 2;
        //owner.x -= owner.line/2;
        //owner.y -= owner.line/2;
    }

    if (owner.totalVines > owner.vineNum) {

        if (owner.direct == 'vert') {
            if (Math.random() > 0.5) {
                if (owner.dir == 'up') owner.x += owner.line / 2;
                else owner.x += owner.line / 2;

                owner.dir = 'right';
            } else {
                if (owner.dir == 'up') owner.x -= owner.line / 2;
                else owner.x -= owner.line / 2;
                owner.dir = 'left';
            }
            owner.direct = 'hor';
        } else {
            if (Math.random() > 0.5) {
                if (owner.dir == 'left') owner.y += owner.line / 2;
                else owner.y += owner.line / 2;
                owner.dir = 'up';
                //	owner.x += owner.line/2;
            } else {
                if (owner.dir == 'left') owner.y -= owner.line / 2;
                else owner.y -= owner.line / 2;
                owner.dir = 'down';
                //owner.x -= owner.line/2;
            }
            owner.direct = 'vert';

        }
        owner.vine = new vine(owner.x, owner.y, owner.max, owner.dir, owner.line, false, owner.callBack, owner);
        owner.vineNum++;
    } else owner.finished();

}

branch.prototype.step = function (context, color) {
    this.vine.grow();
    this.vine.drawColor(context, fillColor);

}