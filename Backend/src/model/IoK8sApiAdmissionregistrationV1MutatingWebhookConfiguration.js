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
import IoK8sApiAdmissionregistrationV1MutatingWebhook from './IoK8sApiAdmissionregistrationV1MutatingWebhook';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration model module.
 * @module model/IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration
 * @version v1.30.0
 */
class IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration {
    /**
     * Constructs a new <code>IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration</code>.
     * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
     * @alias module:model/IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration
     */
    constructor() { 
        
        IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration} The populated <code>IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [IoK8sApiAdmissionregistrationV1MutatingWebhook]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          IoK8sApimachineryPkgApisMetaV1ObjectMeta.validateJSON(data['metadata']);
        }
        if (data['webhooks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['webhooks'])) {
                throw new Error("Expected the field `webhooks` to be an array in the JSON data but got " + data['webhooks']);
            }
            // validate the optional field `webhooks` (array)
            for (const item of data['webhooks']) {
                IoK8sApiAdmissionregistrationV1MutatingWebhook.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.prototype['apiVersion'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.prototype['metadata'] = undefined;

/**
 * Webhooks is a list of webhooks and the affected resources and operations.
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1MutatingWebhook>} webhooks
 */
IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.prototype['webhooks'] = undefined;






export default IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration;

