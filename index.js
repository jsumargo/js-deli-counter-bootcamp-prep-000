var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    var first = katzDeliLine[0];
    katzDeli.shift();
    return `Currently serving ${first}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i ++){
      
    }
  } else {
    return "The line is currently empty.";
  }
}
