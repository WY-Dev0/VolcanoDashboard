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
 * The IoK8sApiCoreV1GRPCAction model module.
 * @module model/IoK8sApiCoreV1GRPCAction
 * @version v1.30.0
 */
class IoK8sApiCoreV1GRPCAction {
    /**
     * Constructs a new <code>IoK8sApiCoreV1GRPCAction</code>.
     * @alias module:model/IoK8sApiCoreV1GRPCAction
     * @param port {Number} Port number of the gRPC service. Number must be in the range 1 to 65535.
     */
    constructor(port) { 
        
        IoK8sApiCoreV1GRPCAction.initialize(this, port);
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
     * Constructs a <code>IoK8sApiCoreV1GRPCAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1GRPCAction} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1GRPCAction} The populated <code>IoK8sApiCoreV1GRPCAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1GRPCAction();

            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1GRPCAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1GRPCAction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1GRPCAction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['service'] && !(typeof data['service'] === 'string' || data['service'] instanceof String)) {
            throw new Error("Expected the field `service` to be a primitive type in the JSON string but got " + data['service']);
        }

        return true;
    }


}

IoK8sApiCoreV1GRPCAction.RequiredProperties = ["port"];

/**
 * Port number of the gRPC service. Number must be in the range 1 to 65535.
 * @member {Number} port
 */
IoK8sApiCoreV1GRPCAction.prototype['port'] = undefined;

/**
 * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).  If this is not specified, the default behavior is defined by gRPC.
 * @member {String} service
 */
IoK8sApiCoreV1GRPCAction.prototype['service'] = undefined;






export default IoK8sApiCoreV1GRPCAction;
