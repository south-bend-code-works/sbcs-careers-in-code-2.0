const movies = [
    {
        "id": 0,
        "title": "Inception",
        "director": "Christopher Nolan",
        "year": "2010",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        "id": 1,
        "title": "The Matrix",
        "director": "Lana Wachowski, Lilly Wachowski",
        "year": "1999",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 2,
        "title": "12 Angry Men",
        "director": "Sidney Lumet",
        "year": "1957",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 3,
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "year": "1972",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 4,
        "title": "The Godfather Part II",
        "director": "Francis Ford Coppola",
        "year": "1974",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 5,
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "year": "2008",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
        "id": 6,
        "title": "12 Angry Men",
        "director": "Sidney Lumet",
        "year": "1957",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 7,
        "title": "Schindler's List",
        "director": "Steven Spielberg",
        "year": "1993",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 8,
        "title": "The Lord of the Rings: The Return of the King",
        "director": "Peter Jackson",
        "year": "2003",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 9,
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": "1994",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 10,
        "title": "The Good, the Bad and the Ugly",
        "director": "Sergio Leone",
        "year": "1966",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 11,
        "title": "Fight Club",
        "director": "David Fincher",
        "year": "1999",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 12,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "director": "Peter Jackson",
        "year": "2001",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 13,
        "title": "The Lord of the Rings: The Two Towers",
        "director": "Peter Jackson",
        "year": "2002",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 14,
        "title": "One Flew Over the Cuckoo's Nest",
        "director": "Milos Forman",
        "year": "1975",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 15,
        "title": "Goodfellas",
        "director": "Martin Scorsese",
        "year": "1990",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 16,
        "title": "Seven Samurai",
        "director": "Akira Kurosawa",
        "year": "1954",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZjliMWExOTMtZDQ3ZS00NWU3LWIyN2EtMjllNzk3ZTNlYzg4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 17,
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "director": "Irvin Kershner",
        "year": "1980",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 18,
        "title": "Forrest Gump",
        "director": "Robert Zemeckis",
        "year": "1994",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 19,
        "title": "City of God",
        "director": "Fernando Meirelles, K\u00e1tia Lund",
        "year": "2002",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 20,
        "title": "The Silence of the Lambs",
        "director": "Jonathan Demme",
        "year": "1991",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 21,
        "title": "Once Upon a Time in the West",
        "director": "Sergio Leone",
        "year": "1968",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZjYyNGY1MDEtN2I1MC00MGVhLTljZTYtODQ1NzQ0ODc2NzZlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 22,
        "title": "Seinfeld",
        "director": "Jerry Seinfeld",
        "year": "1989",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMmRjNjZjN2ItN2FkYi00ZDg0LWExN2EtMTU2ODUwNWU1M2NhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 23,
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "year": "2001",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 24,
        "title": "American History X",
        "director": "Tony Kaye",
        "year": "1998",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMzhiOTQ0NDItOTg0Zi00OGVmLWE0OGEtMTI4NDM0NWMxZWU4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 25,
        "title": "The Usual Suspects",
        "director": "Bryan Singer",
        "year": "1995",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 26,
        "title": "L\u00e9on: The Professional",
        "director": "Luc Besson",
        "year": "1994",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNGRkYTNhOWQtYmI0Ni00MjZhLWJmMzAtMTA2Mjg4NGNiNDU0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 27,
        "title": "Interstellar",
        "director": "Christopher Nolan",
        "year": "2014",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 28,
        "title": "Psycho",
        "director": "Alfred Hitchcock",
        "year": "1960",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 29,
        "title": "The Green Mile",
        "director": "Frank Darabont",
        "year": "1999",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg"
    },
    {
        "id": 30,
        "title": "Casablanca",
        "director": "Michael Curtiz",
        "year": "1942",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 31,
        "title": "City Lights",
        "director": "Charles Chaplin",
        "year": "1931",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BM2U4NjgzODUtODkyOC00YTE2LTlhNTItYzFlYmM1NTEzZDA2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 32,
        "title": "The Intouchables",
        "director": "Olivier Nakache, \u00c9ric Toledano",
        "year": "2011",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
    },
    {
        "id": 33,
        "title": "Modern Times",
        "director": "Charles Chaplin",
        "year": "1936",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BODVkZGFhNGQtYjdiYi00Njc4LWFmYTItNTlmNzJjMTg1ZDc5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 34,
        "title": "Raiders of the Lost Ark",
        "director": "Steven Spielberg",
        "year": "1981",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOGNhMjg2ZjgtYzk4Ni00MTViLTg1MmUtYzM2MDZiYjZlMmU3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 35,
        "title": "Rear Window",
        "director": "Alfred Hitchcock",
        "year": "1954",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BODZhOWI1ODgtMzdiOS00YjNkLTgwOGUtYmIyZDg5ZmQwMzQ1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 36,
        "title": "The Pianist",
        "director": "Roman Polanski",
        "year": "2002",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 37,
        "title": "The Departed",
        "director": "Martin Scorsese",
        "year": "2006",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg"
    },
    {
        "id": 38,
        "title": "The Lives of Others",
        "director": "Florian Henckel von Donnersmarck",
        "year": "2006",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYjM1N2Q0YWEtN2E5MC00NDM3LTk2NTEtMTc1NTk5OTA5ZGIzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 39,
        "title": "Saving Private Ryan",
        "director": "Steven Spielberg",
        "year": "1998",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 40,
        "title": "Life Is Beautiful",
        "director": "Roberto Benigni",
        "year": "1997",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 41,
        "title": "Sunset Boulevard",
        "director": "Billy Wilder",
        "year": "1950",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg"
    },
    {
        "id": 42,
        "title": "The Great Dictator",
        "director": "Charles Chaplin",
        "year": "1940",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMjc4ZjEwNDUtMjlmZS00NzQ4LTg2N2MtMGI3ZjMyMmM3ZDM2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 43,
        "title": "Cinema Paradiso",
        "director": "Giuseppe Tornatore",
        "year": "1988",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTljNzc4YWEtYTZlMS00ODMyLWIwMTAtNWQxY2VkMDEwYTk5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 44,
        "title": "Memento",
        "director": "Christopher Nolan",
        "year": "2000",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYmQ3MjliNjAtNWFiZS00YWI1LTlmZTktMzBiNDE1NjRhZjU0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 45,
        "title": "Apocalypse Now",
        "director": "Francis Ford Coppola",
        "year": "1979",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZDhiMTljYjYtODc1Yy00MmEwLTg2OTYtYmE1YTRmNDE4MmEwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 46,
        "title": "The Terminator",
        "director": "James Cameron",
        "year": "1984",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 47,
        "title": "Back to the Future",
        "director": "Robert Zemeckis",
        "year": "1985",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 48,
        "title": "Paths of Glory",
        "director": "Stanley Kubrick",
        "year": "1957",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNmQ2NmI2ODYtMDQzNS00NzQyLTkzZjgtZmZlYTQ5MTc1OWU3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "id": 49,
        "title": "The Dark Knight Rises",
        "director": "Christopher Nolan",
        "year": "2012",
        "poster": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
    }
];