function messageBienvenue(genre,nom){
    let saluer = "";
  
    if (genre === "M"){
      saluer = "Mr";
    } else (genre === 'F'){
      saluer = "Mme";
    }
    console.log('Bonjour ${saluer} ${nom}');
  }
  messageBienvenue('F',Sarah);
  messageBienvenue('M',Nabil);
  
  for (let i = 1; i <= 5; i++) {
    let line = "*";
    
    console.log(line);
  }
  
  for (let i = 1; i <= 5; i++) {
    let line = "*";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
  function messageBienvenue(genre,nom){
  let saluer = "";
  if (genre === "M"){
    saluer = "Mr";
  } else (genre === 'F'){
    saluer = "Mme";
  }
  console.log('Bonjour ${saluer} ${nom}');
  }
  
  messageBienvenue('F',Sara);
  messageBienvenue('M',Nabil)
  
  
  
  
  
  function MaxNumber(x, y, z) 
   {
    let max_num = 0;
    if (x > y)
    {
      max_num = x;
    } else
    {
      max_num = y;
    }
    if (z > max_num) 
    {
      max_num = z;
    }
    return max_num;
  }
  
  console.log(MaxNumber(1,0,1));
  console.log(MaxNumber(0,-10,-20));
  
  
  
  
  
  
  function NumbersMax(a,b,c){
    return Math.max(a,b,c);
  }
  console.log(NumbersMax(1,0,8)); 
  
   let n = prompt("Entrez un nombre :");
  
  for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
          console.log(i);
      }
  }
  
  
  
   for (let i = 0; i < 5; i++) {
      let ligne = "*";
      for (let j = 1; j <= i; j++) {
        ligne += "*";
      }
      console.log(ligne);
    }
   
  
  for (let i = 0; i < 5; i--) {
    let line = "*";
    for (let j = 1; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
  
  
  
  for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
  }
    
  
  let f = 5;
  for (let i = 1; i<=f; i--){
    let starts = "";
  
    for (let j = 0; j < i; j--){
      starts += "*";
    }
    console.log(stars);
  }
  
    let notes = [];
  let note;
  let conteur = 0;
  let max = 0;
  let somme = 0;
  
  do{
      note = Number(prompt('please entre a valid number', 0));
  
  
      if(!isNaN(note) && note > 0 && note <= 20){
          conteur++;
      notes.push(note);
  
      if(max < note){
          max = note;
      }
  
      somme += note;
  
  } else {
      alert('Note invalid')
  } 
  
  } while(conteur < 10 );
  
  console.log(notes);
  console.log('la moyenne egal ${somme/10}');
  console.log('la note maximal est ${max}');
  
  
  const days = [];
  let input;
  const reversedArray = [];
  
  for(let i = days.length - 1; i >= 0; i--) {
    const valueAtIndex = days[i]
  
    reversedArray.push(valueAtIndex)
    
  }
  input = Number(prompt('please entre names'));
  console.log(reversedArray);
  
  let prompt = true;
  while (prompt) {
    const input = prompt("Enter a day to add (or 'stop' to finish):");
  
    if (input === "stop") {
      prompt = false;
    } else {
      days.push(input);
    }
  }
  