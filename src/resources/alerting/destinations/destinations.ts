// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/alerting/destinations/eligible';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/destinations/pagerduty';
import * as WebhooksAPI from 'cloudflare/resources/alerting/destinations/webhooks';

export class Destinations extends APIResource {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Eligible = EligibleAPI.Eligible;
  export import EligibleGetResponse = EligibleAPI.EligibleGetResponse;
  export import EligibleGetParams = EligibleAPI.EligibleGetParams;
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import AlertingPagerduty = PagerdutyAPI.AlertingPagerduty;
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import PagerdutyCreateParams = PagerdutyAPI.PagerdutyCreateParams;
  export import PagerdutyDeleteParams = PagerdutyAPI.PagerdutyDeleteParams;
  export import PagerdutyGetParams = PagerdutyAPI.PagerdutyGetParams;
  export import PagerdutyLinkParams = PagerdutyAPI.PagerdutyLinkParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import AlertingWebhooks = WebhooksAPI.AlertingWebhooks;
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import AlertingWebhooksSinglePage = WebhooksAPI.AlertingWebhooksSinglePage;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookListParams = WebhooksAPI.WebhookListParams;
  export import WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export import WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
