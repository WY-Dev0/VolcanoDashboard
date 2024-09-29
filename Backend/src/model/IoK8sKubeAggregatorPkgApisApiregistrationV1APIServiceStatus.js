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

import ApiClient from '../ApiClient';
import IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition from './IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';

/**
 * The IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus model module.
 * @module model/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
 * @version v1.30.0
 */
class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
    /**
     * Constructs a new <code>IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus</code>.
     * APIServiceStatus contains derived information about an API server
     * @alias module:model/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
     */
    constructor() { 
        
        IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus} The populated <code>IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus();

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus</code>.
     */
    static validateJSON(data) {
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Current service state of apiService.
 * @member {Array.<module:model/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>} conditions
 */
IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.prototype['conditions'] = undefined;






export default IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus;

