// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VerificationAPI from 'cloudflare/resources/ssl/verification';

export class Verification extends APIResource {
  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request
   * an immediate validation check on any certificate, and return the updated status.
   * If a validation method is provided, the validation will be immediately attempted
   * using that method.
   */
  edit(
    certificatePackId: string,
    params: VerificationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/ssl/verification/${certificatePackId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VerificationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get SSL Verification Info for a Zone.
   */
  get(
    params: VerificationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/ssl/verification`, { query, ...options }) as Core.APIPromise<{
        result: VerificationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TLSVerificationSetting {
  /**
   * Current status of certificate.
   */
  certificate_status:
    | 'initializing'
    | 'authorizing'
    | 'active'
    | 'expired'
    | 'issuing'
    | 'timing_out'
    | 'pending_deployment';

  /**
   * Certificate Authority is manually reviewing the order.
   */
  brand_check?: boolean;

  /**
   * Certificate Pack UUID.
   */
  cert_pack_uuid?: string;

  /**
   * Certificate's signature algorithm.
   */
  signature?: 'ECDSAWithSHA256' | 'SHA1WithRSA' | 'SHA256WithRSA';

  /**
   * Validation method in use for a certificate pack order.
   */
  validation_method?: 'http' | 'cname' | 'txt';

  /**
   * Certificate's required verification information.
   */
  verification_info?: TLSVerificationSetting.VerificationInfo;

  /**
   * Status of the required verification information, omitted if verification status
   * is unknown.
   */
  verification_status?: boolean;

  /**
   * Method of verification.
   */
  verification_type?: 'cname' | 'meta tag';
}

export namespace TLSVerificationSetting {
  /**
   * Certificate's required verification information.
   */
  export interface VerificationInfo {
    /**
     * Name of CNAME record.
     */
    record_name?: 'record_name' | 'http_url' | 'cname' | 'txt_name';

    /**
     * Target of CNAME record.
     */
    record_target?: 'record_value' | 'http_body' | 'cname_target' | 'txt_value';
  }
}

export interface VerificationEditResponse {
  /**
   * Result status.
   */
  status?: string;

  /**
   * Desired validation method.
   */
  validation_method?: 'http' | 'cname' | 'txt' | 'email';
}

export type VerificationGetResponse = Array<TLSVerificationSetting>;

export interface VerificationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Desired validation method.
   */
  validation_method: 'http' | 'cname' | 'txt' | 'email';
}

export interface VerificationGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Immediately retry SSL Verification.
   */
  retry?: true;
}

export namespace Verification {
  export import TLSVerificationSetting = VerificationAPI.TLSVerificationSetting;
  export import VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export import VerificationGetResponse = VerificationAPI.VerificationGetResponse;
  export import VerificationEditParams = VerificationAPI.VerificationEditParams;
  export import VerificationGetParams = VerificationAPI.VerificationGetParams;
}
