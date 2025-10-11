export class ArtistAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ArtistAlreadyExistsError";
  }
}