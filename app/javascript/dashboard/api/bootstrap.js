/* global axios */
import ApiClient from './ApiClient';

class BootstrapAPI extends ApiClient {
  constructor() {
    super('bootstrap', { accountScoped: true });
  }

  conversations() {
    return axios.get(`${this.url}/conversations`);
  }

  contacts() {
    return axios.get(`${this.url}/contacts`);
  }

  conversationLabels() {
    return axios.get(`${this.url}/conversation_labels`);
  }
}

export default new BootstrapAPI();
