  
let com = Math.floor(Math.random() * 100 + 1);

while(isNaN(com) || com == 0 || com > 100) {
    com = +prompt('COM son kiriting 1-100ch!');
}
 

for (let i = 5; i > 0; i--) {
  let user = +prompt('Toping sonni 1-100 ' + i + 'imkonyatiz bor');
    
     while (isNaN(user) || user == 0 || user > 100) {

       user = +prompt(`User son kiriting 1-100cha! ' ${i}  ' imkonyatiz bor`);

     }

     if (com == user) {
         alert('Abdumannon szni tabriklaydi!!!');
         break;
     } else if (i == 1) {
         alert('GAME OVER ' + com);
     } else if (com - user <= 3 && com - user >= -3) {
         alert('issiq');
     }  else if (com - user <= 6 && com - user >= -6) {
        alert('illiq');
     }  else if (com - user <= 9 && com - user >= -9) {
        alert('sovuroq');
     }  else if (com - user <= 15 && com - user >= -15) {
        alert('sovuq')
     }  else if (com - user <= 15 && com - user >= -15) {
        alert('Yana urinib korin');
     }   
 

}


  
