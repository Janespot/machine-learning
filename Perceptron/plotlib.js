function XYPlotter(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

    this.plotLine = function(x0, y0, x, y, color) {
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    this.transformXY = function() {
        this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
    }

    this.plotPoints = function(x, y, color, radius = 3) {
        // let desired = [];
        
        // for (let i = 0; i < n; i++) {
        //     desired[i] = 0;
        //     if (yArr[i] > f(xArr[i])) desired[i] = 1;
        // }

        // for (let i = 0; i < n; i++) {
        //     let color = "purple";
            
        //     if (desired[i]) color = "green";
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
            this.ctx.fill();
        // }
    }
}