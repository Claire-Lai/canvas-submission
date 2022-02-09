let strokeColorIndicator = document.getElementById("strokeColorIndicator")
const strokeColorPicker = new iro.ColorPicker("#strokeColorPicker",{
    width:100, color:"#fff"
});
strokeColorPicker.on("color:change",function(color){
    strokeColorIndicator.style.backgroundColor=color.hexString
})