const SolinftecIconMapping = {
  alarm: {x: 0, y: 0, width: 32, height: 32, mask: true},
  alert: {x: 32, y: 0, width: 32, height: 32, mask: true}
}

if(module.exports) {
  export default SolinftecIconMapping
} else {
  window["SolinftecIconMapping"] = SolinftecIconMapping
}

