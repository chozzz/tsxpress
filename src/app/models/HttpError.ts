export class HttpError extends Error {
  error: string;
  entities: any[];
  status: number;

  constructor(error: string, message: string, entities: any[], status: number) {
    super(message);
    this.error = error;
    this.entities = entities || [];
    this.status = status;
  }
}
