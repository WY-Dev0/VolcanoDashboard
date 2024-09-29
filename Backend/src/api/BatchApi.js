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
import IoK8sApimachineryPkgApisMetaV1APIGroup from '../model/IoK8sApimachineryPkgApisMetaV1APIGroup';

/**
* Batch service.
* @module api/BatchApi
* @version v1.30.0
*/
export default class BatchApi {

    /**
    * Constructs a new BatchApi. 
    * @alias module:api/BatchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getBatchAPIGroup operation.
     * @callback module:api/BatchApi~getBatchAPIGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IoK8sApimachineryPkgApisMetaV1APIGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get information of a group
     * @param {module:api/BatchApi~getBatchAPIGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IoK8sApimachineryPkgApisMetaV1APIGroup}
     */
    getBatchAPIGroup(callback) {
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
      let returnType = IoK8sApimachineryPkgApisMetaV1APIGroup;
      return this.apiClient.callApi(
        '/apis/batch/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
