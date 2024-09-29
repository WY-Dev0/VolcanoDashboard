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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kubernetes);
  }
}(this, function(expect, Kubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kubernetes.FlowcontrolApiserverV1beta3Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FlowcontrolApiserverV1beta3Api', function() {
    describe('createFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call createFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test createFlowcontrolApiserverV1beta3FlowSchema
        //instance.createFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call createFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test createFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.createFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowcontrolApiserverV1beta3CollectionFlowSchema', function() {
      it('should call deleteFlowcontrolApiserverV1beta3CollectionFlowSchema successfully', function(done) {
        //uncomment below and update the code to test deleteFlowcontrolApiserverV1beta3CollectionFlowSchema
        //instance.deleteFlowcontrolApiserverV1beta3CollectionFlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfiguration', function() {
      it('should call deleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfiguration
        //instance.deleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call deleteFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test deleteFlowcontrolApiserverV1beta3FlowSchema
        //instance.deleteFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call deleteFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.deleteFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFlowcontrolApiserverV1beta3APIResources', function() {
      it('should call getFlowcontrolApiserverV1beta3APIResources successfully', function(done) {
        //uncomment below and update the code to test getFlowcontrolApiserverV1beta3APIResources
        //instance.getFlowcontrolApiserverV1beta3APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call listFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test listFlowcontrolApiserverV1beta3FlowSchema
        //instance.listFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call listFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test listFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.listFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call patchFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test patchFlowcontrolApiserverV1beta3FlowSchema
        //instance.patchFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowcontrolApiserverV1beta3FlowSchemaStatus', function() {
      it('should call patchFlowcontrolApiserverV1beta3FlowSchemaStatus successfully', function(done) {
        //uncomment below and update the code to test patchFlowcontrolApiserverV1beta3FlowSchemaStatus
        //instance.patchFlowcontrolApiserverV1beta3FlowSchemaStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call patchFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.patchFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus', function() {
      it('should call patchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus successfully', function(done) {
        //uncomment below and update the code to test patchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus
        //instance.patchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call readFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test readFlowcontrolApiserverV1beta3FlowSchema
        //instance.readFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowcontrolApiserverV1beta3FlowSchemaStatus', function() {
      it('should call readFlowcontrolApiserverV1beta3FlowSchemaStatus successfully', function(done) {
        //uncomment below and update the code to test readFlowcontrolApiserverV1beta3FlowSchemaStatus
        //instance.readFlowcontrolApiserverV1beta3FlowSchemaStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call readFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test readFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.readFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus', function() {
      it('should call readFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus successfully', function(done) {
        //uncomment below and update the code to test readFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus
        //instance.readFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call replaceFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test replaceFlowcontrolApiserverV1beta3FlowSchema
        //instance.replaceFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowcontrolApiserverV1beta3FlowSchemaStatus', function() {
      it('should call replaceFlowcontrolApiserverV1beta3FlowSchemaStatus successfully', function(done) {
        //uncomment below and update the code to test replaceFlowcontrolApiserverV1beta3FlowSchemaStatus
        //instance.replaceFlowcontrolApiserverV1beta3FlowSchemaStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call replaceFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test replaceFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.replaceFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus', function() {
      it('should call replaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus successfully', function(done) {
        //uncomment below and update the code to test replaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus
        //instance.replaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchFlowcontrolApiserverV1beta3FlowSchema', function() {
      it('should call watchFlowcontrolApiserverV1beta3FlowSchema successfully', function(done) {
        //uncomment below and update the code to test watchFlowcontrolApiserverV1beta3FlowSchema
        //instance.watchFlowcontrolApiserverV1beta3FlowSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchFlowcontrolApiserverV1beta3FlowSchemaList', function() {
      it('should call watchFlowcontrolApiserverV1beta3FlowSchemaList successfully', function(done) {
        //uncomment below and update the code to test watchFlowcontrolApiserverV1beta3FlowSchemaList
        //instance.watchFlowcontrolApiserverV1beta3FlowSchemaList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchFlowcontrolApiserverV1beta3PriorityLevelConfiguration', function() {
      it('should call watchFlowcontrolApiserverV1beta3PriorityLevelConfiguration successfully', function(done) {
        //uncomment below and update the code to test watchFlowcontrolApiserverV1beta3PriorityLevelConfiguration
        //instance.watchFlowcontrolApiserverV1beta3PriorityLevelConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchFlowcontrolApiserverV1beta3PriorityLevelConfigurationList', function() {
      it('should call watchFlowcontrolApiserverV1beta3PriorityLevelConfigurationList successfully', function(done) {
        //uncomment below and update the code to test watchFlowcontrolApiserverV1beta3PriorityLevelConfigurationList
        //instance.watchFlowcontrolApiserverV1beta3PriorityLevelConfigurationList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
