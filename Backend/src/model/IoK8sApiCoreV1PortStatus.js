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
 * The IoK8sApiCoreV1PortStatus model module.
 * @module model/IoK8sApiCoreV1PortStatus
 * @version v1.30.0
 */
class IoK8sApiCoreV1PortStatus {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PortStatus</code>.
     * @alias module:model/IoK8sApiCoreV1PortStatus
     * @param port {Number} Port is the port number of the service port of which status is recorded here
     * @param protocol {module:model/IoK8sApiCoreV1PortStatus.ProtocolEnum} Protocol is the protocol of the service port of which status is recorded here The supported values are: \"TCP\", \"UDP\", \"SCTP\"  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
     */
    constructor(port, protocol) { 
        
        IoK8sApiCoreV1PortStatus.initialize(this, port, protocol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, port, protocol) { 
        obj['port'] = port;
        obj['protocol'] = protocol;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PortStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PortStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PortStatus} The populated <code>IoK8sApiCoreV1PortStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PortStatus();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
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
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PortStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PortStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PortStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }

        return true;
    }


}

IoK8sApiCoreV1PortStatus.RequiredProperties = ["port", "protocol"];

/**
 * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
 * @member {String} error
 */
IoK8sApiCoreV1PortStatus.prototype['error'] = undefined;

/**
 * Port is the port number of the service port of which status is recorded here
 * @member {Number} port
 */
IoK8sApiCoreV1PortStatus.prototype['port'] = undefined;

/**
 * Protocol is the protocol of the service port of which status is recorded here The supported values are: \"TCP\", \"UDP\", \"SCTP\"  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
 * @member {module:model/IoK8sApiCoreV1PortStatus.ProtocolEnum} protocol
 */
IoK8sApiCoreV1PortStatus.prototype['protocol'] = undefined;





/**
 * Allowed values for the <code>protocol</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1PortStatus['ProtocolEnum'] = {

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



export default IoK8sApiCoreV1PortStatus;

