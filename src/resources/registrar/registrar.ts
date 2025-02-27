// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/registrar/domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

export namespace Registrar {
  export import Domains = DomainsAPI.Domains;
  export import RegistrarDomains = DomainsAPI.RegistrarDomains;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainListResponsesSinglePage = DomainsAPI.DomainListResponsesSinglePage;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
