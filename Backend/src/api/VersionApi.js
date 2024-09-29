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
import IoK8sApimachineryPkgVersionInfo from '../model/IoK8sApimachineryPkgVersionInfo';

/**
* Version service.
* @module api/VersionApi
* @version v1.30.0
*/
export default class VersionApi {

    /**
    * Constructs a new VersionApi. 
    * @alias module:api/VersionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCodeVersion operation.
     * @callback module:api/VersionApi~getCodeVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApimachineryPkgVersionInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get the code version
     * @param {module:api/VersionApi~getCodeVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApimachineryPkgVersionInfo}
     */
    getCodeVersion(callback) {
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
      let accepts = ['application/json'];
      let returnType = IoK8sApimachineryPkgVersionInfo;
      return this.apiClient.callApi(
        '/version/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}