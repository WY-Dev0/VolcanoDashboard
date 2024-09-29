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
import IoK8sApiNetworkingV1IngressBackend from './IoK8sApiNetworkingV1IngressBackend';
import IoK8sApiNetworkingV1IngressRule from './IoK8sApiNetworkingV1IngressRule';
import IoK8sApiNetworkingV1IngressTLS from './IoK8sApiNetworkingV1IngressTLS';

/**
 * The IoK8sApiNetworkingV1IngressSpec model module.
 * @module model/IoK8sApiNetworkingV1IngressSpec
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1IngressSpec {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1IngressSpec</code>.
     * IngressSpec describes the Ingress the user wishes to exist.
     * @alias module:model/IoK8sApiNetworkingV1IngressSpec
     */
    constructor() { 
        
        IoK8sApiNetworkingV1IngressSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1IngressSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1IngressSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1IngressSpec} The populated <code>IoK8sApiNetworkingV1IngressSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1IngressSpec();

            if (data.hasOwnProperty('defaultBackend')) {
                obj['defaultBackend'] = IoK8sApiNetworkingV1IngressBackend.constructFromObject(data['defaultBackend']);
            }
            if (data.hasOwnProperty('ingressClassName')) {
                obj['ingressClassName'] = ApiClient.convertToType(data['ingressClassName'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [IoK8sApiNetworkingV1IngressRule]);
            }
            if (data.hasOwnProperty('tls')) {
                obj['tls'] = ApiClient.convertToType(data['tls'], [IoK8sApiNetworkingV1IngressTLS]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1IngressSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1IngressSpec</code>.
     */
    static validateJSON(data) {
        // validate the optional field `defaultBackend`
        if (data['defaultBackend']) { // data not null
          IoK8sApiNetworkingV1IngressBackend.validateJSON(data['defaultBackend']);
        }
        // ensure the json data is a string
        if (data['ingressClassName'] && !(typeof data['ingressClassName'] === 'string' || data['ingressClassName'] instanceof String)) {
            throw new Error("Expected the field `ingressClassName` to be a primitive type in the JSON string but got " + data['ingressClassName']);
        }
        if (data['rules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rules'])) {
                throw new Error("Expected the field `rules` to be an array in the JSON data but got " + data['rules']);
            }
            // validate the optional field `rules` (array)
            for (const item of data['rules']) {
                IoK8sApiNetworkingV1IngressRule.validateJSON(item);
            };
        }
        if (data['tls']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tls'])) {
                throw new Error("Expected the field `tls` to be an array in the JSON data but got " + data['tls']);
            }
            // validate the optional field `tls` (array)
            for (const item of data['tls']) {
                IoK8sApiNetworkingV1IngressTLS.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiNetworkingV1IngressBackend} defaultBackend
 */
IoK8sApiNetworkingV1IngressSpec.prototype['defaultBackend'] = undefined;

/**
 * ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
 * @member {String} ingressClassName
 */
IoK8sApiNetworkingV1IngressSpec.prototype['ingressClassName'] = undefined;

/**
 * rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
 * @member {Array.<module:model/IoK8sApiNetworkingV1IngressRule>} rules
 */
IoK8sApiNetworkingV1IngressSpec.prototype['rules'] = undefined;

/**
 * tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
 * @member {Array.<module:model/IoK8sApiNetworkingV1IngressTLS>} tls
 */
IoK8sApiNetworkingV1IngressSpec.prototype['tls'] = undefined;






export default IoK8sApiNetworkingV1IngressSpec;

