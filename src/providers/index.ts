import * as connectors from "./connectors";
import * as injected from "./injected";
import * as providers from "./providers";

export { connectors, injected, providers };

export class ProviderNotFoundError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, ProviderNotFoundError.prototype);
  }
}

export class UserRejectedError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, UserRejectedError.prototype);
  }
}
