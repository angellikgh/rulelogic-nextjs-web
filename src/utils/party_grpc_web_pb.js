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
proto.io.rulelogic.api = require('./party_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.PartyServiceClient = function (
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
proto.io.rulelogic.api.PartyServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.PartySearchRequest,
 *   !proto.io.rulelogic.api.PartySearchResponse>}
 */
const methodDescriptor_PartyService_getSingleRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/getSingleRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.PartySearchRequest,
    proto.io.rulelogic.api.PartySearchResponse,
    /**
     * @param {!proto.io.rulelogic.api.PartySearchRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartySearchResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.PartySearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartySearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartySearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.getSingleRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.PartyService/getSingleRecord',
    request,
    metadata || {},
    methodDescriptor_PartyService_getSingleRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.PartySearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartySearchResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.getSingleRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/getSingleRecord',
      request,
      metadata || {},
      methodDescriptor_PartyService_getSingleRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.PartySearchByKeyRequest,
 *   !proto.io.rulelogic.api.PartySearchByKeyResponse>}
 */
const methodDescriptor_PartyService_getSingleRecordByKey =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/getSingleRecordByKey',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.PartySearchByKeyRequest,
    proto.io.rulelogic.api.PartySearchByKeyResponse,
    /**
     * @param {!proto.io.rulelogic.api.PartySearchByKeyRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartySearchByKeyResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.PartySearchByKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartySearchByKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartySearchByKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.getSingleRecordByKey =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/getSingleRecordByKey',
      request,
      metadata || {},
      methodDescriptor_PartyService_getSingleRecordByKey,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.PartySearchByKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartySearchByKeyResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.getSingleRecordByKey =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/getSingleRecordByKey',
      request,
      metadata || {},
      methodDescriptor_PartyService_getSingleRecordByKey
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonSearchListRequest,
 *   !proto.io.rulelogic.api.PartyListResponse>}
 */
const methodDescriptor_PartyService_listRecords = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.PartyService/listRecords',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonSearchListRequest,
  proto.io.rulelogic.api.PartyListResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.PartyListResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartyListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartyListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.PartyService/listRecords',
    request,
    metadata || {},
    methodDescriptor_PartyService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartyListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/listRecords',
      request,
      metadata || {},
      methodDescriptor_PartyService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.PartyDmlUpdateRequest,
 *   !proto.io.rulelogic.api.PartyDmlUpdateResponse>}
 */
const methodDescriptor_PartyService_updateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/updateRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.PartyDmlUpdateRequest,
    proto.io.rulelogic.api.PartyDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.PartyDmlUpdateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartyDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.PartyDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartyDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartyDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.PartyService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_PartyService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.PartyDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartyDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_PartyService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.PartyDmlDeleteRequest,
 *   !proto.io.rulelogic.api.PartyDmlDeleteResponse>}
 */
const methodDescriptor_PartyService_deleteRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/deleteRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.PartyDmlDeleteRequest,
    proto.io.rulelogic.api.PartyDmlDeleteResponse,
    /**
     * @param {!proto.io.rulelogic.api.PartyDmlDeleteRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartyDmlDeleteResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.PartyDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartyDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartyDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.PartyService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_PartyService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.PartyDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartyDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_PartyService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.PartyDmlCreateRequest,
 *   !proto.io.rulelogic.api.PartyDmlCreateResponse>}
 */
const methodDescriptor_PartyService_createRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/createRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.PartyDmlCreateRequest,
    proto.io.rulelogic.api.PartyDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.PartyDmlCreateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartyDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.PartyDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartyDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartyDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.PartyService/createRecord',
    request,
    metadata || {},
    methodDescriptor_PartyService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.PartyDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartyDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/createRecord',
      request,
      metadata || {},
      methodDescriptor_PartyService_createRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.AuthenticateRequest,
 *   !proto.io.rulelogic.api.AuthenticateResponse>}
 */
const methodDescriptor_PartyService_authenticateUser =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/authenticateUser',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.AuthenticateRequest,
    proto.io.rulelogic.api.AuthenticateResponse,
    /**
     * @param {!proto.io.rulelogic.api.AuthenticateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.AuthenticateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.authenticateUser =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/authenticateUser',
      request,
      metadata || {},
      methodDescriptor_PartyService_authenticateUser,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.authenticateUser =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.PartyService/authenticateUser',
      request,
      metadata || {},
      methodDescriptor_PartyService_authenticateUser
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventSubscriberListRequest,
 *   !proto.io.rulelogic.api.PartyListResponse>}
 */
const methodDescriptor_PartyService_listEventOwnersAndSubscribers =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.PartyService/listEventOwnersAndSubscribers',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventSubscriberListRequest,
    proto.io.rulelogic.api.PartyListResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventSubscriberListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.PartyListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventSubscriberListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.PartyListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.PartyListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.PartyServiceClient.prototype.listEventOwnersAndSubscribers =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.PartyService/listEventOwnersAndSubscribers',
      request,
      metadata || {},
      methodDescriptor_PartyService_listEventOwnersAndSubscribers,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.EventSubscriberListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.PartyListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.PartyServicePromiseClient.prototype.listEventOwnersAndSubscribers =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.PartyService/listEventOwnersAndSubscribers',
      request,
      metadata || {},
      methodDescriptor_PartyService_listEventOwnersAndSubscribers
    );
  };

module.exports = proto.io.rulelogic.api;
