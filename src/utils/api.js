const {
  PartyServiceClient,
  PartyServicePromiseClient,
} = require('./party_grpc_web_pb');

const {
  RuleServiceClient,
  RuleServicePromiseClient,
} = require('./rule_grpc_web_pb');

const {
  ActionServiceClient,
  ActionServicePromiseClient,
} = require('./action_grpc_web_pb');

const _url = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://0.0.0.0:8080';

const callbackClient = new PartyServiceClient(_url);

const promiseClient = new PartyServicePromiseClient(_url);

const ruleClient = new RuleServicePromiseClient(_url);
const ruleClientSync = new RuleServiceClient(_url);

const actionClient = new ActionServicePromiseClient(_url);
const actionClientSync = new ActionServiceClient(_url);

if (typeof window !== 'undefined' && window.__GRPCWEB_DEVTOOLS__) {
  const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
  devInterceptors([
    callbackClient,
    promiseClient,
    ruleClientSync,
    ruleClient,
    actionClientSync,
    actionClient,
  ]);
}

module.exports = {
  _url,
  callbackClient,
  promiseClient,
  ruleClient,
  ruleClientSync,
  actionClient,
  actionClientSync,
};
