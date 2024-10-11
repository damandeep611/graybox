// ? Object Iteration

// ? use of for ...in Loop
const peter = {
  author: "Peter Thiel",
  year: 2014,
  category: "Business",
  description:
    "A guide to building companies in an age of technological stagnation, emphasizing the importance of technological innovation and monopoly creation.",
};

for (const bookTitle in peter) {
  // Access the book object using the title as the key
  const book = peter[bookTitle];

  console.log(`Book Title: ${bookTitle}`);
  // Iterate through the properties of the current book object
  for (const property in book) {
    console.log(`  - ${property}: ${book[property]}`);
  }
}
