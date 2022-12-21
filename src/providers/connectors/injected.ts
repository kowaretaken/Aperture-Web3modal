import { ProviderNotFoundError, UserRejectedError } from '../index';
const ConnectToInjected = async () => {
  let provider = null;
  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new UserRejectedError("User Rejected");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else if (window.celo) {
    provider = window.celo;
  } else {
    throw new ProviderNotFoundError("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToInjected;
