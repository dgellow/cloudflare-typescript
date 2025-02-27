// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/pagerules/settings';

export class Settings extends APIResource {
  /**
   * Returns a list of settings (and their details) that Page Rules can apply to
   * matching requests.
   */
  list(params: SettingListParams, options?: Core.RequestOptions): Core.APIPromise<ZonePageruleSettings> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/pagerules/settings`, options) as Core.APIPromise<{
        result: ZonePageruleSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Settings available for the zone.
 */
export type ZonePageruleSettings = Array<unknown>;

export interface SettingListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Settings {
  export import ZonePageruleSettings = SettingsAPI.ZonePageruleSettings;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
