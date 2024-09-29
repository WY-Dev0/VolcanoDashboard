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
import IoK8sApiCoreV1ObjectReference from './IoK8sApiCoreV1ObjectReference';
import IoK8sApiDiscoveryV1EndpointConditions from './IoK8sApiDiscoveryV1EndpointConditions';
import IoK8sApiDiscoveryV1EndpointHints from './IoK8sApiDiscoveryV1EndpointHints';

/**
 * The IoK8sApiDiscoveryV1Endpoint model module.
 * @module model/IoK8sApiDiscoveryV1Endpoint
 * @version v1.30.0
 */
class IoK8sApiDiscoveryV1Endpoint {
    /**
     * Constructs a new <code>IoK8sApiDiscoveryV1Endpoint</code>.
     * Endpoint represents a single logical \&quot;backend\&quot; implementing a service.
     * @alias module:model/IoK8sApiDiscoveryV1Endpoint
     * @param addresses {Array.<String>} addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
     */
    constructor(addresses) { 
        
        IoK8sApiDiscoveryV1Endpoint.initialize(this, addresses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses) { 
        obj['addresses'] = addresses;
    }

    /**
     * Constructs a <code>IoK8sApiDiscoveryV1Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiDiscoveryV1Endpoint} obj Optional instance to populate.
     * @return {module:model/IoK8sApiDiscoveryV1Endpoint} The populated <code>IoK8sApiDiscoveryV1Endpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiDiscoveryV1Endpoint();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = IoK8sApiDiscoveryV1EndpointConditions.constructFromObject(data['conditions']);
            }
            if (data.hasOwnProperty('deprecatedTopology')) {
                obj['deprecatedTopology'] = ApiClient.convertToType(data['deprecatedTopology'], {'String': 'String'});
            }
            if (data.hasOwnProperty('hints')) {
                obj['hints'] = IoK8sApiDiscoveryV1EndpointHints.constructFromObject(data['hints']);
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('nodeName')) {
                obj['nodeName'] = ApiClient.convertToType(data['nodeName'], 'String');
            }
            if (data.hasOwnProperty('targetRef')) {
                obj['targetRef'] = IoK8sApiCoreV1ObjectReference.constructFromObject(data['targetRef']);
            }
            if (data.hasOwnProperty('zone')) {
                obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiDiscoveryV1Endpoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiDiscoveryV1Endpoint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiDiscoveryV1Endpoint.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['addresses'])) {
            throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
        }
        // validate the optional field `conditions`
        if (data['conditions']) { // data not null
          IoK8sApiDiscoveryV1EndpointConditions.validateJSON(data['conditions']);
        }
        // validate the optional field `hints`
        if (data['hints']) { // data not null
          IoK8sApiDiscoveryV1EndpointHints.validateJSON(data['hints']);
        }
        // ensure the json data is a string
        if (data['hostname'] && !(typeof data['hostname'] === 'string' || data['hostname'] instanceof String)) {
            throw new Error("Expected the field `hostname` to be a primitive type in the JSON string but got " + data['hostname']);
        }
        // ensure the json data is a string
        if (data['nodeName'] && !(typeof data['nodeName'] === 'string' || data['nodeName'] instanceof String)) {
            throw new Error("Expected the field `nodeName` to be a primitive type in the JSON string but got " + data['nodeName']);
        }
        // validate the optional field `targetRef`
        if (data['targetRef']) { // data not null
          IoK8sApiCoreV1ObjectReference.validateJSON(data['targetRef']);
        }
        // ensure the json data is a string
        if (data['zone'] && !(typeof data['zone'] === 'string' || data['zone'] instanceof String)) {
            throw new Error("Expected the field `zone` to be a primitive type in the JSON string but got " + data['zone']);
        }

        return true;
    }


}

IoK8sApiDiscoveryV1Endpoint.RequiredProperties = ["addresses"];

/**
 * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
 * @member {Array.<String>} addresses
 */
IoK8sApiDiscoveryV1Endpoint.prototype['addresses'] = undefined;

/**
 * @member {module:model/IoK8sApiDiscoveryV1EndpointConditions} conditions
 */
IoK8sApiDiscoveryV1Endpoint.prototype['conditions'] = undefined;

/**
 * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
 * @member {Object.<String, String>} deprecatedTopology
 */
IoK8sApiDiscoveryV1Endpoint.prototype['deprecatedTopology'] = undefined;

/**
 * @member {module:model/IoK8sApiDiscoveryV1EndpointHints} hints
 */
IoK8sApiDiscoveryV1Endpoint.prototype['hints'] = undefined;

/**
 * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
 * @member {String} hostname
 */
IoK8sApiDiscoveryV1Endpoint.prototype['hostname'] = undefined;

/**
 * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
 * @member {String} nodeName
 */
IoK8sApiDiscoveryV1Endpoint.prototype['nodeName'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ObjectReference} targetRef
 */
IoK8sApiDiscoveryV1Endpoint.prototype['targetRef'] = undefined;

/**
 * zone is the name of the Zone this endpoint exists in.
 * @member {String} zone
 */
IoK8sApiDiscoveryV1Endpoint.prototype['zone'] = undefined;






export default IoK8sApiDiscoveryV1Endpoint;
