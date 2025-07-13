export class ArtistAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ArtistAlreadyExistsError";
  }
}