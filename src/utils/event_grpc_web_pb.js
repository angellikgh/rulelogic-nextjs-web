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

var party_pb = require('./party_pb.js');
const proto = {};
proto.io = {};
proto.io.rulelogic = {};
proto.io.rulelogic.api = require('./event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.EventServiceClient = function (
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
proto.io.rulelogic.api.EventServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.CommonSearchRequest,
 *   !proto.io.rulelogic.api.EventSearchSingleResponse>}
 */
const methodDescriptor_EventService_getSingleRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/getSingleRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonSearchRequest,
    proto.io.rulelogic.api.EventSearchSingleResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonSearchRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventSearchSingleResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventSearchSingleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventSearchSingleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.getSingleRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/getSingleRecord',
    request,
    metadata || {},
    methodDescriptor_EventService_getSingleRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventSearchSingleResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.getSingleRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/getSingleRecord',
      request,
      metadata || {},
      methodDescriptor_EventService_getSingleRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonSearchListRequest,
 *   !proto.io.rulelogic.api.EventListResponse>}
 */
const methodDescriptor_EventService_listRecords = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.EventService/listRecords',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonSearchListRequest,
  proto.io.rulelogic.api.EventListResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.EventListResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/listRecords',
    request,
    metadata || {},
    methodDescriptor_EventService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/listRecords',
      request,
      metadata || {},
      methodDescriptor_EventService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.SearchListForRuleRequest,
 *   !proto.io.rulelogic.api.EventListResponse>}
 */
const methodDescriptor_EventService_listRecordsForRule =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/listRecordsForRule',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.SearchListForRuleRequest,
    proto.io.rulelogic.api.EventListResponse,
    /**
     * @param {!proto.io.rulelogic.api.SearchListForRuleRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.SearchListForRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.listRecordsForRule =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.EventService/listRecordsForRule',
      request,
      metadata || {},
      methodDescriptor_EventService_listRecordsForRule,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.SearchListForRuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.listRecordsForRule =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/listRecordsForRule',
      request,
      metadata || {},
      methodDescriptor_EventService_listRecordsForRule
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventDmlUpdateRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_updateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/updateRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventDmlUpdateRequest,
    proto.io.rulelogic.api.EventDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventDmlUpdateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_EventService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.EventDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_EventService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDeleteRequest,
 *   !proto.io.rulelogic.api.EventDmlDeleteResponse>}
 */
const methodDescriptor_EventService_deleteRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/deleteRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonDeleteRequest,
    proto.io.rulelogic.api.EventDmlDeleteResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlDeleteResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_EventService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_EventService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventDmlCreateRequest,
 *   !proto.io.rulelogic.api.EventDmlCreateResponse>}
 */
const methodDescriptor_EventService_createRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/createRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventDmlCreateRequest,
    proto.io.rulelogic.api.EventDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventDmlCreateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/createRecord',
    request,
    metadata || {},
    methodDescriptor_EventService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.EventDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/createRecord',
      request,
      metadata || {},
      methodDescriptor_EventService_createRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDuplicateRequest,
 *   !proto.io.rulelogic.api.EventDmlCreateResponse>}
 */
const methodDescriptor_EventService_duplicateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/duplicateRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonDuplicateRequest,
    proto.io.rulelogic.api.EventDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.duplicateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/duplicateRecord',
    request,
    metadata || {},
    methodDescriptor_EventService_duplicateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.duplicateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/duplicateRecord',
      request,
      metadata || {},
      methodDescriptor_EventService_duplicateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventStatusChangeRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_changeEventStatus =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/changeEventStatus',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventStatusChangeRequest,
    proto.io.rulelogic.api.EventDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventStatusChangeRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.changeEventStatus =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.EventService/changeEventStatus',
      request,
      metadata || {},
      methodDescriptor_EventService_changeEventStatus,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.EventStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.changeEventStatus =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/changeEventStatus',
      request,
      metadata || {},
      methodDescriptor_EventService_changeEventStatus
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonStatusChangeRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_pushChangeEventStatusRequest =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/pushChangeEventStatusRequest',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonStatusChangeRequest,
    proto.io.rulelogic.api.EventDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.pushChangeEventStatusRequest =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.EventService/pushChangeEventStatusRequest',
      request,
      metadata || {},
      methodDescriptor_EventService_pushChangeEventStatusRequest,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.pushChangeEventStatusRequest =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.EventService/pushChangeEventStatusRequest',
      request,
      metadata || {},
      methodDescriptor_EventService_pushChangeEventStatusRequest
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonPartyAssociateRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_associateParty =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/associateParty',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonPartyAssociateRequest,
    proto.io.rulelogic.api.EventDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.associateParty = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/associateParty',
    request,
    metadata || {},
    methodDescriptor_EventService_associateParty,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.associateParty =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/associateParty',
      request,
      metadata || {},
      methodDescriptor_EventService_associateParty
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonEntityAssociateRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_associateEntity =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.EventService/associateEntity',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonEntityAssociateRequest,
    proto.io.rulelogic.api.EventDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonEntityAssociateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonEntityAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.associateEntity = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/associateEntity',
    request,
    metadata || {},
    methodDescriptor_EventService_associateEntity,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonEntityAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.associateEntity =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/associateEntity',
      request,
      metadata || {},
      methodDescriptor_EventService_associateEntity
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonRateRequest,
 *   !proto.io.rulelogic.api.EventDmlUpdateResponse>}
 */
const methodDescriptor_EventService_rateEvent = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.EventService/rateEvent',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonRateRequest,
  proto.io.rulelogic.api.EventDmlUpdateResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonRateRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.EventDmlUpdateResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.EventDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.EventDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.EventServiceClient.prototype.rateEvent = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.EventService/rateEvent',
    request,
    metadata || {},
    methodDescriptor_EventService_rateEvent,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.EventDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.EventServicePromiseClient.prototype.rateEvent =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.EventService/rateEvent',
      request,
      metadata || {},
      methodDescriptor_EventService_rateEvent
    );
  };

module.exports = proto.io.rulelogic.api;
