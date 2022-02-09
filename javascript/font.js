let font = document.getElementById("font")
$("#font").on('change',(event)=>{
    font= $(event.currentTarget).val();
    console.log(`'${font}'`)
})
