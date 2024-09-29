/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IoK8sApiAuthorizationV1LocalSubjectAccessReview from '../model/IoK8sApiAuthorizationV1LocalSubjectAccessReview';
import IoK8sApiAuthorizationV1SelfSubjectAccessReview from '../model/IoK8sApiAuthorizationV1SelfSubjectAccessReview';
import IoK8sApiAuthorizationV1SelfSubjectRulesReview from '../model/IoK8sApiAuthorizationV1SelfSubjectRulesReview';
import IoK8sApiAuthorizationV1SubjectAccessReview from '../model/IoK8sApiAuthorizationV1SubjectAccessReview';
import IoK8sApimachineryPkgApisMetaV1APIResourceList from '../model/IoK8sApimachineryPkgApisMetaV1APIResourceList';

/**
* AuthorizationV1 service.
* @module api/AuthorizationV1Api
* @version v1.30.0
*/
export default class AuthorizationV1Api {

    /**
    * Constructs a new AuthorizationV1Api. 
    * @alias module:api/AuthorizationV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAuthorizationV1NamespacedLocalSubjectAccessReview operation.
     * @callback module:api/AuthorizationV1Api~createAuthorizationV1NamespacedLocalSubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthorizationV1LocalSubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a LocalSubjectAccessReview
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:model/IoK8sApiAuthorizationV1LocalSubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthorizationV1Api~createAuthorizationV1NamespacedLocalSubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthorizationV1LocalSubjectAccessReview}
     */
    createAuthorizationV1NamespacedLocalSubjectAccessReview(namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling createAuthorizationV1NamespacedLocalSubjectAccessReview");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthorizationV1NamespacedLocalSubjectAccessReview");
      }

      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'fieldValidation': opts['fieldValidation'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = IoK8sApiAuthorizationV1LocalSubjectAccessReview;
      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAuthorizationV1SelfSubjectAccessReview operation.
     * @callback module:api/AuthorizationV1Api~createAuthorizationV1SelfSubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SelfSubjectAccessReview
     * @param {module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthorizationV1Api~createAuthorizationV1SelfSubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReview}
     */
    createAuthorizationV1SelfSubjectAccessReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthorizationV1SelfSubjectAccessReview");
      }

      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'fieldValidation': opts['fieldValidation'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = IoK8sApiAuthorizationV1SelfSubjectAccessReview;
      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAuthorizationV1SelfSubjectRulesReview operation.
     * @callback module:api/AuthorizationV1Api~createAuthorizationV1SelfSubjectRulesReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthorizationV1SelfSubjectRulesReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SelfSubjectRulesReview
     * @param {module:model/IoK8sApiAuthorizationV1SelfSubjectRulesReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthorizationV1Api~createAuthorizationV1SelfSubjectRulesReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthorizationV1SelfSubjectRulesReview}
     */
    createAuthorizationV1SelfSubjectRulesReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthorizationV1SelfSubjectRulesReview");
      }

      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'fieldValidation': opts['fieldValidation'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = IoK8sApiAuthorizationV1SelfSubjectRulesReview;
      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAuthorizationV1SubjectAccessReview operation.
     * @callback module:api/AuthorizationV1Api~createAuthorizationV1SubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthorizationV1SubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SubjectAccessReview
     * @param {module:model/IoK8sApiAuthorizationV1SubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthorizationV1Api~createAuthorizationV1SubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthorizationV1SubjectAccessReview}
     */
    createAuthorizationV1SubjectAccessReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthorizationV1SubjectAccessReview");
      }

      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'fieldValidation': opts['fieldValidation'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = IoK8sApiAuthorizationV1SubjectAccessReview;
      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1/subjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthorizationV1APIResources operation.
     * @callback module:api/AuthorizationV1Api~getAuthorizationV1APIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApimachineryPkgApisMetaV1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:api/AuthorizationV1Api~getAuthorizationV1APIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApimachineryPkgApisMetaV1APIResourceList}
     */
    getAuthorizationV1APIResources(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = IoK8sApimachineryPkgApisMetaV1APIResourceList;
      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
