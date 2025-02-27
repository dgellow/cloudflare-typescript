// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UserAPI from 'cloudflare/resources/user/user';
import * as AuditLogsAPI from 'cloudflare/resources/user/audit-logs';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import * as SubscriptionsAPI from 'cloudflare/resources/user/subscriptions';
import * as BillingAPI from 'cloudflare/resources/user/billing/billing';
import * as FirewallAPI from 'cloudflare/resources/user/firewall/firewall';
import * as LoadBalancersAPI from 'cloudflare/resources/user/load-balancers/load-balancers';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';

export class UserResource extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  firewall: FirewallAPI.Firewall = new FirewallAPI.Firewall(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Edit part of your user details.
   */
  edit(body: UserEditParams, options?: Core.RequestOptions): Core.APIPromise<UserEditResponse> {
    return (
      this._client.patch('/user', { body, ...options }) as Core.APIPromise<{ result: UserEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * User Details
   */
  get(options?: Core.RequestOptions): Core.APIPromise<UserGetResponse> {
    return (this._client.get('/user', options) as Core.APIPromise<{ result: UserGetResponse }>)._thenUnwrap(
      (obj) => obj.result,
    );
  }
}

export interface User {
  /**
   * Address.
   */
  address: string;

  /**
   * City.
   */
  city: string;

  /**
   * The country in which the user lives.
   */
  country: string | null;

  /**
   * User's first name
   */
  first_name: string | null;

  /**
   * User's last name
   */
  last_name: string | null;

  /**
   * Name of organization.
   */
  organization: string;

  /**
   * User's telephone number
   */
  phone: string | null;

  /**
   * State.
   */
  state: string;

  /**
   * The zipcode or postal code where the user lives.
   */
  zip: string | null;

  /**
   * Contact Identifier.
   */
  id?: string;

  /**
   * Optional address line for unit, floor, suite, etc.
   */
  address2?: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * Contact fax number.
   */
  fax?: string;
}

export type UserEditResponse = unknown | string | null;

export type UserGetResponse = unknown | string | null;

export interface UserEditParams {
  /**
   * The country in which the user lives.
   */
  country?: string | null;

  /**
   * User's first name
   */
  first_name?: string | null;

  /**
   * User's last name
   */
  last_name?: string | null;

  /**
   * User's telephone number
   */
  telephone?: string | null;

  /**
   * The zipcode or postal code where the user lives.
   */
  zipcode?: string | null;
}

export namespace UserResource {
  export import User = UserAPI.User;
  export import UserEditResponse = UserAPI.UserEditResponse;
  export import UserGetResponse = UserAPI.UserGetResponse;
  export import UserEditParams = UserAPI.UserEditParams;
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = AuditLogsAPI.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Billing = BillingAPI.Billing;
  export import Firewall = FirewallAPI.Firewall;
  export import Invites = InvitesAPI.Invites;
  export import UserInvite = InvitesAPI.UserInvite;
  export import InviteListResponse = InvitesAPI.InviteListResponse;
  export import InviteEditResponse = InvitesAPI.InviteEditResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InviteListResponsesSinglePage = InvitesAPI.InviteListResponsesSinglePage;
  export import InviteEditParams = InvitesAPI.InviteEditParams;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import Organizations = OrganizationsAPI.Organizations;
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationsV4PagePaginationArray = OrganizationsAPI.OrganizationsV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import Subscription = SubscriptionsAPI.Subscription;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionEditResponse = SubscriptionsAPI.SubscriptionEditResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionEditParams = SubscriptionsAPI.SubscriptionEditParams;
  export import Tokens = TokensAPI.Tokens;
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenListResponse = TokensAPI.TokenListResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenListParams = TokensAPI.TokenListParams;
}
