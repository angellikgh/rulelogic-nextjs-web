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
proto.io.rulelogic.api = require('./weather_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.WeatherServiceClient = function (
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
proto.io.rulelogic.api.WeatherServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.WeatherSearchByGeoPositionRequest,
 *   !proto.io.rulelogic.api.WeatherSearchResponse>}
 */
const methodDescriptor_WeatherService_getRecordByGeoPosition =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.WeatherService/getRecordByGeoPosition',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.WeatherSearchByGeoPositionRequest,
    proto.io.rulelogic.api.WeatherSearchResponse,
    /**
     * @param {!proto.io.rulelogic.api.WeatherSearchByGeoPositionRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.WeatherSearchResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.WeatherSearchByGeoPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.WeatherSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.WeatherSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.WeatherServiceClient.prototype.getRecordByGeoPosition =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.WeatherService/getRecordByGeoPosition',
      request,
      metadata || {},
      methodDescriptor_WeatherService_getRecordByGeoPosition,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.WeatherSearchByGeoPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.WeatherSearchResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.WeatherServicePromiseClient.prototype.getRecordByGeoPosition =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.WeatherService/getRecordByGeoPosition',
      request,
      metadata || {},
      methodDescriptor_WeatherService_getRecordByGeoPosition
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.WeatherSearchListRequest,
 *   !proto.io.rulelogic.api.WeatherSearchListResponse>}
 */
const methodDescriptor_WeatherService_listRecords =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.WeatherService/listRecords',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.WeatherSearchListRequest,
    proto.io.rulelogic.api.WeatherSearchListResponse,
    /**
     * @param {!proto.io.rulelogic.api.WeatherSearchListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.WeatherSearchListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.WeatherSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.WeatherSearchListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.WeatherSearchListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.WeatherServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.WeatherService/listRecords',
    request,
    metadata || {},
    methodDescriptor_WeatherService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.WeatherSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.WeatherSearchListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.WeatherServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.WeatherService/listRecords',
      request,
      metadata || {},
      methodDescriptor_WeatherService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.WeatherDmlUpdateRequest,
 *   !proto.io.rulelogic.api.WeatherDmlUpdateResponse>}
 */
const methodDescriptor_WeatherService_updateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.WeatherService/updateRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.WeatherDmlUpdateRequest,
    proto.io.rulelogic.api.WeatherDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.WeatherDmlUpdateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.WeatherDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.WeatherDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.WeatherDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.WeatherServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.WeatherService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_WeatherService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.WeatherDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.WeatherServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.WeatherService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_WeatherService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.WeatherDmlDeleteRequest,
 *   !proto.io.rulelogic.api.WeatherDmlDeleteResponse>}
 */
const methodDescriptor_WeatherService_deleteRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.WeatherService/deleteRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.WeatherDmlDeleteRequest,
    proto.io.rulelogic.api.WeatherDmlDeleteResponse,
    /**
     * @param {!proto.io.rulelogic.api.WeatherDmlDeleteRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.WeatherDmlDeleteResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.WeatherDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.WeatherDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.WeatherServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.WeatherService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_WeatherService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.WeatherDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.WeatherServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.WeatherService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_WeatherService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.WeatherDmlCreateRequest,
 *   !proto.io.rulelogic.api.WeatherDmlCreateResponse>}
 */
const methodDescriptor_WeatherService_createRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.WeatherService/createRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.WeatherDmlCreateRequest,
    proto.io.rulelogic.api.WeatherDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.WeatherDmlCreateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.WeatherDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.WeatherDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.WeatherDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.WeatherServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.WeatherService/createRecord',
    request,
    metadata || {},
    methodDescriptor_WeatherService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.WeatherDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.WeatherDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.WeatherServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.WeatherService/createRecord',
      request,
      metadata || {},
      methodDescriptor_WeatherService_createRecord
    );
  };

module.exports = proto.io.rulelogic.api;
