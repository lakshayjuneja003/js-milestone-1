function mixColors(color1, color2) {
    let result;
  
    switch(color1) {
      case 'red':
        switch(color2) {
          case 'red':
            result = 'red';
            break;
          case 'blue':
            result = 'purple';
            break;
          case 'yellow':
            result = 'orange';
            break;
          default:
            result = 'unknown';
        }
        break;
  
      case 'blue':
        switch(color2) {
          case 'red':
            result = 'purple';
            break;
          case 'blue':
            result = 'blue';
            break;
          case 'yellow':
            result = 'green';
            break;
          default:
            result = 'unknown';
        }
        break;
  
      case 'yellow':
        switch(color2) {
          case 'red':
            result = 'orange';
            break;
          case 'blue':
            result = 'green';
            break;
          case 'yellow':
            result = 'yellow';
            break;
          default:
            result = 'unknown';
        }
        break;
  
      default:
        result = 'unknown';
    }
  
    console.log(`Mixing ${color1} and ${color2} results in ${result}`);
  }
  
  // Example usage:
  mixColors('red', 'blue'); // Mixing red and blue results in purple
  mixColors('blue', 'yellow'); // Mixing blue and yellow results in green
  mixColors('green', 'purple'); // Mixing green and purple results in unknown
  
 