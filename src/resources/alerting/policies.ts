// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/alerting/policies';
import { SinglePage } from 'cloudflare/pagination';

export class Policies extends APIResource {
  /**
   * Creates a new Notification policy.
   */
  create(params: PolicyCreateParams, options?: Core.RequestOptions): Core.APIPromise<PolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/alerting/v3/policies`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Notification policy.
   */
  update(
    policyId: string,
    params: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/alerting/v3/policies/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a list of all Notification policies.
   */
  list(
    params: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AlertingPoliciesSinglePage, AlertingPolicies> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/alerting/v3/policies`,
      AlertingPoliciesSinglePage,
      options,
    );
  }

  /**
   * Delete a Notification policy.
   */
  delete(
    policyId: string,
    params: PolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/alerting/v3/policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: PolicyDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for a single policy.
   */
  get(
    policyId: string,
    params: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AlertingPolicies> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/policies/${policyId}`,
        options,
      ) as Core.APIPromise<{ result: AlertingPolicies }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AlertingPoliciesSinglePage extends SinglePage<AlertingPolicies> {}

export interface AlertingPolicies {
  /**
   * The unique identifier of a notification policy
   */
  id?: string;

  /**
   * Refers to which event will trigger a Notification dispatch. You can use the
   * endpoint to get available alert types which then will give you a list of
   * possible values.
   */
  alert_type?:
    | 'access_custom_certificate_expiration_type'
    | 'advanced_ddos_attack_l4_alert'
    | 'advanced_ddos_attack_l7_alert'
    | 'advanced_http_alert_error'
    | 'bgp_hijack_notification'
    | 'billing_usage_alert'
    | 'block_notification_block_removed'
    | 'block_notification_new_block'
    | 'block_notification_review_rejected'
    | 'brand_protection_alert'
    | 'brand_protection_digest'
    | 'clickhouse_alert_fw_anomaly'
    | 'clickhouse_alert_fw_ent_anomaly'
    | 'custom_ssl_certificate_event_type'
    | 'dedicated_ssl_certificate_event_type'
    | 'dos_attack_l4'
    | 'dos_attack_l7'
    | 'expiring_service_token_alert'
    | 'failing_logpush_job_disabled_alert'
    | 'fbm_auto_advertisement'
    | 'fbm_dosd_attack'
    | 'fbm_volumetric_attack'
    | 'health_check_status_notification'
    | 'hostname_aop_custom_certificate_expiration_type'
    | 'http_alert_edge_error'
    | 'http_alert_origin_error'
    | 'incident_alert'
    | 'load_balancing_health_alert'
    | 'load_balancing_pool_enablement_alert'
    | 'logo_match_alert'
    | 'magic_tunnel_health_check_event'
    | 'maintenance_event_notification'
    | 'mtls_certificate_store_certificate_expiration_type'
    | 'pages_event_alert'
    | 'radar_notification'
    | 'real_origin_monitoring'
    | 'scriptmonitor_alert_new_code_change_detections'
    | 'scriptmonitor_alert_new_hosts'
    | 'scriptmonitor_alert_new_malicious_hosts'
    | 'scriptmonitor_alert_new_malicious_scripts'
    | 'scriptmonitor_alert_new_malicious_url'
    | 'scriptmonitor_alert_new_max_length_resource_url'
    | 'scriptmonitor_alert_new_resources'
    | 'secondary_dns_all_primaries_failing'
    | 'secondary_dns_primaries_failing'
    | 'secondary_dns_zone_successfully_updated'
    | 'secondary_dns_zone_validation_warning'
    | 'sentinel_alert'
    | 'stream_live_notifications'
    | 'traffic_anomalies_alert'
    | 'tunnel_health_event'
    | 'tunnel_update_event'
    | 'universal_ssl_event_type'
    | 'web_analytics_metrics_update'
    | 'zone_aop_custom_certificate_expiration_type';

  created?: string;

  /**
   * Optional description for the Notification policy.
   */
  description?: string;

  /**
   * Whether or not the Notification policy is enabled.
   */
  enabled?: boolean;

  /**
   * Optional filters that allow you to be alerted only on a subset of events for
   * that alert type based on some criteria. This is only available for select alert
   * types. See alert type documentation for more details.
   */
  filters?: AlertingPolicies.Filters;

  /**
   * List of IDs that will be used when dispatching a notification. IDs for email
   * type will be the email address.
   */
  mechanisms?: Record<string, Array<AlertingPolicies.Mechanisms>>;

  modified?: string;

  /**
   * Name of the policy.
   */
  name?: string;
}

export namespace AlertingPolicies {
  /**
   * Optional filters that allow you to be alerted only on a subset of events for
   * that alert type based on some criteria. This is only available for select alert
   * types. See alert type documentation for more details.
   */
  export interface Filters {
    /**
     * Usage depends on specific alert type
     */
    actions?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_asns?: Array<string>;

    /**
     * Used for configuring incident_alert. A list of identifiers for each component to
     * monitor.
     */
    affected_components?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_locations?: Array<string>;

    /**
     * Used for configuring maintenance_event_notification
     */
    airport_code?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    alert_trigger_preferences?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    alert_trigger_preferences_value?: Array<'99.0' | '98.0' | '97.0'>;

    /**
     * Used for configuring load_balancing_pool_enablement_alert
     */
    enabled?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    environment?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    event?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    event_source?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    event_type?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    group_by?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    health_check_id?: Array<string>;

    /**
     * Used for configuring incident_alert
     */
    incident_impact?: Array<
      'INCIDENT_IMPACT_NONE' | 'INCIDENT_IMPACT_MINOR' | 'INCIDENT_IMPACT_MAJOR' | 'INCIDENT_IMPACT_CRITICAL'
    >;

    /**
     * Used for configuring stream_live_notifications
     */
    input_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    limit?: Array<string>;

    /**
     * Used for configuring logo_match_alert
     */
    logo_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    megabits_per_second?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    new_health?: Array<string>;

    /**
     * Used for configuring tunnel_health_event
     */
    new_status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    packets_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    pool_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    product?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    project_id?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    protocol?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    query_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    requests_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    selectors?: Array<string>;

    /**
     * Used for configuring clickhouse_alert_fw_ent_anomaly
     */
    services?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    slo?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_hostname?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    target_ip?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_zone_name?: Array<string>;

    /**
     * Used for configuring traffic_anomalies_alert
     */
    traffic_exclusions?: Array<'security_events'>;

    /**
     * Used for configuring tunnel_health_event
     */
    tunnel_id?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    tunnel_name?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    where?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    zones?: Array<string>;
  }

  export interface Mechanisms {
    /**
     * UUID
     */
    id?: string | string;
  }
}

export interface PolicyCreateResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface PolicyUpdateResponse {
  /**
   * UUID
   */
  id?: string;
}

export type PolicyDeleteResponse = unknown | Array<unknown> | string;

export interface PolicyCreateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param: Refers to which event will trigger a Notification dispatch. You can
   * use the endpoint to get available alert types which then will give you a list of
   * possible values.
   */
  alert_type:
    | 'access_custom_certificate_expiration_type'
    | 'advanced_ddos_attack_l4_alert'
    | 'advanced_ddos_attack_l7_alert'
    | 'advanced_http_alert_error'
    | 'bgp_hijack_notification'
    | 'billing_usage_alert'
    | 'block_notification_block_removed'
    | 'block_notification_new_block'
    | 'block_notification_review_rejected'
    | 'brand_protection_alert'
    | 'brand_protection_digest'
    | 'clickhouse_alert_fw_anomaly'
    | 'clickhouse_alert_fw_ent_anomaly'
    | 'custom_ssl_certificate_event_type'
    | 'dedicated_ssl_certificate_event_type'
    | 'dos_attack_l4'
    | 'dos_attack_l7'
    | 'expiring_service_token_alert'
    | 'failing_logpush_job_disabled_alert'
    | 'fbm_auto_advertisement'
    | 'fbm_dosd_attack'
    | 'fbm_volumetric_attack'
    | 'health_check_status_notification'
    | 'hostname_aop_custom_certificate_expiration_type'
    | 'http_alert_edge_error'
    | 'http_alert_origin_error'
    | 'incident_alert'
    | 'load_balancing_health_alert'
    | 'load_balancing_pool_enablement_alert'
    | 'logo_match_alert'
    | 'magic_tunnel_health_check_event'
    | 'maintenance_event_notification'
    | 'mtls_certificate_store_certificate_expiration_type'
    | 'pages_event_alert'
    | 'radar_notification'
    | 'real_origin_monitoring'
    | 'scriptmonitor_alert_new_code_change_detections'
    | 'scriptmonitor_alert_new_hosts'
    | 'scriptmonitor_alert_new_malicious_hosts'
    | 'scriptmonitor_alert_new_malicious_scripts'
    | 'scriptmonitor_alert_new_malicious_url'
    | 'scriptmonitor_alert_new_max_length_resource_url'
    | 'scriptmonitor_alert_new_resources'
    | 'secondary_dns_all_primaries_failing'
    | 'secondary_dns_primaries_failing'
    | 'secondary_dns_zone_successfully_updated'
    | 'secondary_dns_zone_validation_warning'
    | 'sentinel_alert'
    | 'stream_live_notifications'
    | 'traffic_anomalies_alert'
    | 'tunnel_health_event'
    | 'tunnel_update_event'
    | 'universal_ssl_event_type'
    | 'web_analytics_metrics_update'
    | 'zone_aop_custom_certificate_expiration_type';

  /**
   * Body param: Whether or not the Notification policy is enabled.
   */
  enabled: boolean;

  /**
   * Body param: List of IDs that will be used when dispatching a notification. IDs
   * for email type will be the email address.
   */
  mechanisms: Record<string, Array<PolicyCreateParams.Mechanisms>>;

  /**
   * Body param: Name of the policy.
   */
  name: string;

  /**
   * Body param: Optional description for the Notification policy.
   */
  description?: string;

  /**
   * Body param: Optional filters that allow you to be alerted only on a subset of
   * events for that alert type based on some criteria. This is only available for
   * select alert types. See alert type documentation for more details.
   */
  filters?: PolicyCreateParams.Filters;
}

export namespace PolicyCreateParams {
  export interface Mechanisms {
    /**
     * UUID
     */
    id?: string | string;
  }

  /**
   * Optional filters that allow you to be alerted only on a subset of events for
   * that alert type based on some criteria. This is only available for select alert
   * types. See alert type documentation for more details.
   */
  export interface Filters {
    /**
     * Usage depends on specific alert type
     */
    actions?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_asns?: Array<string>;

    /**
     * Used for configuring incident_alert. A list of identifiers for each component to
     * monitor.
     */
    affected_components?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_locations?: Array<string>;

    /**
     * Used for configuring maintenance_event_notification
     */
    airport_code?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    alert_trigger_preferences?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    alert_trigger_preferences_value?: Array<'99.0' | '98.0' | '97.0'>;

    /**
     * Used for configuring load_balancing_pool_enablement_alert
     */
    enabled?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    environment?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    event?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    event_source?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    event_type?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    group_by?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    health_check_id?: Array<string>;

    /**
     * Used for configuring incident_alert
     */
    incident_impact?: Array<
      'INCIDENT_IMPACT_NONE' | 'INCIDENT_IMPACT_MINOR' | 'INCIDENT_IMPACT_MAJOR' | 'INCIDENT_IMPACT_CRITICAL'
    >;

    /**
     * Used for configuring stream_live_notifications
     */
    input_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    limit?: Array<string>;

    /**
     * Used for configuring logo_match_alert
     */
    logo_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    megabits_per_second?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    new_health?: Array<string>;

    /**
     * Used for configuring tunnel_health_event
     */
    new_status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    packets_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    pool_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    product?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    project_id?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    protocol?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    query_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    requests_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    selectors?: Array<string>;

    /**
     * Used for configuring clickhouse_alert_fw_ent_anomaly
     */
    services?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    slo?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_hostname?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    target_ip?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_zone_name?: Array<string>;

    /**
     * Used for configuring traffic_anomalies_alert
     */
    traffic_exclusions?: Array<'security_events'>;

    /**
     * Used for configuring tunnel_health_event
     */
    tunnel_id?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    tunnel_name?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    where?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    zones?: Array<string>;
  }
}

export interface PolicyUpdateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param: Refers to which event will trigger a Notification dispatch. You can
   * use the endpoint to get available alert types which then will give you a list of
   * possible values.
   */
  alert_type?:
    | 'access_custom_certificate_expiration_type'
    | 'advanced_ddos_attack_l4_alert'
    | 'advanced_ddos_attack_l7_alert'
    | 'advanced_http_alert_error'
    | 'bgp_hijack_notification'
    | 'billing_usage_alert'
    | 'block_notification_block_removed'
    | 'block_notification_new_block'
    | 'block_notification_review_rejected'
    | 'brand_protection_alert'
    | 'brand_protection_digest'
    | 'clickhouse_alert_fw_anomaly'
    | 'clickhouse_alert_fw_ent_anomaly'
    | 'custom_ssl_certificate_event_type'
    | 'dedicated_ssl_certificate_event_type'
    | 'dos_attack_l4'
    | 'dos_attack_l7'
    | 'expiring_service_token_alert'
    | 'failing_logpush_job_disabled_alert'
    | 'fbm_auto_advertisement'
    | 'fbm_dosd_attack'
    | 'fbm_volumetric_attack'
    | 'health_check_status_notification'
    | 'hostname_aop_custom_certificate_expiration_type'
    | 'http_alert_edge_error'
    | 'http_alert_origin_error'
    | 'incident_alert'
    | 'load_balancing_health_alert'
    | 'load_balancing_pool_enablement_alert'
    | 'logo_match_alert'
    | 'magic_tunnel_health_check_event'
    | 'maintenance_event_notification'
    | 'mtls_certificate_store_certificate_expiration_type'
    | 'pages_event_alert'
    | 'radar_notification'
    | 'real_origin_monitoring'
    | 'scriptmonitor_alert_new_code_change_detections'
    | 'scriptmonitor_alert_new_hosts'
    | 'scriptmonitor_alert_new_malicious_hosts'
    | 'scriptmonitor_alert_new_malicious_scripts'
    | 'scriptmonitor_alert_new_malicious_url'
    | 'scriptmonitor_alert_new_max_length_resource_url'
    | 'scriptmonitor_alert_new_resources'
    | 'secondary_dns_all_primaries_failing'
    | 'secondary_dns_primaries_failing'
    | 'secondary_dns_zone_successfully_updated'
    | 'secondary_dns_zone_validation_warning'
    | 'sentinel_alert'
    | 'stream_live_notifications'
    | 'traffic_anomalies_alert'
    | 'tunnel_health_event'
    | 'tunnel_update_event'
    | 'universal_ssl_event_type'
    | 'web_analytics_metrics_update'
    | 'zone_aop_custom_certificate_expiration_type';

  /**
   * Body param: Optional description for the Notification policy.
   */
  description?: string;

  /**
   * Body param: Whether or not the Notification policy is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Optional filters that allow you to be alerted only on a subset of
   * events for that alert type based on some criteria. This is only available for
   * select alert types. See alert type documentation for more details.
   */
  filters?: PolicyUpdateParams.Filters;

  /**
   * Body param: List of IDs that will be used when dispatching a notification. IDs
   * for email type will be the email address.
   */
  mechanisms?: Record<string, Array<PolicyUpdateParams.Mechanisms>>;

  /**
   * Body param: Name of the policy.
   */
  name?: string;
}

export namespace PolicyUpdateParams {
  /**
   * Optional filters that allow you to be alerted only on a subset of events for
   * that alert type based on some criteria. This is only available for select alert
   * types. See alert type documentation for more details.
   */
  export interface Filters {
    /**
     * Usage depends on specific alert type
     */
    actions?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_asns?: Array<string>;

    /**
     * Used for configuring incident_alert. A list of identifiers for each component to
     * monitor.
     */
    affected_components?: Array<string>;

    /**
     * Used for configuring radar_notification
     */
    affected_locations?: Array<string>;

    /**
     * Used for configuring maintenance_event_notification
     */
    airport_code?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    alert_trigger_preferences?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    alert_trigger_preferences_value?: Array<'99.0' | '98.0' | '97.0'>;

    /**
     * Used for configuring load_balancing_pool_enablement_alert
     */
    enabled?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    environment?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    event?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    event_source?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    event_type?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    group_by?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    health_check_id?: Array<string>;

    /**
     * Used for configuring incident_alert
     */
    incident_impact?: Array<
      'INCIDENT_IMPACT_NONE' | 'INCIDENT_IMPACT_MINOR' | 'INCIDENT_IMPACT_MAJOR' | 'INCIDENT_IMPACT_CRITICAL'
    >;

    /**
     * Used for configuring stream_live_notifications
     */
    input_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    limit?: Array<string>;

    /**
     * Used for configuring logo_match_alert
     */
    logo_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    megabits_per_second?: Array<string>;

    /**
     * Used for configuring load_balancing_health_alert
     */
    new_health?: Array<string>;

    /**
     * Used for configuring tunnel_health_event
     */
    new_status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    packets_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    pool_id?: Array<string>;

    /**
     * Used for configuring billing_usage_alert
     */
    product?: Array<string>;

    /**
     * Used for configuring pages_event_alert
     */
    project_id?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    protocol?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    query_tag?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    requests_per_second?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    selectors?: Array<string>;

    /**
     * Used for configuring clickhouse_alert_fw_ent_anomaly
     */
    services?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    slo?: Array<string>;

    /**
     * Used for configuring health_check_status_notification
     */
    status?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_hostname?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l4_alert
     */
    target_ip?: Array<string>;

    /**
     * Used for configuring advanced_ddos_attack_l7_alert
     */
    target_zone_name?: Array<string>;

    /**
     * Used for configuring traffic_anomalies_alert
     */
    traffic_exclusions?: Array<'security_events'>;

    /**
     * Used for configuring tunnel_health_event
     */
    tunnel_id?: Array<string>;

    /**
     * Used for configuring magic_tunnel_health_check_event
     */
    tunnel_name?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    where?: Array<string>;

    /**
     * Usage depends on specific alert type
     */
    zones?: Array<string>;
  }

  export interface Mechanisms {
    /**
     * UUID
     */
    id?: string | string;
  }
}

export interface PolicyListParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface PolicyDeleteParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface PolicyGetParams {
  /**
   * The account id
   */
  account_id: string;
}

export namespace Policies {
  export import AlertingPolicies = PoliciesAPI.AlertingPolicies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import AlertingPoliciesSinglePage = PoliciesAPI.AlertingPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
