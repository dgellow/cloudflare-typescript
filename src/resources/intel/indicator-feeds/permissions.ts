// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionsAPI from 'cloudflare/resources/intel/indicator-feeds/permissions';

export class Permissions extends APIResource {
  /**
   * Grant permission to indicator feed
   */
  create(
    params: PermissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelPermissionsUpdate> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/intel/indicator-feeds/permissions/add`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntelPermissionsUpdate }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List indicator feed permissions
   */
  list(params: PermissionListParams, options?: Core.RequestOptions): Core.APIPromise<PermissionListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/intel/indicator-feeds/permissions/view`,
        options,
      ) as Core.APIPromise<{ result: PermissionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revoke permission to indicator feed
   */
  delete(
    params: PermissionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelPermissionsUpdate> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/intel/indicator-feeds/permissions/remove`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntelPermissionsUpdate }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelPermissionListItem {
  /**
   * The unique identifier for the indicator feed
   */
  id?: number;

  /**
   * The description of the example test
   */
  description?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export interface IntelPermissionsUpdate {
  /**
   * Whether the update succeeded or not
   */
  success?: boolean;
}

export type PermissionListResponse = Array<IntelPermissionListItem>;

export interface PermissionCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * Body param: The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export interface PermissionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PermissionDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * Body param: The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export namespace Permissions {
  export import IntelPermissionListItem = PermissionsAPI.IntelPermissionListItem;
  export import IntelPermissionsUpdate = PermissionsAPI.IntelPermissionsUpdate;
  export import PermissionListResponse = PermissionsAPI.PermissionListResponse;
  export import PermissionCreateParams = PermissionsAPI.PermissionCreateParams;
  export import PermissionListParams = PermissionsAPI.PermissionListParams;
  export import PermissionDeleteParams = PermissionsAPI.PermissionDeleteParams;
}
