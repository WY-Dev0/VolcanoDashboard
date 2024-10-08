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
    instance = new Kubernetes.AdmissionregistrationV1Api();
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

  describe('AdmissionregistrationV1Api', function() {
    describe('createAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call createAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test createAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.createAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call createAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test createAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.createAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call createAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test createAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.createAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call createAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test createAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.createAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration', function() {
      it('should call deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration
        //instance.deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy', function() {
      it('should call deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy
        //instance.deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding', function() {
      it('should call deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding
        //instance.deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration', function() {
      it('should call deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration
        //instance.deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call deleteAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.deleteAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call deleteAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.deleteAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call deleteAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.deleteAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdmissionregistrationV1APIResources', function() {
      it('should call getAdmissionregistrationV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getAdmissionregistrationV1APIResources
        //instance.getAdmissionregistrationV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call listAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test listAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.listAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call listAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test listAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.listAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call listAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test listAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.listAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call listAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test listAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.listAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call patchAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.patchAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call patchAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test patchAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.patchAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus', function() {
      it('should call patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus successfully', function(done) {
        //uncomment below and update the code to test patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus
        //instance.patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call patchAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.patchAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call readAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test readAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.readAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call readAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test readAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.readAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call readAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test readAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.readAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAdmissionregistrationV1ValidatingAdmissionPolicyStatus', function() {
      it('should call readAdmissionregistrationV1ValidatingAdmissionPolicyStatus successfully', function(done) {
        //uncomment below and update the code to test readAdmissionregistrationV1ValidatingAdmissionPolicyStatus
        //instance.readAdmissionregistrationV1ValidatingAdmissionPolicyStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call readAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test readAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.readAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call replaceAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test replaceAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.replaceAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call replaceAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test replaceAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.replaceAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus', function() {
      it('should call replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus
        //instance.replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call replaceAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test replaceAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.replaceAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1MutatingWebhookConfiguration', function() {
      it('should call watchAdmissionregistrationV1MutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1MutatingWebhookConfiguration
        //instance.watchAdmissionregistrationV1MutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1MutatingWebhookConfigurationList', function() {
      it('should call watchAdmissionregistrationV1MutatingWebhookConfigurationList successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1MutatingWebhookConfigurationList
        //instance.watchAdmissionregistrationV1MutatingWebhookConfigurationList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingAdmissionPolicy', function() {
      it('should call watchAdmissionregistrationV1ValidatingAdmissionPolicy successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingAdmissionPolicy
        //instance.watchAdmissionregistrationV1ValidatingAdmissionPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding', function() {
      it('should call watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding
        //instance.watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList', function() {
      it('should call watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList
        //instance.watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingAdmissionPolicyList', function() {
      it('should call watchAdmissionregistrationV1ValidatingAdmissionPolicyList successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingAdmissionPolicyList
        //instance.watchAdmissionregistrationV1ValidatingAdmissionPolicyList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingWebhookConfiguration', function() {
      it('should call watchAdmissionregistrationV1ValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingWebhookConfiguration
        //instance.watchAdmissionregistrationV1ValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAdmissionregistrationV1ValidatingWebhookConfigurationList', function() {
      it('should call watchAdmissionregistrationV1ValidatingWebhookConfigurationList successfully', function(done) {
        //uncomment below and update the code to test watchAdmissionregistrationV1ValidatingWebhookConfigurationList
        //instance.watchAdmissionregistrationV1ValidatingWebhookConfigurationList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
