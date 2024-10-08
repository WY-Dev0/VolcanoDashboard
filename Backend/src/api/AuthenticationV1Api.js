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
import IoK8sApiAuthenticationV1SelfSubjectReview from '../model/IoK8sApiAuthenticationV1SelfSubjectReview';
import IoK8sApiAuthenticationV1TokenReview from '../model/IoK8sApiAuthenticationV1TokenReview';
import IoK8sApimachineryPkgApisMetaV1APIResourceList from '../model/IoK8sApimachineryPkgApisMetaV1APIResourceList';

/**
* AuthenticationV1 service.
* @module api/AuthenticationV1Api
* @version v1.30.0
*/
export default class AuthenticationV1Api {

    /**
    * Constructs a new AuthenticationV1Api. 
    * @alias module:api/AuthenticationV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAuthenticationV1SelfSubjectReview operation.
     * @callback module:api/AuthenticationV1Api~createAuthenticationV1SelfSubjectReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthenticationV1SelfSubjectReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SelfSubjectReview
     * @param {module:model/IoK8sApiAuthenticationV1SelfSubjectReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthenticationV1Api~createAuthenticationV1SelfSubjectReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthenticationV1SelfSubjectReview}
     */
    createAuthenticationV1SelfSubjectReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthenticationV1SelfSubjectReview");
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
      let returnType = IoK8sApiAuthenticationV1SelfSubjectReview;
      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1/selfsubjectreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAuthenticationV1TokenReview operation.
     * @callback module:api/AuthenticationV1Api~createAuthenticationV1TokenReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApiAuthenticationV1TokenReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a TokenReview
     * @param {module:model/IoK8sApiAuthenticationV1TokenReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} [dryRun] When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} [fieldManager] fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} [fieldValidation] fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     * @param {String} [pretty] If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     * @param {module:api/AuthenticationV1Api~createAuthenticationV1TokenReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApiAuthenticationV1TokenReview}
     */
    createAuthenticationV1TokenReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthenticationV1TokenReview");
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
      let returnType = IoK8sApiAuthenticationV1TokenReview;
      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1/tokenreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthenticationV1APIResources operation.
     * @callback module:api/AuthenticationV1Api~getAuthenticationV1APIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApimachineryPkgApisMetaV1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:api/AuthenticationV1Api~getAuthenticationV1APIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApimachineryPkgApisMetaV1APIResourceList}
     */
    getAuthenticationV1APIResources(callback) {
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
        '/apis/authentication.k8s.io/v1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
