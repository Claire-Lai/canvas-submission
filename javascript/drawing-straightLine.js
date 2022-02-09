class DrawingStraightLine extends PaintFunction{

    constructor(contextDraft,contextReal){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = strokeColorIndicator.style.backgroundColor;
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Width of line
        this.contextDraft.lineWidth = $("#lineWidth").val();
        // Drawing the line here
        this.origX = coord[0];
        this.origY = coord[1]
        // this.contextDraft.beginPath();
        // this.contextDraft.moveTo(coord[0], coord[1]); 
        // this.saveCanvas();
    }

    onDragging(coord, event) {
        this.clearCanvas();
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY); 
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();  

      }

    onMouseMove() {}

    onMouseUp(coord,event){
        this.clearCanvas();
        // this.restore();
        this.contextReal.strokeStyle = strokeColorIndicator.style.backgroundColor;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = $("#lineWidth").val();

        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY); 
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        push();
    }
    // onMouseUp(){}
    onMouseLeave() {}
    onMouseEnter() {}

    // draw(x, y) {
    //     //
    //     this.context.lineTo(x, y);
    //     // Draw the line onto the page
    //     this.context.stroke();
    //   }

    clearCanvas = () =>{
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        )
    }

    // saveCanvas(){
    //     const canvas = this.context;
    //     const saved = new Image();
    //     saved.src = canvas.toDataURL("image/png");
    //     setSavedData(saved)
    //   }
    
    // restore(){
    //     const canvas = this.context;
    //     const  ctx  = canvas.getContext("2d");
    //     ctx.drawImage(savedData,0,0)
    // }
}
