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

var location_pb = require('./location_pb.js');

var weather_pb = require('./weather_pb.js');

var party_pb = require('./party_pb.js');

const proto = {};
proto.io = {};
proto.io.rulelogic = {};
proto.io.rulelogic.api = require('./rule_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.io.rulelogic.api.RuleServiceClient = function (
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
proto.io.rulelogic.api.RuleServicePromiseClient = function (
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
 *   !proto.io.rulelogic.api.RuleSearchSingleResponse>}
 */
const methodDescriptor_RuleService_getSingleRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/getSingleRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonSearchRequest,
    proto.io.rulelogic.api.RuleSearchSingleResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonSearchRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleSearchSingleResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleSearchSingleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleSearchSingleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.getSingleRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/getSingleRecord',
    request,
    metadata || {},
    methodDescriptor_RuleService_getSingleRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleSearchSingleResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.getSingleRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/getSingleRecord',
      request,
      metadata || {},
      methodDescriptor_RuleService_getSingleRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonSearchListRequest,
 *   !proto.io.rulelogic.api.RuleListResponse>}
 */
const methodDescriptor_RuleService_listRecords = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.RuleService/listRecords',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonSearchListRequest,
  proto.io.rulelogic.api.RuleListResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.RuleListResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.listRecords = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/listRecords',
    request,
    metadata || {},
    methodDescriptor_RuleService_listRecords,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonSearchListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.listRecords =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/listRecords',
      request,
      metadata || {},
      methodDescriptor_RuleService_listRecords
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.RuleSearchByTypeListRequest,
 *   !proto.io.rulelogic.api.RuleListResponse>}
 */
const methodDescriptor_RuleService_listRecordsByType =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/listRecordsByType',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.RuleSearchByTypeListRequest,
    proto.io.rulelogic.api.RuleListResponse,
    /**
     * @param {!proto.io.rulelogic.api.RuleSearchByTypeListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.RuleSearchByTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.listRecordsByType =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/listRecordsByType',
      request,
      metadata || {},
      methodDescriptor_RuleService_listRecordsByType,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.RuleSearchByTypeListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.listRecordsByType =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/listRecordsByType',
      request,
      metadata || {},
      methodDescriptor_RuleService_listRecordsByType
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.RuleDmlUpdateRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_updateRecord = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.RuleService/updateRecord',
  grpc.web.MethodType.UNARY,
  proto.io.rulelogic.api.RuleDmlUpdateRequest,
  proto.io.rulelogic.api.RuleDmlUpdateResponse,
  /**
   * @param {!proto.io.rulelogic.api.RuleDmlUpdateRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.RuleDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.updateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/updateRecord',
    request,
    metadata || {},
    methodDescriptor_RuleService_updateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.RuleDmlUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.updateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/updateRecord',
      request,
      metadata || {},
      methodDescriptor_RuleService_updateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDeleteRequest,
 *   !proto.io.rulelogic.api.RuleDmlDeleteResponse>}
 */
const methodDescriptor_RuleService_deleteRecord = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.RuleService/deleteRecord',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonDeleteRequest,
  proto.io.rulelogic.api.RuleDmlDeleteResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.RuleDmlDeleteResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.deleteRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/deleteRecord',
    request,
    metadata || {},
    methodDescriptor_RuleService_deleteRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.deleteRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_RuleService_deleteRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.RuleDmlCreateRequest,
 *   !proto.io.rulelogic.api.RuleDmlCreateResponse>}
 */
const methodDescriptor_RuleService_createRecord = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.RuleService/createRecord',
  grpc.web.MethodType.UNARY,
  proto.io.rulelogic.api.RuleDmlCreateRequest,
  proto.io.rulelogic.api.RuleDmlCreateResponse,
  /**
   * @param {!proto.io.rulelogic.api.RuleDmlCreateRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.RuleDmlCreateResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.RuleDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.createRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/createRecord',
    request,
    metadata || {},
    methodDescriptor_RuleService_createRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.RuleDmlCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.createRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/createRecord',
      request,
      metadata || {},
      methodDescriptor_RuleService_createRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonDuplicateRequest,
 *   !proto.io.rulelogic.api.RuleDmlCreateResponse>}
 */
const methodDescriptor_RuleService_duplicateRecord =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/duplicateRecord',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonDuplicateRequest,
    proto.io.rulelogic.api.RuleDmlCreateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleDmlCreateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.duplicateRecord = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/duplicateRecord',
    request,
    metadata || {},
    methodDescriptor_RuleService_duplicateRecord,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonDuplicateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlCreateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.duplicateRecord =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/duplicateRecord',
      request,
      metadata || {},
      methodDescriptor_RuleService_duplicateRecord
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventRulesListRequest,
 *   !proto.io.rulelogic.api.RuleListResponse>}
 */
const methodDescriptor_RuleService_listEventRules =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/listEventRules',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventRulesListRequest,
    proto.io.rulelogic.api.RuleListResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventRulesListRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleListResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventRulesListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.listEventRules = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/listEventRules',
    request,
    metadata || {},
    methodDescriptor_RuleService_listEventRules,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.EventRulesListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleListResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.listEventRules =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/listEventRules',
      request,
      metadata || {},
      methodDescriptor_RuleService_listEventRules
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.EventRuleLinkRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_linkRuleToEvent =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/linkRuleToEvent',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.EventRuleLinkRequest,
    proto.io.rulelogic.api.RuleDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.EventRuleLinkRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.EventRuleLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.linkRuleToEvent = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/linkRuleToEvent',
    request,
    metadata || {},
    methodDescriptor_RuleService_linkRuleToEvent,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.EventRuleLinkRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.linkRuleToEvent =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/linkRuleToEvent',
      request,
      metadata || {},
      methodDescriptor_RuleService_linkRuleToEvent
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.RuleStatusChangeRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_changeRuleStatus =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/changeRuleStatus',
    grpc.web.MethodType.UNARY,
    proto.io.rulelogic.api.RuleStatusChangeRequest,
    proto.io.rulelogic.api.RuleDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.RuleStatusChangeRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.RuleStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.changeRuleStatus = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/changeRuleStatus',
    request,
    metadata || {},
    methodDescriptor_RuleService_changeRuleStatus,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.RuleStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.changeRuleStatus =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/changeRuleStatus',
      request,
      metadata || {},
      methodDescriptor_RuleService_changeRuleStatus
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonStatusChangeRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_pushChangeRuleStatusRequest =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/pushChangeRuleStatusRequest',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonStatusChangeRequest,
    proto.io.rulelogic.api.RuleDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.pushChangeRuleStatusRequest =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/io.rulelogic.api.RuleService/pushChangeRuleStatusRequest',
      request,
      metadata || {},
      methodDescriptor_RuleService_pushChangeRuleStatusRequest,
      callback
    );
  };

/**
 * @param {!proto.io.rulelogic.api.CommonStatusChangeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.pushChangeRuleStatusRequest =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        '/io.rulelogic.api.RuleService/pushChangeRuleStatusRequest',
      request,
      metadata || {},
      methodDescriptor_RuleService_pushChangeRuleStatusRequest
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonPartyAssociateRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_associateParty =
  new grpc.web.MethodDescriptor(
    '/io.rulelogic.api.RuleService/associateParty',
    grpc.web.MethodType.UNARY,
    common_common_pb.CommonPartyAssociateRequest,
    proto.io.rulelogic.api.RuleDmlUpdateResponse,
    /**
     * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
  );

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.associateParty = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/associateParty',
    request,
    metadata || {},
    methodDescriptor_RuleService_associateParty,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonPartyAssociateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.associateParty =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + '/io.rulelogic.api.RuleService/associateParty',
      request,
      metadata || {},
      methodDescriptor_RuleService_associateParty
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.rulelogic.api.CommonRateRequest,
 *   !proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 */
const methodDescriptor_RuleService_rateRule = new grpc.web.MethodDescriptor(
  '/io.rulelogic.api.RuleService/rateRule',
  grpc.web.MethodType.UNARY,
  common_common_pb.CommonRateRequest,
  proto.io.rulelogic.api.RuleDmlUpdateResponse,
  /**
   * @param {!proto.io.rulelogic.api.CommonRateRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.io.rulelogic.api.RuleDmlUpdateResponse.deserializeBinary
);

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.io.rulelogic.api.RuleDmlUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.rulelogic.api.RuleDmlUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.rulelogic.api.RuleServiceClient.prototype.rateRule = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/rateRule',
    request,
    metadata || {},
    methodDescriptor_RuleService_rateRule,
    callback
  );
};

/**
 * @param {!proto.io.rulelogic.api.CommonRateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.rulelogic.api.RuleDmlUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.io.rulelogic.api.RuleServicePromiseClient.prototype.rateRule = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/io.rulelogic.api.RuleService/rateRule',
    request,
    metadata || {},
    methodDescriptor_RuleService_rateRule
  );
};

module.exports = proto.io.rulelogic.api;
