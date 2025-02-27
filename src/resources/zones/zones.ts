// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ZonesAPI from 'cloudflare/resources/zones/zones';
import * as ActivationCheckAPI from 'cloudflare/resources/zones/activation-check';
import * as CustomNameserversAPI from 'cloudflare/resources/zones/custom-nameservers';
import * as DNSSettingsAPI from 'cloudflare/resources/zones/dns-settings';
import * as HoldsAPI from 'cloudflare/resources/zones/holds';
import * as SubscriptionsAPI from 'cloudflare/resources/zones/subscriptions';
import * as SettingsAPI from 'cloudflare/resources/zones/settings/settings';
import * as WorkersAPI from 'cloudflare/resources/zones/workers/workers';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Zones extends APIResource {
  activationCheck: ActivationCheckAPI.ActivationCheck = new ActivationCheckAPI.ActivationCheck(this._client);
  dnsSettings: DNSSettingsAPI.DNSSettings = new DNSSettingsAPI.DNSSettings(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  customNameservers: CustomNameserversAPI.CustomNameservers = new CustomNameserversAPI.CustomNameservers(
    this._client,
  );
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  workers: WorkersAPI.Workers = new WorkersAPI.Workers(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    return (
      this._client.post('/zones', { body, ...options }) as Core.APIPromise<{ result: Zone }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, sorts, and filters your zones.
   */
  list(
    query?: ZoneListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZonesV4PagePaginationArray, Zone>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZonesV4PagePaginationArray, Zone>;
  list(
    query: ZoneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZonesV4PagePaginationArray, Zone> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/zones', ZonesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an existing zone.
   */
  delete(
    params: ZoneDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}`, options) as Core.APIPromise<{
        result: ZoneDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   */
  edit(params: ZoneEditParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}`, { body, ...options }) as Core.APIPromise<{ result: Zone }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Zone Details
   */
  get(params: ZoneGetParams, options?: Core.RequestOptions): Core.APIPromise<Zone> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}`, options) as Core.APIPromise<{ result: Zone }>)._thenUnwrap(
      (obj) => obj.result,
    );
  }
}

export class ZonesV4PagePaginationArray extends V4PagePaginationArray<Zone> {}

export interface Zone {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: Zone.Account;

  /**
   * The last time proof of ownership was detected and the zone was made active
   */
  activated_on: string | null;

  /**
   * When the zone was created
   */
  created_on: string;

  /**
   * The interval (in seconds) from when development mode expires (positive integer)
   * or last expired (negative integer) for the domain. If development mode has never
   * been enabled, this value is 0.
   */
  development_mode: number;

  /**
   * Metadata about the zone
   */
  meta: Zone.Meta;

  /**
   * When the zone was last modified
   */
  modified_on: string;

  /**
   * The domain name
   */
  name: string;

  /**
   * DNS host at the time of switching to Cloudflare
   */
  original_dnshost: string | null;

  /**
   * Original name servers before moving to Cloudflare Notes: Is this only available
   * for full zones?
   */
  original_name_servers: Array<string> | null;

  /**
   * Registrar for the domain at the time of switching to Cloudflare
   */
  original_registrar: string | null;

  /**
   * The owner of the zone
   */
  owner: Zone.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace Zone {
  /**
   * The account the zone belongs to
   */
  export interface Account {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The name of the account
     */
    name?: string;
  }

  /**
   * Metadata about the zone
   */
  export interface Meta {
    /**
     * The zone is only configured for CDN
     */
    cdn_only?: boolean;

    /**
     * Number of Custom Certificates the zone can have
     */
    custom_certificate_quota?: number;

    /**
     * The zone is only configured for DNS
     */
    dns_only?: boolean;

    /**
     * The zone is setup with Foundation DNS
     */
    foundation_dns?: boolean;

    /**
     * Number of Page Rules a zone can have
     */
    page_rule_quota?: number;

    /**
     * The zone has been flagged for phishing
     */
    phishing_detected?: boolean;

    step?: number;
  }

  /**
   * The owner of the zone
   */
  export interface Owner {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Name of the owner
     */
    name?: string;

    /**
     * The type of owner
     */
    type?: string;
  }
}

export interface ZoneDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface ZoneCreateParams {
  account: ZoneCreateParams.Account;

  /**
   * The domain name
   */
  name: string;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: 'full' | 'partial' | 'secondary';
}

export namespace ZoneCreateParams {
  export interface Account {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneListParams extends V4PagePaginationArrayParams {
  account?: ZoneListParams.Account;

  /**
   * Direction to order zones.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * A domain name. Optional filter operators can be provided to extend refine the
   * search:
   *
   * - `equal` (default)
   * - `not_equal`
   * - `starts_with`
   * - `ends_with`
   * - `contains`
   * - `starts_with_case_sensitive`
   * - `ends_with_case_sensitive`
   * - `contains_case_sensitive`
   */
  name?: string;

  /**
   * Field to order zones by.
   */
  order?: 'name' | 'status' | 'account.id' | 'account.name';

  /**
   * A zone status
   */
  status?: 'initializing' | 'pending' | 'active' | 'moved';
}

export namespace ZoneListParams {
  export interface Account {
    /**
     * An account ID
     */
    id?: string;

    /**
     * An account Name. Optional filter operators can be provided to extend refine the
     * search:
     *
     * - `equal` (default)
     * - `not_equal`
     * - `starts_with`
     * - `ends_with`
     * - `contains`
     * - `starts_with_case_sensitive`
     * - `ends_with_case_sensitive`
     * - `contains_case_sensitive`
     */
    name?: string;
  }
}

export interface ZoneDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ZoneEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: (Deprecated) Please use the `/zones/{zone_id}/subscription` API to
   * update a zone's plan. Changing this value will create/cancel associated
   * subscriptions. To view available plans for this zone, see Zone Plans.
   */
  plan?: ZoneEditParams.Plan;

  /**
   * Body param: A full zone implies that DNS is hosted with Cloudflare. A partial
   * zone is typically a partner-hosted zone or a CNAME setup. This parameter is only
   * available to Enterprise customers or if it has been explicitly enabled on a
   * zone.
   */
  type?: 'full' | 'partial' | 'secondary';

  /**
   * Body param: An array of domains used for custom name servers. This is only
   * available for Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneEditParams {
  /**
   * (Deprecated) Please use the `/zones/{zone_id}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  export interface Plan {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Zones {
  export import Zone = ZonesAPI.Zone;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZonesV4PagePaginationArray = ZonesAPI.ZonesV4PagePaginationArray;
  export import ZoneCreateParams = ZonesAPI.ZoneCreateParams;
  export import ZoneListParams = ZonesAPI.ZoneListParams;
  export import ZoneDeleteParams = ZonesAPI.ZoneDeleteParams;
  export import ZoneEditParams = ZonesAPI.ZoneEditParams;
  export import ZoneGetParams = ZonesAPI.ZoneGetParams;
  export import ActivationCheck = ActivationCheckAPI.ActivationCheck;
  export import ActivationCheckTriggerResponse = ActivationCheckAPI.ActivationCheckTriggerResponse;
  export import ActivationCheckTriggerParams = ActivationCheckAPI.ActivationCheckTriggerParams;
  export import DNSSettings = DNSSettingsAPI.DNSSettings;
  export import DNSSettingEditResponse = DNSSettingsAPI.DNSSettingEditResponse;
  export import DNSSettingGetResponse = DNSSettingsAPI.DNSSettingGetResponse;
  export import DNSSettingEditParams = DNSSettingsAPI.DNSSettingEditParams;
  export import DNSSettingGetParams = DNSSettingsAPI.DNSSettingGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import CustomNameservers = CustomNameserversAPI.CustomNameservers;
  export import CustomNameserverUpdateResponse = CustomNameserversAPI.CustomNameserverUpdateResponse;
  export import CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export import CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
  export import CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
  export import Holds = HoldsAPI.Holds;
  export import HoldCreateResponse = HoldsAPI.HoldCreateResponse;
  export import HoldDeleteResponse = HoldsAPI.HoldDeleteResponse;
  export import HoldGetResponse = HoldsAPI.HoldGetResponse;
  export import HoldCreateParams = HoldsAPI.HoldCreateParams;
  export import HoldDeleteParams = HoldsAPI.HoldDeleteParams;
  export import HoldGetParams = HoldsAPI.HoldGetParams;
  export import Workers = WorkersAPI.Workers;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionCreateResponse = SubscriptionsAPI.SubscriptionCreateResponse;
  export import SubscriptionListResponse = SubscriptionsAPI.SubscriptionListResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionListResponsesSinglePage = SubscriptionsAPI.SubscriptionListResponsesSinglePage;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
}
