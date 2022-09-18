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
proto.io.rulelogic.api = require('./location_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.LocationServiceClient = function (
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
proto.io.rulelogic.api.LocationServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
 *   !proto.io.rulelogic.api.LocationSearchResponse>}
 */
const methodDescriptor_LocationService_getSingleRecordFromDB =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/getSingleRecordFromDB',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
    proto.io.rulelogic.api.LocationSearchResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationSearchResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.getSingleRecordFromDB =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getSingleRecordFromDB',
      request,
      metadata || {},
      methodDescriptor_LocationService_getSingleRecordFromDB,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationSearchResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.getSingleRecordFromDB =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getSingleRecordFromDB',
      request,
      metadata || {},
      methodDescriptor_LocationService_getSingleRecordFromDB
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
 *   !proto.io.rulelogic.api.LocationSearchResponse>}
 */
const methodDescriptor_LocationService_getRecordByCityCountry =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/getRecordByCityCountry',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
    proto.io.rulelogic.api.LocationSearchResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationSearchResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.getRecordByCityCountry =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getRecordByCityCountry',
      request,
      metadata || {},
      methodDescriptor_LocationService_getRecordByCityCountry,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationSearchResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.getRecordByCityCountry =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getRecordByCityCountry',
      request,
      metadata || {},
      methodDescriptor_LocationService_getRecordByCityCountry
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationSearchByGeoLocationRequest,
 *   !proto.io.rulelogic.api.LocationSearchResponse>}
 */
const methodDescriptor_LocationService_getRecordByGeoLocation =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/getRecordByGeoLocation',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchByGeoLocationRequest,
    proto.io.rulelogic.api.LocationSearchResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationSearchResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.getRecordByGeoLocation =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getRecordByGeoLocation',
      request,
      metadata || {},
      methodDescriptor_LocationService_getRecordByGeoLocation,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationSearchResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.getRecordByGeoLocation =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getRecordByGeoLocation',
      request,
      metadata || {},
      methodDescriptor_LocationService_getRecordByGeoLocation
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
 *   !proto.io.rulelogic.api.LocationDmlCreateResponse>}
 */
const methodDescriptor_LocationService_getOrCreateRecordByCityCountry =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/getOrCreateRecordByCityCountry',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchByCityCountryRequest,
    proto.io.rulelogic.api.LocationDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.getOrCreateRecordByCityCountry =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getOrCreateRecordByCityCountry',
      request,
      metadata || {},
      methodDescriptor_LocationService_getOrCreateRecordByCityCountry,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByCityCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.getOrCreateRecordByCityCountry =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getOrCreateRecordByCityCountry',
      request,
      metadata || {},
      methodDescriptor_LocationService_getOrCreateRecordByCityCountry
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationSearchByGeoLocationRequest,
 *   !proto.io.rulelogic.api.LocationDmlCreateResponse>}
 */
const methodDescriptor_LocationService_getOrCreateRecordByGeoLocation =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/getOrCreateRecordByGeoLocation',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchByGeoLocationRequest,
    proto.io.rulelogic.api.LocationDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.getOrCreateRecordByGeoLocation =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getOrCreateRecordByGeoLocation',
      request,
      metadata || {},
      methodDescriptor_LocationService_getOrCreateRecordByGeoLocation,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.LocationSearchByGeoLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.getOrCreateRecordByGeoLocation =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.LocationService/getOrCreateRecordByGeoLocation',
      request,
      metadata || {},
      methodDescriptor_LocationService_getOrCreateRecordByGeoLocation
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationSearchListRequest,
 *   !proto.io.rulelogic.api.LocationSearchListResponse>}
 */
const methodDescriptor_LocationService_listRecords =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/listRecords',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationSearchListRequest,
    proto.io.rulelogic.api.LocationSearchListResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationSearchListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationSearchListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationSearchListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationSearchListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.LocationService/listRecords',
    request,
    metadata || {},
    methodDescriptor_LocationService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.LocationSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationSearchListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.LocationService/listRecords',
      request,
      metadata || {},
      methodDescriptor_LocationService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationDmlUpdateRequest,
 *   !proto.io.rulelogic.api.LocationDmlUpdateResponse>}
 */
const methodDescriptor_LocationService_updateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/updateRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationDmlUpdateRequest,
    proto.io.rulelogic.api.LocationDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationDmlUpdateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.LocationService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_LocationService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.LocationDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.LocationService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_LocationService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationDmlDeleteRequest,
 *   !proto.io.rulelogic.api.LocationDmlDeleteResponse>}
 */
const methodDescriptor_LocationService_deleteRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/deleteRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationDmlDeleteRequest,
    proto.io.rulelogic.api.LocationDmlDeleteResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationDmlDeleteRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationDmlDeleteResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.LocationService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_LocationService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.LocationDmlDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.LocationService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_LocationService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.LocationDmlCreateRequest,
 *   !proto.io.rulelogic.api.LocationDmlCreateResponse>}
 */
const methodDescriptor_LocationService_createRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.LocationService/createRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.LocationDmlCreateRequest,
    proto.io.rulelogic.api.LocationDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.LocationDmlCreateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.LocationDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.LocationDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.LocationDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.LocationDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.LocationServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.LocationService/createRecord',
    request,
    metadata || {},
    methodDescriptor_LocationService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.LocationDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.LocationDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.LocationServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.LocationService/createRecord',
      request,
      metadata || {},
      methodDescriptor_LocationService_createRecord
    );
  };

module.exports = proto.io.rulelogic.api;
