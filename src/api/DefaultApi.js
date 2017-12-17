/**
 * Cymbio 3 API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import GetSupplierResponse from '../model/GetSupplierResponse';
import GetVariantResponse from '../model/GetVariantResponse';
import GetVariantsResponse from '../model/GetVariantsResponse';
import ImportProductsRequest from '../model/ImportProductsRequest';
import PostSupplierRequest from '../model/PostSupplierRequest';
import PostSupplierResponse from '../model/PostSupplierResponse';
import PostVariantRequest from '../model/PostVariantRequest';
import PostVariantResponse from '../model/PostVariantResponse';
import SuccessResponse from '../model/SuccessResponse';

/**
* Default service.
* @module api/DefaultApi
* @version 3.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSupplier operation.
     * @callback module:api/DefaultApi~getSupplierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSupplierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a supplier by ID.
     * @param {Number} supplierId The id of the supplier to get.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of fields to include in the response.
     * @param {module:api/DefaultApi~getSupplierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSupplierResponse}
     */
    getSupplier(supplierId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling getSupplier");
      }


      let pathParams = {
        'supplierId': supplierId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetSupplierResponse;

      return this.apiClient.callApi(
        '/suppliers/{supplierId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariant operation.
     * @callback module:api/DefaultApi~getVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetVariantResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a variant by ID.
     * @param {Number} variantId The id of the variant to get.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of fields to include in the response.
     * @param {module:api/DefaultApi~getVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetVariantResponse}
     */
    getVariant(variantId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'variantId' is set
      if (variantId === undefined || variantId === null) {
        throw new Error("Missing the required parameter 'variantId' when calling getVariant");
      }


      let pathParams = {
        'variantId': variantId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetVariantResponse;

      return this.apiClient.callApi(
        '/variants/{variantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariants operation.
     * @callback module:api/DefaultApi~getVariantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetVariantsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all variants of a supplier.
     * @param {Number} supplierId The id of the supplier to add the variants to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of fields to include in the response.
     * @param {module:api/DefaultApi~getVariantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetVariantsResponse}
     */
    getVariants(supplierId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling getVariants");
      }


      let pathParams = {
        'supplierId': supplierId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetVariantsResponse;

      return this.apiClient.callApi(
        '/suppliers/{supplierId}/variants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importProducts operation.
     * @callback module:api/DefaultApi~importProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Imports a file of variants and adds to the supplier
     * @param {Number} supplierId The id of the supplier to add the variants to.
     * @param {Object} opts Optional parameters
     * @param {module:model/ImportProductsRequest} opts.body The file url and import parameters.
     * @param {module:api/DefaultApi~importProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    importProducts(supplierId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling importProducts");
      }


      let pathParams = {
        'supplierId': supplierId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/suppliers/{supplierId}/importProducts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postSupplier operation.
     * @callback module:api/DefaultApi~postSupplierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostSupplierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves a new supplier.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostSupplierRequest} opts.body The supplier to save.
     * @param {module:api/DefaultApi~postSupplierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostSupplierResponse}
     */
    postSupplier(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostSupplierResponse;

      return this.apiClient.callApi(
        '/suppliers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postVariant operation.
     * @callback module:api/DefaultApi~postVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostVariantResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves a new variant.
     * @param {Number} supplierId The id of the supplier to add the variants to.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostVariantRequest} opts.body The variant to save.
     * @param {module:api/DefaultApi~postVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostVariantResponse}
     */
    postVariant(supplierId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling postVariant");
      }


      let pathParams = {
        'supplierId': supplierId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostVariantResponse;

      return this.apiClient.callApi(
        '/suppliers/{supplierId}/variants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}