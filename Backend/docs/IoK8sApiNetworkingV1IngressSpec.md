# Kubernetes.IoK8sApiNetworkingV1IngressSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultBackend** | [**IoK8sApiNetworkingV1IngressBackend**](IoK8sApiNetworkingV1IngressBackend.md) |  | [optional] 
**ingressClassName** | **String** | ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -&gt; IngressClass -&gt; Ingress resource). Although the &#x60;kubernetes.io/ingress.class&#x60; annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present. | [optional] 
**rules** | [**[IoK8sApiNetworkingV1IngressRule]**](IoK8sApiNetworkingV1IngressRule.md) | rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. | [optional] 
**tls** | [**[IoK8sApiNetworkingV1IngressTLS]**](IoK8sApiNetworkingV1IngressTLS.md) | tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. | [optional] 


