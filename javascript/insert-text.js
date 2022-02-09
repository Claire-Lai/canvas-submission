class InsertText extends PaintFunction{

    constructor(contextDraft,contextReal){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
    }

    onMouseDown(coord,event){
        this.addInput(coord[0],coord[1],event);
    }

    onDragging() {}

    onMouseMove() {}

    onMouseUp(coord,event){
      
      console.log("bye")
      push();
    }
    // onMouseUp(){}
    onMouseLeave() {}
    onMouseEnter() {}

    // Function to dynamically add an input box
    addInput(x,y,e){
        var input = document.createElement('input');
        input.type = "text";
        // this.input.id="inputid"
        input.style.position = "fixed";
        input.style.left = e.clientX + "px";
        input.style.top = e.clientY +"px";
        input.classList.add("input"); 
        input.style.color = strokeColorIndicator.style.backgroundColor;
        input.style.font = `${$("#fontSize").val()}px ${$("#font").val()}`;

        $("#canvas-draft").after(input);

        $(".input").keydown(
            (e)=>{
                var keyCode = e.keyCode;
                if (keyCode===13){
                    console.log($("#font").val());
                    console.log($("#fontSize").val());
                    this.contextReal.textBaseline = 'top';
                    this.contextReal.textAlign = 'left';
                    this.contextReal.font = `${$("#fontSize").val()}px ${$("#font").val()}`;
                    this.contextReal.fillStyle = strokeColorIndicator.style.backgroundColor;
                    console.log(this.contextReal.font);
                    this.contextReal.fillText(e.target.value,x,y);
                    $(".input").remove();
                    push();
                 
                }
            }
        );

        input.focus();

 

    }

}

