// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackDomainsAPI from 'cloudflare/resources/devices/policies/fallback-domains';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  update(
    policyId: string,
    params: FallbackDomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/policy/${policyId}/fallback_domains`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: FallbackDomainUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  list(
    params: FallbackDomainListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/policy/fallback_domains`,
        options,
      ) as Core.APIPromise<{ result: FallbackDomainListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  get(
    policyId: string,
    params: FallbackDomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/policy/${policyId}/fallback_domains`,
        options,
      ) as Core.APIPromise<{ result: FallbackDomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackDomainUpdateResponse =
  Array<FallbackDomainUpdateResponse.FallbackDomainUpdateResponseItem>;

export namespace FallbackDomainUpdateResponse {
  export interface FallbackDomainUpdateResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainListResponse = Array<FallbackDomainListResponse.FallbackDomainListResponseItem>;

export namespace FallbackDomainListResponse {
  export interface FallbackDomainListResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainGetResponse = Array<FallbackDomainGetResponse.FallbackDomainGetResponseItem>;

export namespace FallbackDomainGetResponse {
  export interface FallbackDomainGetResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export interface FallbackDomainUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param:
   */
  body: Array<FallbackDomainUpdateParams.Body>;
}

export namespace FallbackDomainUpdateParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export interface FallbackDomainListParams {
  account_id: unknown;
}

export interface FallbackDomainGetParams {
  account_id: unknown;
}

export namespace FallbackDomains {
  export import FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export import FallbackDomainListResponse = FallbackDomainsAPI.FallbackDomainListResponse;
  export import FallbackDomainGetResponse = FallbackDomainsAPI.FallbackDomainGetResponse;
  export import FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
  export import FallbackDomainListParams = FallbackDomainsAPI.FallbackDomainListParams;
  export import FallbackDomainGetParams = FallbackDomainsAPI.FallbackDomainGetParams;
}
