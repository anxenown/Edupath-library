
const seedBooks = [
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html"
  },
  {
    "title": "The Adventures of Sherlock Holmes",
    "author": "Arthur Conan Doyle",
    "category": "Mystery",
    "cover": "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html"
  },
  {
    "title": "Frankenstein",
    "author": "Mary Wollstonecraft Shelley",
    "category": "Horror",
    "cover": "https://covers.openlibrary.org/b/id/8379991-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/84/pg84-images.html"
  },
  {
    "title": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "category": "Fantasy",
    "cover": "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11/pg11-images.html"
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/174/pg174-images.html"
  },
  {
    "title": "Dracula",
    "author": "Bram Stoker",
    "category": "Horror",
    "cover": "https://covers.openlibrary.org/b/id/8104861-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/345/pg345-images.html"
  },
  {
    "title": "Moby Dick",
    "author": "Herman Melville",
    "category": "Adventure",
    "cover": "https://covers.openlibrary.org/b/id/555526-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2701/pg2701-images.html"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "category": "Historical",
    "cover": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2600/pg2600-images.html"
  },
  {
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "category": "Adventure",
    "cover": "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1184/pg1184-images.html"
  },
  {
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231875-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1400/pg1400-images.html"
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "category": "Romance",
    "cover": "https://covers.openlibrary.org/b/id/8228697-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1260/pg1260-images.html"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "category": "Romance",
    "cover": "https://covers.openlibrary.org/b/id/8228695-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/768/pg768-images.html"
  },
  {
    "title": "The Adventures of Tom Sawyer",
    "author": "Mark Twain",
    "category": "Adventure",
    "cover": "https://covers.openlibrary.org/b/id/8231812-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74/pg74-images.html"
  },
  {
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "category": "Adventure",
    "cover": "https://covers.openlibrary.org/b/id/8231809-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/76/pg76-images.html"
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231981-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2554/pg2554-images.html"
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231983-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28054/pg28054-images.html"
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Romance",
    "cover": "https://covers.openlibrary.org/b/id/8231988-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1399/pg1399-images.html"
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231879-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2680/pg2680-images.html"
  },
  {
    "title": "The Iliad",
    "author": "Homer",
    "category": "Epic",
    "cover": "https://covers.openlibrary.org/b/id/8231861-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/6130/pg6130-images.html"
  },
  {
    "title": "The Odyssey",
    "author": "Homer",
    "category": "Epic",
    "cover": "https://covers.openlibrary.org/b/id/8231863-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1727/pg1727-images.html"
  },
  {
    "title": "The Republic",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231871-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1497/pg1497-images.html"
  },
  {
    "title": "The Trial",
    "author": "Franz Kafka",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231873-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/784/pg784-images.html"
  },
  {
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231874-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5200/pg5200-images.html"
  },
  {
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "category": "Historical",
    "cover": "https://covers.openlibrary.org/b/id/8231899-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/135/pg135-images.html"
  },
  {
    "title": "The Hound of the Baskervilles",
    "author": "Arthur Conan Doyle",
    "category": "Mystery",
    "cover": "https://covers.openlibrary.org/b/id/8231911-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2852/pg2852-images.html"
  },
  {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "category": "Historical",
    "cover": "https://covers.openlibrary.org/b/id/8231905-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/98/pg98-images.html"
  },
  {
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "category": "Adventure",
    "cover": "https://covers.openlibrary.org/b/id/8231925-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/996/pg996-images.html"
  },
  {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "category": "Epic",
    "cover": "https://covers.openlibrary.org/b/id/8231931-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/8800/pg8800-images.html"
  },
  {
    "title": "Paradise Lost",
    "author": "John Milton",
    "category": "Epic",
    "cover": "https://covers.openlibrary.org/b/id/8231941-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/20/pg20-images.html"
  },
  {
    "title": "Beowulf",
    "author": "Anonymous",
    "category": "Epic",
    "cover": "https://covers.openlibrary.org/b/id/8231946-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/16328/pg16328-images.html"
  },
  {
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231951-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/26690/pg26690-images.html"
  },
  {
    "title": "For Whom the Bell Tolls",
    "author": "Ernest Hemingway",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231953-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/29673/pg29673-images.html"
  },
  {
    "title": "A Farewell to Arms",
    "author": "Ernest Hemingway",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231955-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28110/pg28110-images.html"
  },
  {
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231957-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/67117/pg67117-images.html"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8225637-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html"
  },
  {
    "title": "Tender Is the Night",
    "author": "F. Scott Fitzgerald",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231961-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74355/pg74355-images.html"
  },
  {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231963-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/422/pg422-images.html"
  },
  {
    "title": "As I Lay Dying",
    "author": "William Faulkner",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231965-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/223/pg223-images.html"
  },
  {
    "title": "Light in August",
    "author": "William Faulkner",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231967-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/546/pg546-images.html"
  },
  {
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231971-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/158/pg158-images.html"
  },
  {
    "title": "Beloved",
    "author": "Toni Morrison",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231973-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/812/pg812-images.html"
  },
  {
    "title": "Song of Solomon",
    "author": "Toni Morrison",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231975-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1234/pg1234-images.html"
  },
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231977-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/385/pg385-images.html"
  },
  {
    "title": "No Longer at Ease",
    "author": "Chinua Achebe",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8231979-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/256/pg256-images.html"
  },
  {
    "title": "The Stranger",
    "author": "Albert Camus",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231980-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/35284/pg35284-images.html"
  },
  {
    "title": "The Plague",
    "author": "Albert Camus",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231982-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/38612/pg38612-images.html"
  },
  {
    "title": "The Myth of Sisyphus",
    "author": "Albert Camus",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231984-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4417/pg4417-images.html"
  },
  {
    "title": "Nausea",
    "author": "Jean-Paul Sartre",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231986-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/421/pg421-images.html"
  },
  {
    "title": "Being and Nothingness",
    "author": "Jean-Paul Sartre",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8231987-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1016/pg1016-images.html"
  },
  {
    "title": "Les Fleurs du Mal",
    "author": "Charles Baudelaire",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231989-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/6090/pg6090-images.html"
  },
  {
    "title": "The Raven and Other Poems",
    "author": "Edgar Allan Poe",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1065/pg1065-images.html"
  },
  {
    "title": "Leaves of Grass",
    "author": "Walt Whitman",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231992-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1322/pg1322-images.html"
  },
  {
    "title": "Paradise Lost",
    "author": "John Milton",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231994-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/20/pg20-images.html"
  },
  {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/8800/pg8800-images.html"
  },
  {
    "title": "Inferno",
    "author": "Dante Alighieri",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8231998-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1005/pg1005-images.html"
  },
  {
    "title": "Purgatorio",
    "author": "Dante Alighieri",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232000-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1006/pg1006-images.html"
  },
  {
    "title": "Paradiso",
    "author": "Dante Alighieri",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232002-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1007/pg1007-images.html"
  },
  {
    "title": "The Cantos",
    "author": "Ezra Pound",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232004-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1700/pg1700-images.html"
  },
  {
    "title": "The Waste Land",
    "author": "T.S. Eliot",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232006-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1322/pg1322-images.html"
  },
  {
    "title": "Four Quartets",
    "author": "T.S. Eliot",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232008-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1760/pg1760-images.html"
  },
  {
    "title": "Moby Dick",
    "author": "Herman Melville",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232010-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2701/pg2701-images.html"
  },
  {
    "title": "Bartleby, the Scrivener",
    "author": "Herman Melville",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232012-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11231/pg11231-images.html"
  },
  {
    "title": "Billy Budd",
    "author": "Herman Melville",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232014-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/10621/pg10621-images.html"
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232016-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2554/pg2554-images.html"
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232018-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28054/pg28054-images.html"
  },
  {
    "title": "Notes from Underground",
    "author": "Fyodor Dostoevsky",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232020-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/600/pg600-images.html"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232022-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2600/pg2600-images.html"
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232024-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1399/pg1399-images.html"
  },
  {
    "title": "The Death of Ivan Ilyich",
    "author": "Leo Tolstoy",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232026-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/10743/pg10743-images.html"
  },
  {
    "title": "Resurrection",
    "author": "Leo Tolstoy",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232028-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/205/pg205-images.html"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232030-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html"
  },
  {
    "title": "Sense and Sensibility",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232032-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/161/pg161-images.html"
  },
  {
    "title": "Emma",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232034-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/158/pg158-images.html"
  },
  {
    "title": "Mansfield Park",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232036-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/141/pg141-images.html"
  },
  {
    "title": "Northanger Abbey",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232038-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/121/pg121-images.html"
  },
  {
    "title": "Persuasion",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232040-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/105/pg105-images.html"
  },
  {
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232042-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/766/pg766-images.html"
  },
  {
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232044-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1400/pg1400-images.html"
  },
  {
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232046-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/730/pg730-images.html"
  },
  {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232048-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/98/pg98-images.html"
  },
  {
    "title": "Bleak House",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232050-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1023/pg1023-images.html"
  },
  {
    "title": "Hard Times",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232052-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/786/pg786-images.html"
  },
  {
    "title": "Little Dorrit",
    "author": "Charles Dickens",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232054-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/963/pg963-images.html"
  },
  {
    "title": "The Idiot",
    "author": "Fyodor Dostoevsky",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232056-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2638/pg2638-images.html"
  },
  {
    "title": "Demons",
    "author": "Fyodor Dostoevsky",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232058-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/360/pg360-images.html"
  },
  {
    "title": "The Trial",
    "author": "Franz Kafka",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232060-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7846/pg7846-images.html"
  },
  {
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232062-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5200/pg5200-images.html"
  },
  {
    "title": "The Castle",
    "author": "Franz Kafka",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232064-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7070/pg7070-images.html"
  },
  {
    "title": "The Trial and Death of Socrates",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232066-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1656/pg1656-images.html"
  },
  {
    "title": "The Republic",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232068-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1497/pg1497-images.html"
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232070-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2680/pg2680-images.html"
  },
  {
    "title": "Nicomachean Ethics",
    "author": "Aristotle",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232072-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/8438/pg8438-images.html"
  },
  {
    "title": "Politics",
    "author": "Aristotle",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232074-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/6762/pg6762-images.html"
  },
  {
    "title": "Beyond Good and Evil",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232076-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4363/pg4363-images.html"
  },
  {
    "title": "Thus Spoke Zarathustra",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232078-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1998/pg1998-images.html"
  },
  {
    "title": "The Genealogy of Morals",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232080-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/38769/pg38769-images.html"
  },
  {
    "title": "Thus Spake Zarathustra",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232082-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1998/pg1998-images.html"
  },
  {
    "title": "Beyond the Pleasure Principle",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232084-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/52275/pg52275-images.html"
  },
  {
    "title": "The Interpretation of Dreams",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232086-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/8296/pg8296-images.html"
  },
  {
    "title": "Psychopathology of Everyday Life",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232088-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/38914/pg38914-images.html"
  },
  {
    "title": "Man and His Symbols",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232090-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28810/pg28810-images.html"
  },
  {
    "title": "The Archetypes and the Collective Unconscious",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232092-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14857/pg14857-images.html"
  },
  {
    "title": "The Ego and the Id",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232094-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/52062/pg52062-images.html"
  },
  {
    "title": "Civilization and Its Discontents",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232096-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/21939/pg21939-images.html"
  },
  {
    "title": "Beyond Freedom and Dignity",
    "author": "B.F. Skinner",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232098-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/12345/pg12345-images.html"
  },
  {
    "title": "Walden",
    "author": "Henry David Thoreau",
    "category": "Non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232100-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/205/pg205-images.html"
  },
  {
    "title": "Civil Disobedience",
    "author": "Henry David Thoreau",
    "category": "Non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232102-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71/pg71-images.html"
  },
  {
    "title": "On the Duty of Civil Disobedience",
    "author": "Henry David Thoreau",
    "category": "Non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232104-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71/pg71-images.html"
  },
  {
    "title": "The Prince",
    "author": "Niccolò Machiavelli",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232106-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1232/pg1232-images.html"
  },
  {
    "title": "Discourses on Livy",
    "author": "Niccolò Machiavelli",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232108-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14096/pg14096-images.html"
  },
  {
    "title": "Leviathan",
    "author": "Thomas Hobbes",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232110-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3207/pg3207-images.html"
  },
  {
    "title": "Two Treatises of Government",
    "author": "John Locke",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232112-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7370/pg7370-images.html"
  },
  {
    "title": "An Essay Concerning Human Understanding",
    "author": "John Locke",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232114-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/10615/pg10615-images.html"
  },
  {
    "title": "The Social Contract",
    "author": "Jean-Jacques Rousseau",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232116-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46333/pg46333-images.html"
  },
  {
    "title": "Emile",
    "author": "Jean-Jacques Rousseau",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232118-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5427/pg5427-images.html"
  },
  {
    "title": "On Liberty",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232120-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/34901/pg34901-images.html"
  },
  {
    "title": "Utilitarianism",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232122-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11224/pg11224-images.html"
  },
  {
    "title": "The Subjection of Women",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232124-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/27074/pg27074-images.html"
  },
  {
    "title": "The Art of War",
    "author": "Sun Tzu",
    "category": "Military",
    "cover": "https://covers.openlibrary.org/b/id/8232126-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/132/pg132-images.html"
  },
  {
    "title": "On War",
    "author": "Carl von Clausewitz",
    "category": "Military",
    "cover": "https://covers.openlibrary.org/b/id/8232128-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/19455/pg19455-images.html"
  },
  {
    "title": "Democracy in America",
    "author": "Alexis de Tocqueville",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232130-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/815/pg815-images.html"
  },
  {
    "title": "The Wealth of Nations",
    "author": "Adam Smith",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232132-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3300/pg3300-images.html"
  },
  {
    "title": "The Theory of Moral Sentiments",
    "author": "Adam Smith",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232134-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/150/pg150-images.html"
  },
  {
    "title": "Capital",
    "author": "Karl Marx",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232136-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/514/pg514-images.html"
  },
  {
    "title": "The Communist Manifesto",
    "author": "Karl Marx & Friedrich Engels",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232138-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/61/pg61-images.html"
  },
  {
    "title": "Das Kapital, Volume II",
    "author": "Karl Marx",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232140-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4280/pg4280-images.html"
  },
  {
    "title": "Principles of Political Economy",
    "author": "John Stuart Mill",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232142-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30106/pg30106-images.html"
  },
  {
    "title": "A Treatise of Human Nature",
    "author": "David Hume",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232144-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4705/pg4705-images.html"
  },
  {
    "title": "An Inquiry Concerning Human Understanding",
    "author": "David Hume",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232146-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/9662/pg9662-images.html"
  },
  {
    "title": "The History of England",
    "author": "David Hume",
    "category": "History",
    "cover": "https://covers.openlibrary.org/b/id/8232148-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/17960/pg17960-images.html"
  },
  {
    "title": "A Short History of England",
    "author": "David Hume",
    "category": "History",
    "cover": "https://covers.openlibrary.org/b/id/8232150-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13252/pg13252-images.html"
  },
  {
    "title": "The Decline and Fall of the Roman Empire",
    "author": "Edward Gibbon",
    "category": "History",
    "cover": "https://covers.openlibrary.org/b/id/8232152-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/25717/pg25717-images.html"
  },
  {
    "title": "The History of the Peloponnesian War",
    "author": "Thucydides",
    "category": "History",
    "cover": "https://covers.openlibrary.org/b/id/8232154-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7142/pg7142-images.html"
  },
  {
    "title": "The Republic",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232156-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1497/pg1497-images.html"
  },
  {
    "title": "The Laws",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232158-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2017/pg2017-images.html"
  },
  {
    "title": "Phaedrus",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232160-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1636/pg1636-images.html"
  },
  {
    "title": "Symposium",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232162-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1600/pg1600-images.html"
  },
  {
    "title": "Apology",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232164-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1656/pg1656-images.html"
  },
  {
    "title": "Crito",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232166-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1670/pg1670-images.html"
  },
  {
    "title": "The Parmenides",
    "author": "Plato",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232168-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1657/pg1657-images.html"
  },
  {
    "title": "Critique of Pure Reason",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232170-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4280/pg4280-images.html"
  },
  {
    "title": "Critique of Practical Reason",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232172-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5684/pg5684-images.html"
  },
  {
    "title": "Critique of Judgment",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232174-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5106/pg5106-images.html"
  },
  {
    "title": "Groundwork of the Metaphysics of Morals",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232176-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5682/pg5682-images.html"
  },
  {
    "title": "Prolegomena to Any Future Metaphysics",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232178-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/39488/pg39488-images.html"
  },
  {
    "title": "The Critique of Pure Reason (abridged)",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232180-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4280/pg4280-images.html"
  },
  {
    "title": "Meditations on First Philosophy",
    "author": "René Descartes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232182-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/59/pg59-images.html"
  },
  {
    "title": "Discourse on the Method",
    "author": "René Descartes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232184-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/59/pg59-images.html"
  },
  {
    "title": "Principles of Philosophy",
    "author": "René Descartes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232186-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/306/pg306-images.html"
  },
  {
    "title": "Discourse on the Method of Rightly Conducting One's Reason",
    "author": "René Descartes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232188-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/59/pg59-images.html"
  },
  {
    "title": "Ethics",
    "author": "Baruch Spinoza",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232190-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/929/pg929-images.html"
  },
  {
    "title": "Tractatus Theologico-Politicus",
    "author": "Baruch Spinoza",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232192-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/992/pg992-images.html"
  },
  {
    "title": "Leviathan",
    "author": "Thomas Hobbes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232194-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3207/pg3207-images.html"
  },
  {
    "title": "De Cive",
    "author": "Thomas Hobbes",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232196-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5688/pg5688-images.html"
  },
  {
    "title": "The Prince",
    "author": "Niccolò Machiavelli",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232198-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1232/pg1232-images.html"
  },
  {
    "title": "Discourses on Livy",
    "author": "Niccolò Machiavelli",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232200-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/10827/pg10827-images.html"
  },
  {
    "title": "The Social Contract",
    "author": "Jean-Jacques Rousseau",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232202-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46321/pg46321-images.html"
  },
  {
    "title": "Emile, or On Education",
    "author": "Jean-Jacques Rousseau",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232204-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5427/pg5427-images.html"
  },
  {
    "title": "Confessions",
    "author": "Jean-Jacques Rousseau",
    "category": "Autobiography",
    "cover": "https://covers.openlibrary.org/b/id/8232206-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3800/pg3800-images.html"
  },
  {
    "title": "On the Origin of Species",
    "author": "Charles Darwin",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232208-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1228/pg1228-images.html"
  },
  {
    "title": "The Descent of Man",
    "author": "Charles Darwin",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232210-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2300/pg2300-images.html"
  },
  {
    "title": "The Expression of the Emotions in Man and Animals",
    "author": "Charles Darwin",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232212-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1227/pg1227-images.html"
  },
  {
    "title": "Principia Mathematica",
    "author": "Isaac Newton",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232214-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28233/pg28233-images.html"
  },
  {
    "title": "Opticks",
    "author": "Isaac Newton",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232216-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/33504/pg33504-images.html"
  },
  {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "category": "Science",
    "cover": "https://covers.openlibrary.org/b/id/8232218-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/48903/pg48903-images.html"
  },
  {
    "title": "The Interpretation of Dreams",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232220-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/15489/pg15489-images.html"
  },
  {
    "title": "Three Essays on the Theory of Sexuality",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232222-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5500/pg5500-images.html"
  },
  {
    "title": "Beyond the Pleasure Principle",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232224-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/572/pg572-images.html"
  },
  {
    "title": "Civilization and Its Discontents",
    "author": "Sigmund Freud",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232226-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/414/pg414-images.html"
  },
  {
    "title": "Man and His Symbols",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232228-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/563/pg563-images.html"
  },
  {
    "title": "Psychological Types",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232230-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3550/pg3550-images.html"
  },
  {
    "title": "The Archetypes and the Collective Unconscious",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232232-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/450/pg450-images.html"
  },
  {
    "title": "The Red Book",
    "author": "Carl Jung",
    "category": "Psychology",
    "cover": "https://covers.openlibrary.org/b/id/8232234-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/16580/pg16580-images.html"
  },
  {
    "title": "Walden",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232236-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/205/pg205-images.html"
  },
  {
    "title": "Civil Disobedience",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232238-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71/pg71-images.html"
  },
  {
    "title": "The Autobiography of Benjamin Franklin",
    "author": "Benjamin Franklin",
    "category": "Autobiography",
    "cover": "https://covers.openlibrary.org/b/id/8232240-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/148/pg148-images.html"
  },
  {
    "title": "Poor Richard's Almanack",
    "author": "Benjamin Franklin",
    "category": "Reference",
    "cover": "https://covers.openlibrary.org/b/id/8232242-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/105/pg105-images.html"
  },
  {
    "title": "The Federalist Papers",
    "author": "Alexander Hamilton, James Madison, John Jay",
    "category": "Political Science",
    "cover": "https://covers.openlibrary.org/b/id/8232244-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1404/pg1404-images.html"
  },
  {
    "title": "Democracy and Education",
    "author": "John Dewey",
    "category": "Education",
    "cover": "https://covers.openlibrary.org/b/id/8232246-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/852/pg852-images.html"
  },
  {
    "title": "Experience and Education",
    "author": "John Dewey",
    "category": "Education",
    "cover": "https://covers.openlibrary.org/b/id/8232248-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/576/pg576-images.html"
  },
  {
    "title": "The Wealth of Nations",
    "author": "Adam Smith",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232250-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3300/pg3300-images.html"
  },
  {
    "title": "An Inquiry into the Nature and Causes of the Wealth of Nations",
    "author": "Adam Smith",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232252-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1182/pg1182-images.html"
  },
  {
    "title": "Capital",
    "author": "Karl Marx",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232254-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/61/pg61-images.html"
  },
  {
    "title": "Das Kapital, Volume II",
    "author": "Karl Marx",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232256-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/55017/pg55017-images.html"
  },
  {
    "title": "Das Kapital, Volume III",
    "author": "Karl Marx",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232258-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/55018/pg55018-images.html"
  },
  {
    "title": "The Communist Manifesto",
    "author": "Karl Marx, Friedrich Engels",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232260-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/61/pg61-images.html"
  },
  {
    "title": "Principles of Economics",
    "author": "Alfred Marshall",
    "category": "Economics",
    "cover": "https://covers.openlibrary.org/b/id/8232262-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3300/pg3300-images.html"
  },
  {
    "title": "On Liberty",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232264-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/34901/pg34901-images.html"
  },
  {
    "title": "Utilitarianism",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "cover": "https://covers.openlibrary.org/b/id/8232266-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11224/pg11224-images.html"
  },
  {
    "title": "The Subjection of Women",
    "author": "John Stuart Mill",
    "category": "Feminism",
    "cover": "https://covers.openlibrary.org/b/id/8232268-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/27090/pg27090-images.html"
  },
  {
    "title": "A Vindication of the Rights of Woman",
    "author": "Mary Wollstonecraft",
    "category": "Feminism",
    "cover": "https://covers.openlibrary.org/b/id/8232270-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3420/pg3420-images.html"
  },
  {
    "title": "Frankenstein",
    "author": "Mary Wollstonecraft Shelley",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232272-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/84/pg84-images.html"
  },
  {
    "title": "Dracula",
    "author": "Bram Stoker",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232274-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/345/pg345-images.html"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232276-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html"
  },
  {
    "title": "Sense and Sensibility",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232278-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/161/pg161-images.html"
  },
  {
    "title": "Emma",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232280-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/158/pg158-images.html"
  },
  {
    "title": "Mansfield Park",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232282-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/141/pg141-images.html"
  },
  {
    "title": "Northanger Abbey",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232284-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/121/pg121-images.html"
  },
  {
    "title": "Persuasion",
    "author": "Jane Austen",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232286-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/105/pg105-images.html"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232288-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/768/pg768-images.html"
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232290-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1260/pg1260-images.html"
  },
  {
    "title": "Villette",
    "author": "Charlotte Brontë",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232292-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/974/pg974-images.html"
  },
  {
    "title": "The Tenant of Wildfell Hall",
    "author": "Anne Brontë",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232294-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/768/pg768-images.html"
  },
  {
    "title": "Agnes Grey",
    "author": "Anne Brontë",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232296-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/767/pg767-images.html"
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232298-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/174/pg174-images.html"
  },
  {
    "title": "The Importance of Being Earnest",
    "author": "Oscar Wilde",
    "category": "Fiction",
    "cover": "https://covers.openlibrary.org/b/id/8232300-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/844/pg844-images.html"
  },
  {
    "title": "De Profundis",
    "author": "Oscar Wilde",
    "category": "Autobiography",
    "cover": "https://covers.openlibrary.org/b/id/8232302-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/902/pg902-images.html"
  },
  {
    "title": "The Ballad of Reading Gaol",
    "author": "Oscar Wilde",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232304-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/928/pg928-images.html"
  },
  {
    "title": "Leaves of Grass",
    "author": "Walt Whitman",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232306-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1322/pg1322-images.html"
  },
  {
    "title": "Song of Myself",
    "author": "Walt Whitman",
    "category": "Poetry",
    "cover": "https://covers.openlibrary.org/b/id/8232308-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1322/pg1322-images.html"
  },
  {
    "title": "The Silicon Jungle",
    "author": "David Rothman",
    "category": "Software Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL3584691M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/54360/pg54360-images.html"
  },
  {
    "title": "Free as in Freedom: Richard Stallman's Crusade for Free Software",
    "author": "Sam Williams",
    "category": "Software Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL8811875M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5768/pg5768-images.html"
  },
  {
    "title": "Computers—The machines we think with",
    "author": "D. S. Halacy",
    "category": "Software Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL5951370M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/72572/pg72572-images.html"
  },
  {
    "title": "The Secret Guide to Computers",
    "author": "Russ Walter",
    "category": "Software Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL24213293M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/672/pg672-images.html"
  },
  {
    "title": "On Handling the Data",
    "author": "M. I. Mayfield",
    "category": "Data Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL25892280M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/23429/pg23429-images.html"
  },
  {
    "title": "The Principles of Science",
    "author": "William Stanley Jevons",
    "category": "Data Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL25456252M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74864/pg74864-images.html"
  },
  {
    "title": "The Consumer Viewpoint",
    "author": "Mildred Maddocks",
    "category": "Product Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL33052364M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7428/pg7428-images.html"
  },
  {
    "title": "Cyclopedia of Commerce, Accountancy, Business Administration",
    "author": "Various",
    "category": "Product Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23327987M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46448/pg46448-images.html"
  },
  {
    "title": "Industrial Progress and Human Economics",
    "author": "James Hartness",
    "category": "Product Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23549134M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11090/pg11090-images.html"
  },
{
    "title": "How to Conduct a Small Mail Order Business",
    "author": "W. E. Skinner",
    "category": "Product Manager",
    "cover": "https://www.gutenberg.org/cache/epub/71267/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71267/pg71267-images.html"
  },
  {
    "title": "A Book About Doctors",
    "author": "John Cordy Jeaffreson",
    "category": "Doctor",
    "cover": "https://covers.openlibrary.org/b/olid/OL18074814M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/40161/pg40161-images.html"
  },
  {
    "title": "Notes on Nursing: What It Is, and What It Is Not",
    "author": "Florence Nightingale",
    "category": "Doctor",
    "cover": "https://covers.openlibrary.org/b/id/8245470-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/17366/pg17366-images.html"
  },
  {
    "title": "Doctor and Patient",
    "author": "S. Weir Mitchell",
    "category": "Doctor",
    "cover": "https://covers.openlibrary.org/b/olid/OL7232617M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/15004/pg15004-images.html"
  },
  {
    "title": "Eminent Doctors: Their Lives and Their Work",
    "author": "G. T. Bettany",
    "category": "Doctor",
    "cover": "https://covers.openlibrary.org/b/olid/OL24616486M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/69406/pg69406-images.html"
  },
  {
    "title": "Dr. Breen's Practice",
    "author": "William Dean Howells",
    "category": "Doctor",
    "cover": "https://covers.openlibrary.org/b/olid/OL6520857M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3364/pg3364-images.html"
  },
  {
    "title": "The Principles of Science",
    "author": "William Stanley Jevons",
    "category": "Teacher",
    "cover": "https://covers.openlibrary.org/b/olid/OL25456252M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74864/pg74864-images.html"
  },
  {
    "title": "A Brief Course in the Teaching Process",
    "author": "George Drayton Strayer",
    "category": "Teacher",
    "cover": "https://covers.openlibrary.org/b/olid/OL7239117M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/72495/pg72495-images.html"
  },
  {
    "title": "The Training of Teachers in the United States of America",
    "author": "Amy Blanche Bramwell",
    "category": "Teacher",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564792M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/69766/pg69766-images.html"
  },
  {
    "title": "Twenty Talks to Teachers",
    "author": "Thomas E. Sanders",
    "category": "Teacher",
    "cover": "https://covers.openlibrary.org/b/olid/OL26314132M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/67315/pg67315-images.html"
  },
  {
    "title": "The Delmonico Cook Book",
    "author": "Alessandro Filippini",
    "category": "Chef",
    "cover": "https://covers.openlibrary.org/b/olid/OL24620624M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60285/pg60285-images.html"
  },
  {
    "title": "La Cuisine Creole",
    "author": "Lafcadio Hearn",
    "category": "Chef",
    "cover": "https://covers.openlibrary.org/b/olid/OL7230583M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/75027/pg75027-images.html"
  },
  {
    "title": "The Hotel St. Francis Cook Book",
    "author": "Victor Hirtzler",
    "category": "Chef",
    "cover": "https://covers.openlibrary.org/b/olid/OL23371856M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/39550/pg39550-images.html"
  },
  {
    "title": "Marion Harland's Complete Cook Book",
    "author": "Marion Harland",
    "category": "Chef",
    "cover": "https://covers.openlibrary.org/b/olid/OL23437485M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/64459/pg64459-images.html"
  },
  {
    "title": "The Aeroplane Speaks",
    "author": "H. Barber",
    "category": "Pilot",
    "cover": "https://covers.openlibrary.org/b/olid/OL7143955M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/21791/pg21791-images.html"
  },
  {
    "title": "An Aviator's Field Book",
    "author": "Oswald Bölcke",
    "category": "Pilot",
    "cover": "https://covers.openlibrary.org/b/olid/OL23664174M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30011/pg30011-images.html"
  },
{
    "title": "Test Pilot",
    "author": "James Collins",
    "category": "Pilot",
    "cover": "https://www.gutenberg.org/cache/epub/34589/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/34589/pg34589-images.html"
  },
  {
    "title": "The Aeroplane Speaks",
    "author": "H. Barber",
    "category": "Pilot",
    "cover": "https://covers.openlibrary.org/b/olid/OL7143955M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/818/pg818-images.html"
  },
  {
    "title": "Vitruvius: The Ten Books on Architecture",
    "author": "Vitruvius",
    "category": "Architect",
    "cover": "https://covers.openlibrary.org/b/id/120825-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/20239/pg20239-images.html"
  },
  {
    "title": "The Principles of Gothic Ecclesiastical Architecture",
    "author": "Matthew Holbeche Bloxam",
    "category": "Architect",
    "cover": "https://covers.openlibrary.org/b/olid/OL23449787M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/70079/pg70079-images.html"
  },
  {
    "title": "How To Study Architecture",
    "author": "Charles H. Caffin",
    "category": "Architect",
    "cover": "https://covers.openlibrary.org/b/olid/OL23344604M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60830/pg60830-images.html"
  },
  {
    "title": "A History of Architecture in All Countries",
    "author": "James Fergusson",
    "category": "Architect",
    "cover": "https://covers.openlibrary.org/b/olid/OL23449788M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/55871/pg55871-images.html"
  },
  {
    "title": "Printing in Relation to Graphic Art",
    "author": "George French",
    "category": "Graphic Designer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564800M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/54349/pg54349-images.html"
  },
  {
    "title": "Applied Design for Printers",
    "author": "Harry Lawrence Gage",
    "category": "Graphic Designer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23664175M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30804/pg30804-images.html"
  },
  {
    "title": "The Art & Practice of Typography",
    "author": "Edmund G. Gress",
    "category": "Graphic Designer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564801M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/54476/pg54476-images.html"
  },
  {
    "title": "Will Bradley, His Chap Book",
    "author": "Will Bradley",
    "category": "Graphic Designer",
    "cover": "https://covers.openlibrary.org/b/olid/OL24620625M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/63426/pg63426-images.html"
  },
  {
    "title": "A Reference Hand-Book for Nurses",
    "author": "Amanda K. Beck",
    "category": "Nurse",
    "cover": "https://covers.openlibrary.org/b/olid/OL24620626M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71184/pg71184-images.html"
  },
  {
    "title": "Notes on Nursing",
    "author": "Florence Nightingale",
    "category": "Nurse",
    "cover": "https://covers.openlibrary.org/b/id/8245470-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/17366/pg17366-images.html"
  },
  {
    "title": "Humanistic Nursing",
    "author": "Josephine G. Paterson and Loretta T. Zderad",
    "category": "Nurse",
    "cover": "https://covers.openlibrary.org/b/olid/OL24213294M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/25020/pg25020-images.html"
  },
  {
    "title": "Lessons from the Life of Florence Nightingale",
    "author": "Charlotte A. Aikens",
    "category": "Nurse",
    "cover": "https://covers.openlibrary.org/b/olid/OL24620627M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74935/pg74935-images.html"
  },
  {
    "title": "Accounting Theory and Practice, Volume I",
    "author": "Roy Bernard Kester",
    "category": "Accountant",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564802M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/70367/pg70367-images.html"
  },
  {
    "title": "Cyclopedia of Commerce, Accountancy, Business Administration",
    "author": "Various",
    "category": "Accountant",
    "cover": "https://covers.openlibrary.org/b/olid/OL23327987M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46545/pg46545-images.html"
  },
  {
    "title": "Accounting Theory and Practice, Volume II",
    "author": "Roy Bernard Kester",
    "category": "Accountant",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564803M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/70556/pg70556-images.html"
  },
  {
    "title": "De Mortuis Nil Nisi Bona",
    "author": "Ernest Evan Spicer and Ernest Charles Pegler",
    "category": "Accountant",
    "cover": "https://covers.openlibrary.org/b/olid/OL24620628M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/41888/pg41888-images.html"
  },
  {
    "title": "The Consumer Viewpoint",
    "author": "Mildred Maddocks",
    "category": "Marketing Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL33052364M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7428/pg7428-images.html"
  },
  {
    "title": "I Go A-Marketing",
    "author": "Henrietta Sowle",
    "category": "Marketing Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564804M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/55566/pg55566-images.html"
  },
  {
    "title": "The Psychology of Salesmanship",
    "author": "William Walker Atkinson",
    "category": "Marketing Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564805M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/41510/pg41510-images.html"
  },
  {
    "title": "Certain Success",
    "author": "Norval A. Hawkins",
    "category": "Marketing Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564806M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14589/pg14589-images.html"
  },
  {
    "title": "Transactions of the American Society of Civil Engineers, vol. LXVIII",
    "author": "Various",
    "category": "Civil Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564807M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/18065/pg18065-images.html"
  },
  {
    "title": "The Life of Isambard Kingdom Brunel, Civil Engineer",
    "author": "Isambard Brunel",
    "category": "Civil Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564808M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/55596/pg55596-images.html"
  },
  {
    "title": "The Life of Thomas Telford, Civil Engineer",
    "author": "Samuel Smiles",
    "category": "Civil Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564809M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/939/pg939-images.html"
  },
  {
    "title": "Transactions of the American Society of Civil Engineers, vol. LXXII",
    "author": "Various",
    "category": "Civil Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564810M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/27632/pg27632-images.html"
  },
  {
    "title": "The Engineer's Sketch-Book of Mechanical Movements",
    "author": "Thomas Walter Barber",
    "category": "Mechanical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564811M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/58391/pg58391-images.html"
  },
  {
    "title": "The Economy of Workshop Manipulation",
    "author": "John Richards",
    "category": "Mechanical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564812M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/57120/pg57120-images.html"
  },
  {
    "title": "Mechanics: The Science of Machinery",
    "author": "A. Russell Bond",
    "category": "Mechanical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564813M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/49445/pg49445-images.html"
  },
  {
    "title": "Rough and Tumble Engineering",
    "author": "James H. Maggard",
    "category": "Mechanical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564814M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11164/pg11164-images.html"
  },
  {
    "title": "Hawkins Electrical Guide v. 07",
    "author": "N. Hawkins",
    "category": "Electrical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564815M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/49253/pg49253-images.html"
  },
  {
    "title": "Hawkins Electrical Guide v. 04",
    "author": "N. Hawkins",
    "category": "Electrical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564816M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/49512/pg49512-images.html"
  },
  {
    "title": "Hawkins Electrical Guide v. 06",
    "author": "N. Hawkins",
    "category": "Electrical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564817M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/49252/pg49252-images.html"
  },
  {
    "title": "The Standard Electrical Dictionary",
    "author": "T. O'Conor Sloane",
    "category": "Electrical Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564818M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/26535/pg26535-images.html"
  },
  {
    "title": "The Principles of Psychology",
    "author": "William James",
    "category": "Psychologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564819M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/57628/pg57628-images.html"
  },
  {
    "title": "Psychology: A Study of Mental Life",
    "author": "Robert S. Woodworth",
    "category": "Psychologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564820M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/31382/pg31382-images.html"
  },
  {
    "title": "Psychology: An Elementary Text-Book",
    "author": "Hermann Ebbinghaus",
    "category": "Psychologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564821M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/52823/pg52823-images.html"
  },
  {
    "title": "Harvard Psychological Studies, Volume 1",
    "author": "Hugo Münsterberg",
    "category": "Psychologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564822M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/16266/pg16266-images.html"
  },
  {
    "title": "The Elements of Journalism",
    "author": "Bill Kovach and Tom Rosenstiel",
    "category": "Journalist",
    "cover": "https://covers.openlibrary.org/b/id/390573-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=The+Elements+of+Journalism"
  },
  {
    "title": "All the President's Men",
    "author": "Carl Bernstein, Bob Woodward",
    "category": "Journalist",
    "cover": "https://covers.openlibrary.org/b/id/12989059-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=All+the+President%27s+Men"
  },
  {
    "title": "On Writing Well",
    "author": "William Zinsser",
    "category": "Journalist",
    "cover": "https://covers.openlibrary.org/b/id/20450-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=On+Writing+Well"
  },
  {
    "title": "The Journalist and the Murderer",
    "author": "Janet Malcolm",
    "category": "Journalist",
    "cover": "https://covers.openlibrary.org/b/id/6806808-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=The+journalist+and+the+murderer"
  },
  {
    "title": "Plays, Acting and Music: A Book Of Theory",
    "author": "Arthur Symons",
    "category": "Actor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564823M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13928/pg13928-images.html"
  },
  {
    "title": "Stage Confidences: Talks About Players and Play Acting",
    "author": "Clara Morris",
    "category": "Actor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564824M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13277/pg13277-images.html"
  },
  {
    "title": "The Drama",
    "author": "Sir Henry Irving",
    "category": "Actor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564825M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13483/pg13483-images.html"
  },
  {
    "title": "On the Stage—and Off",
    "author": "Jerome K. Jerome",
    "category": "Actor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564826M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/48475/pg48475-images.html"
  },
  {
    "title": "The Art of Music, Vol. 01",
    "author": "Daniel Gregory Mason",
    "category": "Musician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564827M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/65658/pg65658-images.html"
  },
  {
    "title": "Music: An Art and a Language",
    "author": "Walter Raymond Spalding",
    "category": "Musician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564828M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30560/pg30560-images.html"
  },
  {
    "title": "The Principles of Economics, with Applications to Practical Problems",
    "author": "Frank A. Fetter",
    "category": "Musician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564829M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/65658/pg65658-images.html"
  },
  {
    "title": "The Art of Music, Vol. 01",
    "author": "Daniel Gregory Mason",
    "category": "Musician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564827M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/65658/pg65658-images.html"
  },
  {
    "title": "How to Write a Novel",
    "author": "Anonymous",
    "category": "Writer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564830M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/38887/pg38887-images.html"
  },
  {
    "title": "A First Book in Writing English",
    "author": "Edwin Herbert Lewis",
    "category": "Writer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564831M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/62265/pg62265-images.html"
  },
  {
    "title": "The Century Handbook of Writing",
    "author": "Garland Greever and Easley S. Jones",
    "category": "Writer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564832M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30294/pg30294-images.html"
  },
  {
    "title": "The Technique of Fiction Writing",
    "author": "Robert Saunders Dowst",
    "category": "Writer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564833M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/32092/pg32092-images.html"
  },
  {
    "title": "Photography in the Studio and in the Field",
    "author": "E. M. Estabrooke",
    "category": "Photographer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564834M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/42982/pg42982-images.html"
  },
  {
    "title": "The Barnet Book of Photography",
    "author": "Various",
    "category": "Photographer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564835M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/40468/pg40468-images.html"
  },
  {
    "title": "Pictorial Photography in America 1921",
    "author": "Pictorial Photographers of America",
    "category": "Photographer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564836M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/28023/pg28023-images.html"
  },
  {
    "title": "Naturalistic Photography",
    "author": "P. H. Emerson",
    "category": "Photographer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564837M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56833/pg56833-images.html"
  },
  {
    "title": "A Text-Book of Veterinary Anatomy",
    "author": "Septimus Sisson",
    "category": "Veterinarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564838M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/75996/pg75996-images.html"
  },
  {
    "title": "Text Book of Veterinary Medicine, Volume 3",
    "author": "James Law",
    "category": "Veterinarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564839M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/72531/pg72531-images.html"
  },
  {
    "title": "The Veterinarian",
    "author": "Charles James Korinek",
    "category": "Veterinarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564840M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/20279/pg20279-images.html"
  },
  {
    "title": "Text Book of Veterinary Medicine, Volume 1",
    "author": "James Law",
    "category": "Veterinarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564841M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71015/pg71015-images.html"
  },
  {
    "title": "A History of Dentistry from the most Ancient Times until the end of the Eighteenth Century",
    "author": "Vincenzo Guerini",
    "category": "Dentist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564842M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/51991/pg51991-images.html"
  },
  {
    "title": "Tin Foil and Its Combinations for Filling Teeth",
    "author": "Henry Lovejoy Ambler",
    "category": "Dentist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564843M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/26840/pg26840-images.html"
  },
  {
    "title": "The Archives of Dentistry, Vol. VII, No. 12, December 1890",
    "author": "Various",
    "category": "Dentist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564844M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/61132/pg61132-images.html"
  },
  {
    "title": "McTeague",
    "author": "Frank Norris",
    "category": "Dentist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564845M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/165/pg165-images.html"
  },
  {
    "title": "Chronicles of Pharmacy, Vol. 1",
    "author": "A. C. Wootton",
    "category": "Pharmacist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564846M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/65872/pg65872-images.html"
  },
  {
    "title": "Chronicles of Pharmacy, Vol. 2",
    "author": "A. C. Wootton",
    "category": "Pharmacist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564847M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/67414/pg67414-images.html"
  },
  {
    "title": "The Mystery and Romance of Alchemy and Pharmacy",
    "author": "C. J. S. Thompson",
    "category": "Pharmacist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564848M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/47004/pg47004-images.html"
  },
  {
    "title": "New York Journal of Pharmacy, Volume 1",
    "author": "Various",
    "category": "Pharmacist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564849M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/53828/pg53828-images.html"
  },
  {
    "title": "Mysteries of Police and Crime, Vol. 1",
    "author": "Arthur Griffiths",
    "category": "Police Officer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564850M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46846/pg46846-images.html"
  },
  {
    "title": "The Secret Agent",
    "author": "Joseph Conrad",
    "category": "Police Officer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564851M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/974/pg974-images.html"
  },
  {
    "title": "Police!!! A Tale of the Royal Northwest Mounted Police",
    "author": "Robert W. Chambers",
    "category": "Police Officer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564852M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/18515/pg18515-images.html"
  },
  {
    "title": "A Tale of the Royal Northwest Mounted Police",
    "author": "Ridgwell Cullum",
    "category": "Police Officer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564853M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/15940/pg15940-images.html"
  },
  {
    "title": "An Amateur Fireman",
    "author": "James Otis",
    "category": "Firefighter",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564854M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/33242/pg33242-images.html"
  },
  {
    "title": "Tom Swift Among the Fire Fighters",
    "author": "Victor Appleton",
    "category": "Firefighter",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564855M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1363/pg1363-images.html"
  },
  {
    "title": "Firemen and Their Exploits",
    "author": "F. M. Holmes",
    "category": "Firefighter",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564856M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/50575/pg50575-images.html"
  },
  {
    "title": "The Third Alarm",
    "author": "Harvey Jerrold O'Higgins",
    "category": "Firefighter",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564857M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56439/pg56439-images.html"
  },
  {
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "category": "Entrepreneur",
    "cover": "https://covers.openlibrary.org/b/id/7104760-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=The+Lean+Startup"
  },
  {
    "title": "Great Fortunes, and How They Were Made",
    "author": "James Dabney McCabe",
    "category": "Entrepreneur",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564858M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/15161/pg15161-images.html"
  },
  {
    "title": "Makers",
    "author": "Cory Doctorow",
    "category": "Entrepreneur",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564859M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/34527/pg34527-images.html"
  },
  {
    "title": "Get-Rich-Quick Wallingford",
    "author": "George Randolph Chester",
    "category": "Entrepreneur",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564860M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/37010/pg37010-images.html"
  },
  {
    "title": "Forging Ahead in Business",
    "author": "Alexander Hamilton Institute",
    "category": "Financial Advisor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564861M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/37924/pg37924-images.html"
  },
  {
    "title": "How to Become Rich",
    "author": "William Windsor",
    "category": "Financial Advisor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564862M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/21646/pg21646-images.html"
  },
  {
    "title": "How to Collect a Doctor Bill",
    "author": "Frank P. Davis",
    "category": "Financial Advisor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564863M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/37748/pg37748-images.html"
  },
  {
    "title": "Financial Crime and Corruption",
    "author": "Sam Vaknin",
    "category": "Financial Advisor",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564864M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30632/pg30632-images.html"
  },
  {
    "title": "Industrial Progress and Human Economics",
    "author": "James Hartness",
    "category": "Human Resources Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23549134M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11090/pg11090-images.html"
  },
  {
    "title": "Manpower",
    "author": "Lincoln C. Andrews",
    "category": "Human Resources Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564865M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/45942/pg45942-images.html"
  },
  {
    "title": "Increasing Human Efficiency in Business",
    "author": "Walter Dill Scott",
    "category": "Human Resources Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564866M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1319/pg1319-images.html"
  },
  {
    "title": "The Knack of Managing",
    "author": "Lewis K. Urquhart and Herbert Watson",
    "category": "Human Resources Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564867M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/39761/pg39761-images.html"
  },
  {
    "title": "Selling Things",
    "author": "Orison Swett Marden",
    "category": "Sales Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564868M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/59176/pg59176-images.html"
  },
  {
    "title": "The Psychology of Salesmanship",
    "author": "William Walker Atkinson",
    "category": "Sales Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564805M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/41510/pg41510-images.html"
  },
  {
    "title": "Certain Success",
    "author": "Norval A. Hawkins",
    "category": "Sales Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564806M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14589/pg14589-images.html"
  },
  {
    "title": "Retail Shoe Salesmanship",
    "author": "George F. Hamilton",
    "category": "Sales Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564869M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/54962/pg54962-images.html"
  },
  {
    "title": "Industrial Progress and Human Economics",
    "author": "James Hartness",
    "category": "Operations Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23549134M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/11090/pg11090-images.html"
  },
  {
    "title": "Up To Date Business",
    "author": "Seymour Eaton",
    "category": "Operations Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564870M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/20531/pg20531-images.html"
  },
  {
    "title": "Business Administration",
    "author": "Various",
    "category": "Operations Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564871M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56018/pg56018-images.html"
  },
  {
    "title": "How Department Stores Are Carried On",
    "author": "W. B. Phillips",
    "category": "Operations Manager",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564872M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/31073/pg31073-images.html"
  },
  {
    "title": "Debian GNU/Linux : Guide to Installation and Usage",
    "author": "John Goerzen",
    "category": "Web Developer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564873M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/6527/pg6527-images.html"
  },
  {
    "title": "The Century Handbook of Writing",
    "author": "Garland Greever and Easley S. Jones",
    "category": "Web Developer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564832M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30294/pg30294-images.html"
  },
  {
    "title": "Thought-Culture",
    "author": "William Walker Atkinson",
    "category": "Web Developer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564874M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/41519/pg41519-images.html"
  },
  {
    "title": "Practical Mechanics For Boys",
    "author": "J. S. Zerbe",
    "category": "Web Developer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564875M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/22298/pg22298-images.html"
  },
  {
    "title": "How to Analyze People on Sight",
    "author": "Elsie Lincoln Benedict and Ralph Paine Benedict",
    "category": "Data Analyst",
    "cover": "https://covers.openlibrary.org/b/olid/OL30601M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30601/pg30601-images.html"
  },
  {
    "title": "A Short List of Scientific Books June 1914",
    "author": "E. & F. N. Spon",
    "category": "Data Analyst",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564876M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/58489/pg58489-images.html"
  },
  {
    "title": "The Elements Of Qualitative Chemical Analysis",
    "author": "Julius Stieglitz",
    "category": "Data Analyst",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564877M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/44986/pg44986-images.html"
  },
  {
    "title": "From Newton to Einstein",
    "author": "Benjamin Harrow",
    "category": "Data Analyst",
    "cover": "https://covers.openlibrary.org/b/olid/OL60271M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60271/pg60271-images.html"
  },
  {
    "title": "Lex",
    "author": "W. T. Haggert",
    "category": "AI Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564878M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/51362/pg51362-images.html"
  },
  {
    "title": "Eddie",
    "author": "Frank Riley",
    "category": "AI Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564879M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60443/pg60443-images.html"
  },
  {
    "title": "Free as in Freedom: Richard Stallman's Crusade for Free Software",
    "author": "Sam Williams",
    "category": "AI Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL8811875M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5768/pg5768-images.html"
  },
  {
    "title": "Giant brains; or, Machines that think",
    "author": "Edmund Callis Berkeley",
    "category": "AI Engineer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564880M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/68991/pg68991-images.html"
  },
  {
    "title": "Terminal Compromise",
    "author": "Winn Schwartau",
    "category": "Cybersecurity Specialist",
    "cover": "https://covers.openlibrary.org/b/olid/OL79M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/79/pg79-images.html"
  },
  {
    "title": "Hacking, madness and obsession on the electronic frontier",
    "author": "Suelette Dreyfus",
    "category": "Cybersecurity Specialist",
    "cover": "https://covers.openlibrary.org/b/olid/OL4686M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4686/pg4686-images.html"
  },
  {
    "title": "The Hacker Crackdown",
    "author": "Bruce Sterling",
    "category": "Cybersecurity Specialist",
    "cover": "https://covers.openlibrary.org/b/olid/OL101M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/101/pg101-images.html"
  },
  {
    "title": "Euthenics, the science of controllable environment",
    "author": "Ellen H. Richards",
    "category": "Environmental Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564881M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/31508/pg31508-images.html"
  },
  {
    "title": "Research methods in ecology",
    "author": "Frederic E. Clements",
    "category": "Environmental Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564882M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/73420/pg73420-images.html"
  },
  {
    "title": "Conservation Through Engineering",
    "author": "Franklin K. Lane",
    "category": "Environmental Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564883M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/31899/pg31899-images.html"
  },
  {
    "title": "The Great Drought",
    "author": "S. P. Meek",
    "category": "Environmental Scientist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564884M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/29326/pg29326-images.html"
  },
  {
    "title": "Text Book of Biology, Part 1: Vertebrata",
    "author": "H. G. Wells",
    "category": "Biologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564885M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/21781/pg21781-images.html"
  },
  {
    "title": "The Descent of Man",
    "author": "Charles Darwin",
    "category": "Biologist",
    "cover": "https://covers.openlibrary.org/b/id/12705617-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2300/pg2300-images.html"
  },
  {
    "title": "Histoire des légumes",
    "author": "Georges Gibault",
    "category": "Biologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564886M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/74864/pg74864-images.html"
  },
  {
    "title": "The Principles of Chemistry, Volume I",
    "author": "Dmitry Ivanovich Mendeleyev",
    "category": "Chemist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564887M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30775/pg30775-images.html"
  },
  {
    "title": "Chemistry for Beginners",
    "author": "Hereward Carrington",
    "category": "Chemist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564888M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/75203/pg75203-images.html"
  },
  {
    "title": "An Introduction to Chemical Science",
    "author": "Rufus P. Williams",
    "category": "Chemist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564889M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/3708/pg3708-images.html"
  },
  {
    "title": "The Chemical History of a Candle",
    "author": "Michael Faraday",
    "category": "Chemist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564890M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14474/pg14474-images.html"
  },
  {
    "title": "The Highest Aim of the Physicist",
    "author": "Henry Augustus Rowland",
    "category": "Physicist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564891M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/70791/pg70791-images.html"
  },
  {
    "title": "From Newton to Einstein",
    "author": "Benjamin Harrow",
    "category": "Physicist",
    "cover": "https://covers.openlibrary.org/b/olid/OL60271M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60271/pg60271-images.html"
  },
  {
    "title": "The Special and General Theory",
    "author": "Albert Einstein",
    "category": "Physicist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564892M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5001/pg5001-images.html"
  },
  {
    "title": "The Mathematicians",
    "author": "Arthur Feldman",
    "category": "Mathematician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564893M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/29140/pg29140-images.html"
  },
  {
    "title": "Memorabilia Mathematica",
    "author": "Robert Édouard Moritz",
    "category": "Mathematician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564894M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/44730/pg44730-images.html"
  },
  {
    "title": "The Mathematical Analysis of Logic",
    "author": "George Boole",
    "category": "Mathematician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564895M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/36884/pg36884-images.html"
  },
  {
    "title": "A Course of Pure Mathematics",
    "author": "G. H. Hardy",
    "category": "Mathematician",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564896M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/38769/pg38769-images.html"
  },
  {
    "title": "The Economist",
    "author": "Xenophon",
    "category": "Economist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564897M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1173/pg1173-images.html"
  },
  {
    "title": "The Economist, Volume 1, No. 3",
    "author": "Various",
    "category": "Economist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564898M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/27647/pg27647-images.html"
  },
  {
    "title": "From Newton to Einstein",
    "author": "Benjamin Harrow",
    "category": "Economist",
    "cover": "https://covers.openlibrary.org/b/olid/OL60271M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/60271/pg60271-images.html"
  },
  {
    "title": "Malthus and his Work",
    "author": "James Bonar",
    "category": "Economist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564899M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/68099/pg68099-images.html"
  },
  {
    "title": "The Sociological Imagination",
    "author": "C. Wright Mills",
    "category": "Sociologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL24213295M-L.jpg",
    "url": "https://www.gutenberg.org/ebooks/search/?query=The+Sociological+Imagination"
  },
  {
    "title": "Don't Marry; or, Advice on How, When and Who to Marry",
    "author": "James McCabe",
    "category": "Sociologist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564900M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13138/pg13138-images.html"
  },
  {
    "title": "The Historians' History of the World, Volume 02",
    "author": "Henry Smith Williams",
    "category": "Historian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564901M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/52177/pg52177-images.html"
  },
  {
    "title": "The Historians' History of the World, Volume 06",
    "author": "Henry Smith Williams",
    "category": "Historian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564902M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/58124/pg58124-images.html"
  },
  {
    "title": "The Great Events by Famous Historians, Volume 05",
    "author": "Rossiter Johnson",
    "category": "Historian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564903M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/10151/pg10151-images.html"
  },
  {
    "title": "The Historians' History of the World, Volume 08",
    "author": "Henry Smith Williams",
    "category": "Historian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564904M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/63489/pg63489-images.html"
  },
  {
    "title": "The Library Assistant's Manual",
    "author": "F. John Cotton",
    "category": "Librarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564905M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46555/pg46555-images.html"
  },
  {
    "title": "A Librarian's Open Shelf",
    "author": "Arthur E. Bostwick",
    "category": "Librarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564906M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13430/pg13430-images.html"
  },
  {
    "title": "The Librarian at Play",
    "author": "Edmund Lester Pearson",
    "category": "Librarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564907M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46933/pg46933-images.html"
  },
  {
    "title": "A Library Primer",
    "author": "John Cotton Dana",
    "category": "Librarian",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564908M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/15327/pg15327-images.html"
  },
  {
    "title": "Social Work",
    "author": "Richard C. Cabot",
    "category": "Social Worker",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564909M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/49545/pg49545-images.html"
  },
  {
    "title": "A Definition of Social Work",
    "author": "Alice S. Cheyney",
    "category": "Social Worker",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564910M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/69557/pg69557-images.html"
  },
  {
    "title": "The Social Work of the Salvation Army",
    "author": "Edwin Gifford Lamb",
    "category": "Social Worker",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564911M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30295/pg30295-images.html"
  },
  {
    "title": "Men and Things",
    "author": "Henry A. Atkinson",
    "category": "Social Worker",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564912M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/53018/pg53018-images.html"
  },
  {
    "title": "Strength and How to Obtain It",
    "author": "Eugen Sandow",
    "category": "Fitness Trainer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564913M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/65987/pg65987-images.html"
  },
  {
    "title": "Practical Training for Running, Walking, Rowing, Wrestling, Boxing",
    "author": "Various",
    "category": "Fitness Trainer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564914M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56398/pg56398-images.html"
  },
  {
    "title": "Daily Training",
    "author": "E. F. Benson",
    "category": "Fitness Trainer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564915M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56584/pg56584-images.html"
  },
  {
    "title": "Walker's Manly Exercises",
    "author": "Donald Walker",
    "category": "Fitness Trainer",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564916M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/69080/pg69080-images.html"
  },
  {
    "title": "Science in the Kitchen",
    "author": "E. E. Kellogg",
    "category": "Nutritionist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564917M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/2481/pg2481-images.html"
  },
  {
    "title": "Foods; Nutrition and Digestion",
    "author": "Susanna Cocroft",
    "category": "Nutritionist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564918M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/71988/pg71988-images.html"
  },
  {
    "title": "The Natural Food of Man",
    "author": "Hereward Carrington",
    "category": "Nutritionist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564919M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13138/pg13138-images.html"
  },
  {
    "title": "Food for the Traveler",
    "author": "Dora C. C. L. Roper",
    "category": "Nutritionist",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564920M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/13138/pg13138-images.html"
  },
  {
    "title": "Come Out of the Kitchen! A Romance",
    "author": "Alice Duer Miller",
    "category": "Real Estate Agent",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564921M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/33145/pg33145-images.html"
  },
  {
    "title": "How to Travel",
    "author": "Thomas W. Knox",
    "category": "Real Estate Agent",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564922M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/45162/pg45162-images.html"
  },
  {
    "title": "The Young Book Agent",
    "author": "Horatio Alger",
    "category": "Real Estate Agent",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564923M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/56756/pg56756-images.html"
  },
  {
    "title": "The Secret Agent",
    "author": "Joseph Conrad",
    "category": "Real Estate Agent",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564851M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/974/pg974-images.html"
  },
  {
    "title": "The Travelling Companions: A Story in Scenes",
    "author": "F. Anstey",
    "category": "Travel Agent",
    "cover": "https://covers.openlibrary.org/b/olid/OL23564924M-L.jpg",
    "url": "https://www.gutenberg.org/cache/epub/37691/pg37691-images.html"
  },
{
    "title": "How to Travel",
    "author": "Thomas W. Knox",
    "category": "Travel Agent",
    "cover": "https://www.gutenberg.org/cache/epub/45162/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/45162/pg45162-images.html"
  },
  {
    "title": "The Travels of Marco Polo — Volume 1",
    "author": "Marco Polo",
    "category": "Travel Agent",
    "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Marco_Polo_travels.png/220px-Marco_Polo_travels.png",
    "url": "https://www.gutenberg.org/cache/epub/10636/pg10636-images.html"
  },
  {
    "title": "Shifts and Expedients of Camp Life, Travel and Exploration",
    "author": "W. B. Lord",
    "category": "Travel Agent",
    "cover": "https://www.gutenberg.org/cache/epub/46446/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/46446/pg46446-images.html"
  },
  {
    "title": "The Psychology of Management",
    "author": "L. M. Gilbreth",
    "category": "Event Planner",
    "cover": "https://www.gutenberg.org/cache/epub/16256/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/16256/pg16256-images.html"
  },
  {
    "title": "Toaster's Handbook",
    "author": "Peggy Edmund and Harold W. Williams",
    "category": "Event Planner",
    "cover": "https://archive.org/download/toastershandbook0000unse/toastershandbook0000unse.jpg",
    "url": "https://www.gutenberg.org/cache/epub/12444/pg12444-images.html"
  },
  {
    "title": "How to Plan a Library Building for Library Work",
    "author": "Charles C. Soule",
    "category": "Event Planner",
    "cover": "https://www.gutenberg.org/cache/epub/64560/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/64560/pg64560-images.html"
  },
  {
    "title": "How to Analyze People on Sight",
    "author": "Elsie Lincoln Benedict and Ralph Paine Benedict",
    "category": "Event Planner",
    "cover": "https://www.gutenberg.org/cache/epub/30601/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/30601/pg30601-images.html"
  },
  {
    "title": "A Book About Lawyers",
    "author": "John Cordy Jeaffreson",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/40161/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/40161/pg40161-images.html"
  },
  {
    "title": "Famous Trials of History",
    "author": "George Henry Borrow",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/14592/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/14592/pg14592-images.html"
  },
  {
    "title": "The Trial",
    "author": "Franz Kafka",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/7849/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/7849/pg7849-images.html"
  },
  {
    "title": "The Path of the Law",
    "author": "Oliver Wendell Holmes Jr.",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/5063/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/5063/pg5063-images.html"
  },
  {
    "title": "The English Constitution",
    "author": "Walter Bagehot",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/4351/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/4351/pg4351-images.html"
  },
  {
    "title": "On Liberty",
    "author": "John Stuart Mill",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/34901/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/34901/pg34901-images.html"
  },
  {
    "title": "The Federalist Papers",
    "author": "Alexander Hamilton, James Madison, John Jay",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/1404/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/1404/pg1404-images.html"
  },
  {
    "title": "Commentaries on the Laws of England",
    "author": "William Blackstone",
    "category": "Lawyer",
    "cover": "https://www.gutenberg.org/cache/epub/29201/cover.jpg",
    "url": "https://www.gutenberg.org/cache/epub/29201/pg29201-images.html"
  }

];
export default seedBooks;
