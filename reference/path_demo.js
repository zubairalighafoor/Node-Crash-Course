const path=require('path');
// Base File Name
console.log(path.basename(__filename));
// Directory Name
console.log(path.dirname(__filename));
// Extension
console.log(path.extname(__filename));
// Create Path Object
console.log(path.parse(__filename).base);
// Concatenate Path
console.log(path.join(__dirname,'test','hello.html'));