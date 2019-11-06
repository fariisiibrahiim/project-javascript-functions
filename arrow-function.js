const tambahKata = (teks, perogatif, kali) => {
  let teksBaru = teks;

  for (let i = 0; i <= kali; i++) {
    teksBaru += perogatif;
  }
  console.log(teksBaru);
};

tambahKata("Piye Kabare", "!", 0);
tambahKata("Kumaha damang", "?", 3);
tambahKata("Piye Kabare", "!", -1);

/*
const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 0; i <= times; i++) {
    newText += mark;
  }

  console.log(newText);
};

addMarks("Hello", "!", 2); // Hello!
addMarks("Hello", "!", 3); // Hello!!!
addMarks("How are you", "?", 1); // How are you?
addMarks("How are you", "?", 2); // How are you??
*/
