class DrawingCircle extends PaintFunction{

    constructor(contextDraft,contextReal){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = "red";
        this.contextDraft.strokeStyle = strokeColorIndicator.style.backgroundColor;
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Width of line
        this.contextDraft.lineWidth = $("#lineWidth").val();
        // Drawing the line here
        this.origX = coord[0];
        this.origY = coord[1]
        // this.saveCanvas();
    }

    onDragging(coord, event) {
        this.clearCanvas();
        this.contextDraft.beginPath();
        this.radius= Math.pow((Math.pow((coord[0]-this.origX),2),(Math.pow((coord[1]-this.origY),2))),1/2)
        this.contextDraft.arc(this.origX, this.origY, this.radius,0, Math.PI*2,true)
        this.contextDraft.stroke();
      }
    // onDragging(){}

    onMouseMove() {}

    onMouseUp(coord,event){
      this.clearCanvas();
      this.contextReal.strokeStyle = "red";
      this.contextReal.strokeStyle = strokeColorIndicator.style.backgroundColor;
      this.contextReal.lineJoin = "round";
      this.contextReal.lineWidth = $("#lineWidth").val();

      this.contextReal.beginPath();
      this.radius= Math.pow((Math.pow((coord[0]-this.origX),2),(Math.pow((coord[1]-this.origY),2))),1/2)
      this.contextReal.arc(this.origX, this.origY, this.radius,0, Math.PI*2,true)
      this.contextReal.stroke();
      push();
    //   this.contextReal.fillStyle = fillColorIndicator.style.backgroundColor;
    //   this.contextReal.fill();
    }
    // onMouseUp(){}
    onMouseLeave() {}
    onMouseEnter() {}

    clearCanvas = () =>{
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        )
    }


}
