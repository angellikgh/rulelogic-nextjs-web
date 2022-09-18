const {
  PartyServiceClient,
  PartyServicePromiseClient,
} = require('./party_grpc_web_pb');

const {
  RuleServiceClient,
  RuleServicePromiseClient,
} = require('./rule_grpc_web_pb');

const _url = process.env.API_BASE_URL || 'http://0.0.0.0:8080';

const callbackClient = new PartyServiceClient(_url);

const promiseClient = new PartyServicePromiseClient(_url);

const ruleClient = new RuleServicePromiseClient(_url);
const ruleClientSync = new RuleServiceClient(_url);

if (typeof window !== 'undefined' && window.__GRPCWEB_DEVTOOLS__) {
  const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
  devInterceptors([callbackClient, promiseClient, ruleClientSync, ruleClient]);
}

module.exports = {
  _url,
  callbackClient,
  promiseClient,
  ruleClient,
  ruleClientSync,
};
