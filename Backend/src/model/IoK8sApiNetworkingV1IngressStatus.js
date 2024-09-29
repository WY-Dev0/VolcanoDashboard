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
import IoK8sApiNetworkingV1IngressLoadBalancerStatus from './IoK8sApiNetworkingV1IngressLoadBalancerStatus';

/**
 * The IoK8sApiNetworkingV1IngressStatus model module.
 * @module model/IoK8sApiNetworkingV1IngressStatus
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1IngressStatus {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1IngressStatus</code>.
     * IngressStatus describe the current state of the Ingress.
     * @alias module:model/IoK8sApiNetworkingV1IngressStatus
     */
    constructor() { 
        
        IoK8sApiNetworkingV1IngressStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1IngressStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1IngressStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1IngressStatus} The populated <code>IoK8sApiNetworkingV1IngressStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1IngressStatus();

            if (data.hasOwnProperty('loadBalancer')) {
                obj['loadBalancer'] = IoK8sApiNetworkingV1IngressLoadBalancerStatus.constructFromObject(data['loadBalancer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1IngressStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1IngressStatus</code>.
     */
    static validateJSON(data) {
        // validate the optional field `loadBalancer`
        if (data['loadBalancer']) { // data not null
          IoK8sApiNetworkingV1IngressLoadBalancerStatus.validateJSON(data['loadBalancer']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiNetworkingV1IngressLoadBalancerStatus} loadBalancer
 */
IoK8sApiNetworkingV1IngressStatus.prototype['loadBalancer'] = undefined;






export default IoK8sApiNetworkingV1IngressStatus;

