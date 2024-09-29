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
import ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeHttpGetListInner from './ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeHttpGetListInner';
import ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner from './ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner';
import ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTcpSocketListInner from './ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTcpSocketListInner';

/**
 * The ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe model module.
 * @module model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe
 * @version v1.30.0
 */
class ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe {
    /**
     * Constructs a new <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe</code>.
     * @alias module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe
     */
    constructor() { 
        
        ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe} obj Optional instance to populate.
     * @return {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe} The populated <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe();

            if (data.hasOwnProperty('httpGetList')) {
                obj['httpGetList'] = ApiClient.convertToType(data['httpGetList'], [ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeHttpGetListInner]);
            }
            if (data.hasOwnProperty('taskStatusList')) {
                obj['taskStatusList'] = ApiClient.convertToType(data['taskStatusList'], [ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner]);
            }
            if (data.hasOwnProperty('tcpSocketList')) {
                obj['tcpSocketList'] = ApiClient.convertToType(data['tcpSocketList'], [ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTcpSocketListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe</code>.
     */
    static validateJSON(data) {
        if (data['httpGetList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['httpGetList'])) {
                throw new Error("Expected the field `httpGetList` to be an array in the JSON data but got " + data['httpGetList']);
            }
            // validate the optional field `httpGetList` (array)
            for (const item of data['httpGetList']) {
                ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeHttpGetListInner.validateJSON(item);
            };
        }
        if (data['taskStatusList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['taskStatusList'])) {
                throw new Error("Expected the field `taskStatusList` to be an array in the JSON data but got " + data['taskStatusList']);
            }
            // validate the optional field `taskStatusList` (array)
            for (const item of data['taskStatusList']) {
                ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner.validateJSON(item);
            };
        }
        if (data['tcpSocketList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tcpSocketList'])) {
                throw new Error("Expected the field `tcpSocketList` to be an array in the JSON data but got " + data['tcpSocketList']);
            }
            // validate the optional field `tcpSocketList` (array)
            for (const item of data['tcpSocketList']) {
                ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTcpSocketListInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeHttpGetListInner>} httpGetList
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.prototype['httpGetList'] = undefined;

/**
 * @member {Array.<module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner>} taskStatusList
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.prototype['taskStatusList'] = undefined;

/**
 * @member {Array.<module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTcpSocketListInner>} tcpSocketList
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.prototype['tcpSocketList'] = undefined;






export default ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe;

