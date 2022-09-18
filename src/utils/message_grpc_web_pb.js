/**
 * @fileoverview gRPC-Web generated client stub for io.rulelogic.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var common_common_pb = require('./common_pb.js');
const proto = {};
proto.io = {};
proto.io.rulelogic = {};
proto.io.rulelogic.api = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.MessageServiceClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.MessageServicePromiseClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.MessagePullRequest,
 *   !proto.io.rulelogic.api.MessagePullResponse>}
 */
const methodDescriptor_MessageService_pullMessages =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.MessageService/pullMessages',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.MessagePullRequest,
    proto.io.rulelogic.api.MessagePullResponse,
    /**
     * @param {!proto.io.rulelogic.api.MessagePullRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.MessagePullResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.MessagePullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.MessagePullResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.MessagePullResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.MessageServiceClient.prototype.pullMessages = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.MessageService/pullMessages',
    request,
    metadata || {},
    methodDescriptor_MessageService_pullMessages,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.MessagePullRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.MessagePullResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.MessageServicePromiseClient.prototype.pullMessages =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.MessageService/pullMessages',
      request,
      metadata || {},
      methodDescriptor_MessageService_pullMessages
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.MessagePushRequest,
 *   !proto.io.rulelogic.api.MessagePushResponse>}
 */
const methodDescriptor_MessageService_pushMessage =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.MessageService/pushMessage',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.MessagePushRequest,
    proto.io.rulelogic.api.MessagePushResponse,
    /**
     * @param {!proto.io.rulelogic.api.MessagePushRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.MessagePushResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.MessagePushRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.MessagePushResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.MessagePushResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.MessageServiceClient.prototype.pushMessage = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.MessageService/pushMessage',
    request,
    metadata || {},
    methodDescriptor_MessageService_pushMessage,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.MessagePushRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.MessagePushResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.MessageServicePromiseClient.prototype.pushMessage =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.MessageService/pushMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_pushMessage
    );
  };

module.exports = proto.io.rulelogic.api;
