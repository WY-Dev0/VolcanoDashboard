# Kubernetes.WellKnownApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceAccountIssuerOpenIDConfiguration**](WellKnownApi.md#getServiceAccountIssuerOpenIDConfiguration) | **GET** /.well-known/openid-configuration/ | 



## getServiceAccountIssuerOpenIDConfiguration

> String getServiceAccountIssuerOpenIDConfiguration()



get service account issuer OpenID configuration, also known as the &#39;OIDC discovery doc&#39;

### Example

```javascript
import Kubernetes from 'kubernetes';
let defaultClient = Kubernetes.ApiClient.instance;
// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new Kubernetes.WellKnownApi();
apiInstance.getServiceAccountIssuerOpenIDConfiguration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

