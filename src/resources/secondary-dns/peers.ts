// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';
import { SinglePage } from 'cloudflare/pagination';

export class Peers extends APIResource {
  /**
   * Create Peer.
   */
  create(params: PeerCreateParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/peers`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSPeer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify Peer.
   */
  update(
    peerId: string,
    params: PeerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/peers/${peerId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSPeer }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Peers.
   */
  list(
    params: PeerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecondaryDNSPeersSinglePage, SecondaryDNSPeer> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/secondary_dns/peers`,
      SecondaryDNSPeersSinglePage,
      options,
    );
  }

  /**
   * Delete Peer.
   */
  delete(
    peerId: string,
    params: PeerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/secondary_dns/peers/${peerId}`,
        options,
      ) as Core.APIPromise<{ result: PeerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Peer.
   */
  get(
    peerId: string,
    params: PeerGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSPeer> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/peers/${peerId}`, options) as Core.APIPromise<{
        result: SecondaryDNSPeer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SecondaryDNSPeersSinglePage extends SinglePage<SecondaryDNSPeer> {}

export interface SecondaryDNSPeer {
  id: string;

  /**
   * The name of the peer.
   */
  name: string;

  /**
   * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
   * this peer is linked to. For primary zones this IP defines the IP of the
   * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
   * zones this IP defines the IP of the primary nameserver Cloudflare will send
   * AXFR/IXFR requests to.
   */
  ip?: string;

  /**
   * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
   * zones.
   */
  ixfr_enable?: boolean;

  /**
   * DNS port of primary or secondary nameserver, depending on what zone this peer is
   * linked to.
   */
  port?: number;

  /**
   * TSIG authentication will be used for zone transfer if configured.
   */
  tsig_id?: string;
}

export interface PeerDeleteResponse {
  id?: string;
}

export interface PeerCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface PeerUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the peer.
   */
  name: string;

  /**
   * Body param: IPv4/IPv6 address of primary or secondary nameserver, depending on
   * what zone this peer is linked to. For primary zones this IP defines the IP of
   * the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
   * zones this IP defines the IP of the primary nameserver Cloudflare will send
   * AXFR/IXFR requests to.
   */
  ip?: string;

  /**
   * Body param: Enable IXFR transfer protocol, default is AXFR. Only applicable to
   * secondary zones.
   */
  ixfr_enable?: boolean;

  /**
   * Body param: DNS port of primary or secondary nameserver, depending on what zone
   * this peer is linked to.
   */
  port?: number;

  /**
   * Body param: TSIG authentication will be used for zone transfer if configured.
   */
  tsig_id?: string;
}

export interface PeerListParams {
  account_id: string;
}

export interface PeerDeleteParams {
  account_id: string;
}

export interface PeerGetParams {
  account_id: string;
}

export namespace Peers {
  export import SecondaryDNSPeer = PeersAPI.SecondaryDNSPeer;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import SecondaryDNSPeersSinglePage = PeersAPI.SecondaryDNSPeersSinglePage;
  export import PeerCreateParams = PeersAPI.PeerCreateParams;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerListParams = PeersAPI.PeerListParams;
  export import PeerDeleteParams = PeersAPI.PeerDeleteParams;
  export import PeerGetParams = PeersAPI.PeerGetParams;
}
