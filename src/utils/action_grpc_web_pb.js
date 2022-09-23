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
proto.io.rulelogic.api = require('./action_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.ActionServiceClient = function (
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
proto.io.rulelogic.api.ActionServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.ActionSearchSingleResponse>}
 */
const methodDescriptor_ActionService_getSingleRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/getSingleRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonSearchRequest,
    proto.io.rulelogic.api.ActionSearchSingleResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonSearchRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionSearchSingleResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionSearchSingleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionSearchSingleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.getSingleRecord =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/getSingleRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_getSingleRecord,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionSearchSingleResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.getSingleRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/getSingleRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_getSingleRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonSearchListRequest,
 *   !proto.io.rulelogic.api.ActionListResponse>}
 */
const methodDescriptor_ActionService_listRecords =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/listRecords',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonSearchListRequest,
    proto.io.rulelogic.api.ActionListResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/listRecords',
    request,
    metadata || {},
    methodDescriptor_ActionService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/listRecords',
      request,
      metadata || {},
      methodDescriptor_ActionService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.ActionSearchByTypeListRequest,
 *   !proto.io.rulelogic.api.ActionListResponse>}
 */
const methodDescriptor_ActionService_listRecordsByType =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/listRecordsByType',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.ActionSearchByTypeListRequest,
    proto.io.rulelogic.api.ActionListResponse,
    /**
     * @param {!proto.io.rulelogic.api.ActionSearchByTypeListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.ActionSearchByTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.listRecordsByType =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/listRecordsByType',
      request,
      metadata || {},
      methodDescriptor_ActionService_listRecordsByType,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.ActionSearchByTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.listRecordsByType =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/listRecordsByType',
      request,
      metadata || {},
      methodDescriptor_ActionService_listRecordsByType
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.ActionDmlUpdateRequest,
 *   !proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 */
const methodDescriptor_ActionService_updateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/updateRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.ActionDmlUpdateRequest,
    proto.io.rulelogic.api.ActionDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.ActionDmlUpdateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.ActionDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_ActionService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.ActionDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDeleteRequest,
 *   !proto.io.rulelogic.api.ActionDmlDeleteResponse>}
 */
const methodDescriptor_ActionService_deleteRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/deleteRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonDeleteRequest,
    proto.io.rulelogic.api.ActionDmlDeleteResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlDeleteResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_ActionService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.ActionDmlCreateRequest,
 *   !proto.io.rulelogic.api.ActionDmlCreateResponse>}
 */
const methodDescriptor_ActionService_createRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/createRecord',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.ActionDmlCreateRequest,
    proto.io.rulelogic.api.ActionDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.ActionDmlCreateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.ActionDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/createRecord',
    request,
    metadata || {},
    methodDescriptor_ActionService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.ActionDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/createRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_createRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDuplicateRequest,
 *   !proto.io.rulelogic.api.ActionDmlCreateResponse>}
 */
const methodDescriptor_ActionService_duplicateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/duplicateRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonDuplicateRequest,
    proto.io.rulelogic.api.ActionDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.duplicateRecord =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/duplicateRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_duplicateRecord,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.duplicateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/duplicateRecord',
      request,
      metadata || {},
      methodDescriptor_ActionService_duplicateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventActionLinkRequest,
 *   !proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 */
const methodDescriptor_ActionService_linkActionToEvent =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/linkActionToEvent',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventActionLinkRequest,
    proto.io.rulelogic.api.ActionDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventActionLinkRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventActionLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.linkActionToEvent =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/linkActionToEvent',
      request,
      metadata || {},
      methodDescriptor_ActionService_linkActionToEvent,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.EventActionLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.linkActionToEvent =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/linkActionToEvent',
      request,
      metadata || {},
      methodDescriptor_ActionService_linkActionToEvent
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonStatusChangeRequest,
 *   !proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 */
const methodDescriptor_ActionService_changeActionStatus =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/changeActionStatus',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonStatusChangeRequest,
    proto.io.rulelogic.api.ActionDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.changeActionStatus =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/changeActionStatus',
      request,
      metadata || {},
      methodDescriptor_ActionService_changeActionStatus,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.changeActionStatus =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/changeActionStatus',
      request,
      metadata || {},
      methodDescriptor_ActionService_changeActionStatus
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonPartyAssociateRequest,
 *   !proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 */
const methodDescriptor_ActionService_associateParty =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/associateParty',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonPartyAssociateRequest,
    proto.io.rulelogic.api.ActionDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.associateParty = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/associateParty',
    request,
    metadata || {},
    methodDescriptor_ActionService_associateParty,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.associateParty =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/associateParty',
      request,
      metadata || {},
      methodDescriptor_ActionService_associateParty
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonRateRequest,
 *   !proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 */
const methodDescriptor_ActionService_rateAction = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.ActionService/rateAction',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonRateRequest,
  proto.io.rulelogic.api.ActionDmlUpdateResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonRateRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.ActionDmlUpdateResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.rateAction = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.ActionService/rateAction',
    request,
    metadata || {},
    methodDescriptor_ActionService_rateAction,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.rateAction =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/rateAction',
      request,
      metadata || {},
      methodDescriptor_ActionService_rateAction
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventActionsListRequest,
 *   !proto.io.rulelogic.api.ActionListResponse>}
 */
const methodDescriptor_ActionService_listEventActions =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.ActionService/listEventActions',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventActionsListRequest,
    proto.io.rulelogic.api.ActionListResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventActionsListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.ActionListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventActionsListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.ActionListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.ActionListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.ActionServiceClient.prototype.listEventActions =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/listEventActions',
      request,
      metadata || {},
      methodDescriptor_ActionService_listEventActions,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.EventActionsListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.ActionListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.ActionServicePromiseClient.prototype.listEventActions =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.ActionService/listEventActions',
      request,
      metadata || {},
      methodDescriptor_ActionService_listEventActions
    );
  };

module.exports = proto.io.rulelogic.api;
