class Movie {
  constructor({ id, title, director, release, country, genres, score }) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.release = release;
    this.country = country;
    this.genres = genres;
    this.score = score;

    this.validateIMDB(id);
    this.validateTitle(title);
    this.validateDirector(director);
    this.validateRelease(release);
    this.validateCountry(country);
    this.validateGenres(genres);
    this.validateScore(score);
  }

  static get listGenres() {
    return ["Action", "Adult", "Adventure", "Animation"];
  }

  static acceptedGenres() {
    return console.info(`Accepted Genres are: ${Movie.listGenres.join(", ")}`);
  }

  /**
   *
   * @param {property} property name of the property
   * @param {value} value value to validate
   * @returns return true if validate all
   */
  validateString(property, value) {
    if (!value) return console.warn(`${property} "${value}" is empty`);
    if (typeof value !== "string")
      return console.error(`${property} "${value}" entered, It's not a string`);

    return true;
  }

  validateLengthString(property, value, length) {
    if (value.length > length)
      return console.log(
        `${property} "${value}" exceeds the number of characters allowed (${length}) `
      );
    return true;
  }

  validateNumber(property, value) {
    if (!value) return console.warn(`${property} "${value}" is empty`);
    if (typeof value !== "number")
      return console.error(`${property} "${value}" entered, It's not a number`);

    return true;
  }

  validateArray(property, value) {
    if (!value) return console.warn(`${property} "${value}" is empty`);
    if (!(value instanceof Array))
      return console.warn(`${property} "${value}" entered, It's not an array`);
    if (value.length === 0)
      return console.error(`${property} "${value}" doesn't have data`);

    for (let character of value) {
      if (typeof character !== "string")
        return console.error(
          `The value "${character}" entered, It's not a string`
        );
      if (character === "")
        return console.error(`The value ${character} entered, it's empty`);
    }

    return true;
  }

  /**
   *
   * @param {id} id data to validate
   * @returns
   */
  validateIMDB(id) {
    if (this.validateString("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.log(
          `IMDB id "${id}" is invalid, it must be 9 characters`
        );
    }
  }

  validateTitle(title) {
    if (this.validateString("Title", title))
      this.validateLengthString("Title", title, 100);
  }

  validateDirector(director) {
    if (this.validateString("Director", director))
      this.validateLengthString("Director", director, 50);
  }

  validateRelease(release) {
    if (this.validateNumber("Release year", release)) {
      if (!/^([0-9]){4}$/.test(release))
        return console.log(
          `Release year "${release}" is invalid, it must be 4 digits`
        );
    }
  }

  validateCountry(country) {
    this.validateArray("Country", country);
  }

  validateGenres(genres) {
    if (this.validateArray("Genres", genres)) {
      for (const genre of genres) {
        // console.log(genre, Movie.listGenres.includes(genre));
        if (!Movie.listGenres.includes(genre)) {
          console.error(`Genre(s) invalid: ${genres.join(", ")}`);
          Movie.acceptedGenres();
        }
      }
    }
  }

  validateScore(score) {
    if (this.validateNumber("Score", score)) {
      return score < 0 || score > 10
        ? console.error(`The score must be a range between 0 and 10`)
        : (this.score = score.toFixed(1));
    }
  }

  card() {
    console.info(`
      Card Movie
      IMDB: ${this.id}
      Title: ${this.title}
      Director: ${this.director}
      Release year: ${this.release}
      Country: ${this.country.join("-")}
      Genres: ${this.genres.join(", ")}
      Score: ${this.score}
    `);
  }
}

// const movie = new Movie({
//   id: "tt1234587",
//   title: "any title",
//   director: "Robby",
//   release: 1999,
//   country: ["USA"],
//   genres: ["Action"],
//   score: 8,
// });

// movie.card();
// Movie.acceptedGenres();

const myMovies = [
  {
    id: "tt2222225",
    title: "Movie 1",
    director: "director 1",
    release: 2008,
    country: ["country1", "country2"],
    genres: ["Action"],
    score: 8,
  },
  {
    id: "tt1234585",
    title: "Movie 2",
    director: "Director 2",
    release: 2009,
    country: ["country2", "country5"],
    genres: ["Animation"],
    score: 8.8,
  },
];

myMovies.forEach((item) => new Movie(item).card());
