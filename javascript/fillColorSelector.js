let fillColorIndicator = document.getElementById("fillColorIndicator")
const fillColorPicker = new iro.ColorPicker("#fillColorPicker",{
    width:100, color:"fff",borderRadius:0
});
fillColorPicker.on("color:change",function(color){
    fillColorIndicator.style.backgroundColor=color.hexString
})