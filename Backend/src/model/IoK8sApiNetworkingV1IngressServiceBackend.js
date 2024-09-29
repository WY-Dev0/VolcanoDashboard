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
import IoK8sApiNetworkingV1ServiceBackendPort from './IoK8sApiNetworkingV1ServiceBackendPort';

/**
 * The IoK8sApiNetworkingV1IngressServiceBackend model module.
 * @module model/IoK8sApiNetworkingV1IngressServiceBackend
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1IngressServiceBackend {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1IngressServiceBackend</code>.
     * IngressServiceBackend references a Kubernetes Service as a Backend.
     * @alias module:model/IoK8sApiNetworkingV1IngressServiceBackend
     * @param name {String} name is the referenced service. The service must exist in the same namespace as the Ingress object.
     */
    constructor(name) { 
        
        IoK8sApiNetworkingV1IngressServiceBackend.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1IngressServiceBackend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1IngressServiceBackend} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1IngressServiceBackend} The populated <code>IoK8sApiNetworkingV1IngressServiceBackend</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1IngressServiceBackend();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = IoK8sApiNetworkingV1ServiceBackendPort.constructFromObject(data['port']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1IngressServiceBackend</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1IngressServiceBackend</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiNetworkingV1IngressServiceBackend.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `port`
        if (data['port']) { // data not null
          IoK8sApiNetworkingV1ServiceBackendPort.validateJSON(data['port']);
        }

        return true;
    }


}

IoK8sApiNetworkingV1IngressServiceBackend.RequiredProperties = ["name"];

/**
 * name is the referenced service. The service must exist in the same namespace as the Ingress object.
 * @member {String} name
 */
IoK8sApiNetworkingV1IngressServiceBackend.prototype['name'] = undefined;

/**
 * @member {module:model/IoK8sApiNetworkingV1ServiceBackendPort} port
 */
IoK8sApiNetworkingV1IngressServiceBackend.prototype['port'] = undefined;






export default IoK8sApiNetworkingV1IngressServiceBackend;
