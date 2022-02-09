// let font = document.getElementById("font")
// $("#font").on('change',(event)=>{
//     font= $(event.currentTarget).val();
//     console.log(`'${font}'`)
// })

let fontSize = document.getElementById("fontSize")
$('#fontSize').on('input', function(event) {
    fontSize = $(event.currentTarget).val();
    console.log(`'${fontSize}'`)
  });
