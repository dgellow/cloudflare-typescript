// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LockdownsAPI from 'cloudflare/resources/firewall/lockdowns';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Lockdowns extends APIResource {
  /**
   * Creates a new Zone Lockdown rule.
   */
  create(
    zoneIdentifier: string,
    body: LockdownCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallZoneLockdown | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/lockdowns`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallZoneLockdown | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Zone Lockdown rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: LockdownUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallZoneLockdown | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallZoneLockdown | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Zone Lockdown rules. You can filter the results using several optional
   * parameters.
   */
  list(
    zoneIdentifier: string,
    query?: LockdownListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallZoneLockdownsV4PagePaginationArray, FirewallZoneLockdown>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallZoneLockdownsV4PagePaginationArray, FirewallZoneLockdown>;
  list(
    zoneIdentifier: string,
    query: LockdownListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallZoneLockdownsV4PagePaginationArray, FirewallZoneLockdown> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/lockdowns`,
      FirewallZoneLockdownsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing Zone Lockdown rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LockdownDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, options) as Core.APIPromise<{
        result: LockdownDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a Zone Lockdown rule.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallZoneLockdown | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, options) as Core.APIPromise<{
        result: FirewallZoneLockdown | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallZoneLockdownsV4PagePaginationArray extends V4PagePaginationArray<FirewallZoneLockdown> {}

export interface FirewallZoneLockdown {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id: string;

  /**
   * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
   * specified in the Zone Lockdown rule. You can include any number of `ip` or
   * `ip_range` configurations.
   */
  configurations:
    | FirewallZoneLockdown.LegacyJhsSchemasIPConfiguration
    | FirewallZoneLockdown.LegacyJhsSchemasCIDRConfiguration;

  /**
   * The timestamp of when the rule was created.
   */
  created_on: string;

  /**
   * An informative summary of the rule.
   */
  description: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on: string;

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused: boolean;

  /**
   * The URLs to include in the rule definition. You can use wildcards. Each entered
   * URL will be escaped before use, which means you can only use simple wildcard
   * patterns.
   */
  urls: Array<string>;
}

export namespace FirewallZoneLockdown {
  export interface LegacyJhsSchemasIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the Zone Lockdown rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface LegacyJhsSchemasCIDRConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the Zone Lockdown rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
     */
    value?: string;
  }
}

export interface LockdownDeleteResponse {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id?: string;
}

export type LockdownCreateParams = unknown;

export type LockdownUpdateParams = unknown;

export interface LockdownListParams extends V4PagePaginationArrayParams {
  /**
   * A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * A single IP address to search for in existing rules.
   */
  ip?: string;

  /**
   * A single IP address range to search for in existing rules.
   */
  ip_range_search?: string;

  /**
   * A single IP address to search for in existing rules.
   */
  ip_search?: string;

  /**
   * The priority of the rule to control the processing order. A lower number
   * indicates higher priority. If not provided, any rules with a configured priority
   * will be processed before rules without a priority.
   */
  priority?: number;

  /**
   * A single URI to search for in the list of URLs of existing rules.
   */
  uri_search?: string;
}

export namespace Lockdowns {
  export import FirewallZoneLockdown = LockdownsAPI.FirewallZoneLockdown;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import FirewallZoneLockdownsV4PagePaginationArray = LockdownsAPI.FirewallZoneLockdownsV4PagePaginationArray;
  export import LockdownCreateParams = LockdownsAPI.LockdownCreateParams;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownListParams = LockdownsAPI.LockdownListParams;
}
