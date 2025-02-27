// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/devices/devices';
import * as DEXTestsAPI from 'cloudflare/resources/zero-trust/devices/dex-tests';
import * as NetworksAPI from 'cloudflare/resources/zero-trust/devices/networks';
import * as OverrideCodesAPI from 'cloudflare/resources/zero-trust/devices/override-codes';
import * as RevokeAPI from 'cloudflare/resources/zero-trust/devices/revoke';
import * as SettingsAPI from 'cloudflare/resources/zero-trust/devices/settings';
import * as UnrevokeAPI from 'cloudflare/resources/zero-trust/devices/unrevoke';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/devices/policies/policies';
import * as PostureAPI from 'cloudflare/resources/zero-trust/devices/posture/posture';
import { SinglePage } from 'cloudflare/pagination';

export class Devices extends APIResource {
  dexTests: DEXTestsAPI.DEXTests = new DEXTestsAPI.DEXTests(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  posture: PostureAPI.Posture = new PostureAPI.Posture(this._client);
  revoke: RevokeAPI.Revoke = new RevokeAPI.Revoke(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  unrevoke: UnrevokeAPI.Unrevoke = new UnrevokeAPI.Unrevoke(this._client);
  overrideCodes: OverrideCodesAPI.OverrideCodes = new OverrideCodesAPI.OverrideCodes(this._client);

  /**
   * Fetches a list of enrolled devices.
   */
  list(
    params: DeviceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustDevicesSinglePage, ZeroTrustDevices> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/devices`, ZeroTrustDevicesSinglePage, options);
  }

  /**
   * Fetches details for a single device.
   */
  get(
    deviceId: string,
    params: DeviceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/${deviceId}`, options) as Core.APIPromise<{
        result: DeviceGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustDevicesSinglePage extends SinglePage<ZeroTrustDevices> {}

export interface ZeroTrustDevices {
  /**
   * Device ID.
   */
  id?: string;

  /**
   * When the device was created.
   */
  created?: string;

  /**
   * True if the device was deleted.
   */
  deleted?: boolean;

  device_type?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';

  /**
   * IPv4 or IPv6 address.
   */
  ip?: string;

  /**
   * The device's public key.
   */
  key?: string;

  /**
   * When the device last connected to Cloudflare services.
   */
  last_seen?: string;

  /**
   * The device mac address.
   */
  mac_address?: string;

  /**
   * The device manufacturer name.
   */
  manufacturer?: string;

  /**
   * The device model name.
   */
  model?: string;

  /**
   * The device name.
   */
  name?: string;

  /**
   * The Linux distro name.
   */
  os_distro_name?: string;

  /**
   * The Linux distro revision.
   */
  os_distro_revision?: string;

  /**
   * The operating system version.
   */
  os_version?: string;

  /**
   * The operating system version extra parameter.
   */
  os_version_extra?: string;

  /**
   * When the device was revoked.
   */
  revoked_at?: string;

  /**
   * The device serial number.
   */
  serial_number?: string;

  /**
   * When the device was updated.
   */
  updated?: string;

  user?: ZeroTrustDevices.User;

  /**
   * The WARP client version.
   */
  version?: string;
}

export namespace ZeroTrustDevices {
  export interface User {
    /**
     * UUID
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The enrolled device user's name.
     */
    name?: string;
  }
}

export type DeviceGetResponse = unknown | string;

export interface DeviceListParams {
  account_id: string;
}

export interface DeviceGetParams {
  account_id: string;
}

export namespace Devices {
  export import ZeroTrustDevices = DevicesAPI.ZeroTrustDevices;
  export import DeviceGetResponse = DevicesAPI.DeviceGetResponse;
  export import ZeroTrustDevicesSinglePage = DevicesAPI.ZeroTrustDevicesSinglePage;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import DEXTests = DEXTestsAPI.DEXTests;
  export import DEXTestSchemasHTTP = DEXTestsAPI.DEXTestSchemasHTTP;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestSchemasHTTPSSinglePage = DEXTestsAPI.DEXTestSchemasHTTPSSinglePage;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
  export import Networks = NetworksAPI.Networks;
  export import DeviceManagedNetworks = NetworksAPI.DeviceManagedNetworks;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import DeviceManagedNetworksSinglePage = NetworksAPI.DeviceManagedNetworksSinglePage;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkListParams = NetworksAPI.NetworkListParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkGetParams = NetworksAPI.NetworkGetParams;
  export import Policies = PoliciesAPI.Policies;
  export import DevicesDeviceSettingsPolicy = PoliciesAPI.DevicesDeviceSettingsPolicy;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import DevicesDeviceSettingsPoliciesSinglePage = PoliciesAPI.DevicesDeviceSettingsPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Posture = PostureAPI.Posture;
  export import DevicePostureRules = PostureAPI.DevicePostureRules;
  export import PostureDeleteResponse = PostureAPI.PostureDeleteResponse;
  export import DevicePostureRulesSinglePage = PostureAPI.DevicePostureRulesSinglePage;
  export import PostureCreateParams = PostureAPI.PostureCreateParams;
  export import PostureUpdateParams = PostureAPI.PostureUpdateParams;
  export import PostureListParams = PostureAPI.PostureListParams;
  export import PostureDeleteParams = PostureAPI.PostureDeleteParams;
  export import PostureGetParams = PostureAPI.PostureGetParams;
  export import Revoke = RevokeAPI.Revoke;
  export import RevokeCreateResponse = RevokeAPI.RevokeCreateResponse;
  export import RevokeCreateParams = RevokeAPI.RevokeCreateParams;
  export import Settings = SettingsAPI.Settings;
  export import ZeroTrustAccountDeviceSettings = SettingsAPI.ZeroTrustAccountDeviceSettings;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
  export import Unrevoke = UnrevokeAPI.Unrevoke;
  export import UnrevokeCreateResponse = UnrevokeAPI.UnrevokeCreateResponse;
  export import UnrevokeCreateParams = UnrevokeAPI.UnrevokeCreateParams;
  export import OverrideCodes = OverrideCodesAPI.OverrideCodes;
  export import OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
  export import OverrideCodeListParams = OverrideCodesAPI.OverrideCodeListParams;
}
