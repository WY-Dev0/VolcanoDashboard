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

/**
 * The IoK8sApiCoreV1EndpointPort model module.
 * @module model/IoK8sApiCoreV1EndpointPort
 * @version v1.30.0
 */
class IoK8sApiCoreV1EndpointPort {
    /**
     * Constructs a new <code>IoK8sApiCoreV1EndpointPort</code>.
     * EndpointPort is a tuple that describes a single port.
     * @alias module:model/IoK8sApiCoreV1EndpointPort
     * @param port {Number} The port number of the endpoint.
     */
    constructor(port) { 
        
        IoK8sApiCoreV1EndpointPort.initialize(this, port);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, port) { 
        obj['port'] = port;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1EndpointPort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1EndpointPort} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1EndpointPort} The populated <code>IoK8sApiCoreV1EndpointPort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1EndpointPort();

            if (data.hasOwnProperty('appProtocol')) {
                obj['appProtocol'] = ApiClient.convertToType(data['appProtocol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1EndpointPort</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1EndpointPort</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1EndpointPort.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['appProtocol'] && !(typeof data['appProtocol'] === 'string' || data['appProtocol'] instanceof String)) {
            throw new Error("Expected the field `appProtocol` to be a primitive type in the JSON string but got " + data['appProtocol']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }

        return true;
    }


}

IoK8sApiCoreV1EndpointPort.RequiredProperties = ["port"];

/**
 * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:  * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).  * Kubernetes-defined prefixed names:   * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-   * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455   * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455  * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
 * @member {String} appProtocol
 */
IoK8sApiCoreV1EndpointPort.prototype['appProtocol'] = undefined;

/**
 * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
 * @member {String} name
 */
IoK8sApiCoreV1EndpointPort.prototype['name'] = undefined;

/**
 * The port number of the endpoint.
 * @member {Number} port
 */
IoK8sApiCoreV1EndpointPort.prototype['port'] = undefined;

/**
 * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
 * @member {module:model/IoK8sApiCoreV1EndpointPort.ProtocolEnum} protocol
 */
IoK8sApiCoreV1EndpointPort.prototype['protocol'] = undefined;





/**
 * Allowed values for the <code>protocol</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1EndpointPort['ProtocolEnum'] = {

    /**
     * value: "SCTP"
     * @const
     */
    "SCTP": "SCTP",

    /**
     * value: "TCP"
     * @const
     */
    "TCP": "TCP",

    /**
     * value: "UDP"
     * @const
     */
    "UDP": "UDP"
};



export default IoK8sApiCoreV1EndpointPort;
