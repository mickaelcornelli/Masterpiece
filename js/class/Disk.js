class Disk {

    constructor(){

        this.color= "#8A0808"; 
        this.radius= 10; 

        this.position = {x: 0, y:0}
    }
    /**
     * @param {number} radius
     */
    setRadius(radius) {
        this.radius = radius; 
    }
    
    /**
     * @param {string} color
     */
    setColor(color) {
        this.color= color; 
    }
    
    /**
     * @param {Object} position 
     */
    setPosition(position) {
        this.position = position;
    }
    /**
     * @param context 
     */
    
    draw(context){
        
        context.save();
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
        context.restore();
    }
}