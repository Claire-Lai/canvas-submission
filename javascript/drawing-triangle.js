class DrawingTriangle1 extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextDraft,contextReal) {
      super();
      this.contextDraft = contextDraft;
      this.contextReal = contextReal;
      this.count = 0;
  
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      // Fill in the color
      this.contextDraft.strokeStyle = "red";
      this.contextDraft.strokeStyle = strokeColorIndicator.style.backgroundColor;
      // Kind of line
      this.contextDraft.lineJoin = "round";
      // Width of line
      this.contextDraft.lineWidth = $("#lineWidth").val();
      // Drawing the line here
      if(this.count===0){
        this.origX = coord[0];
        this.origY = coord[1]
      }
    }

    // Clicking and removing your mouse
    onDragging(coord, event) {
        if(this.count===0){
            this.clearCanvas();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY); 
            this.secondX=coord[0];
            this.secondY=coord[1]
            this.contextDraft.lineTo(this.secondX,this.secondY);
            this.contextDraft.stroke(); 
        }
        else if(this.count===1){
            this.clearCanvas();
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY); 
            this.contextDraft.lineTo(this.secondX,this.secondY);
            this.thirdX=coord[0];
            this.thirdY=coord[1]
            this.contextDraft.lineTo(this.thirdX,this.thirdY);
            this.contextDraft.closePath();
            this.contextDraft.stroke(); 
        }
    }
  
    onMouseMove() {}
    onMouseUp(coord,event) {
        this.contextReal.strokeStyle = "red";
        this.contextReal.strokeStyle = strokeColorIndicator.style.backgroundColor;
        // Kind of line
        this.contextReal.lineJoin = "round";
        // Width of line
        this.contextReal.lineWidth = $("#lineWidth").val();

        if(this.count===0){
            this.count++;
            console.log(this.count)
        }

        else if(this.count===1){
            this.clearCanvas();
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.lineTo(this.secondX,this.secondY);
            this.contextReal.lineTo(this.thirdX,this.thirdY);
            this.contextReal.closePath();
            this.contextReal.stroke();
            this.count=0;
            console.log(this.count);
            push()
        }
    }  
  
  
    // }
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
  
  
  
  