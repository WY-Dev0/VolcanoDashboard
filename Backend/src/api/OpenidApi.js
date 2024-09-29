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

/**
* Openid service.
* @module api/OpenidApi
* @version v1.30.0
*/
export default class OpenidApi {

    /**
    * Constructs a new OpenidApi. 
    * @alias module:api/OpenidApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getServiceAccountIssuerOpenIDKeyset operation.
     * @callback module:api/OpenidApi~getServiceAccountIssuerOpenIDKeysetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     * @param {module:api/OpenidApi~getServiceAccountIssuerOpenIDKeysetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getServiceAccountIssuerOpenIDKeyset(callback) {
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
      let accepts = ['application/jwk-set+json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/openid/v1/jwks/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
