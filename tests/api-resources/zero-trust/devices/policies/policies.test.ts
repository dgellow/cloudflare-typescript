// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource policies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.policies.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      match: 'user.identity == "test@cloudflare.com"',
      name: 'Allow Developers',
      precedence: 100,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.policies.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      match: 'user.identity == "test@cloudflare.com"',
      name: 'Allow Developers',
      precedence: 100,
      allow_mode_switch: true,
      allow_updates: true,
      allowed_to_leave: true,
      auto_connect: 0,
      captive_portal: 180,
      description: 'Policy for test teams.',
      disable_auto_fallback: true,
      enabled: true,
      exclude_office_ips: true,
      lan_allow_minutes: 30,
      lan_allow_subnet_size: 24,
      service_mode_v2: { mode: 'proxy', port: 3000 },
      support_url: 'https://1.1.1.1/help',
      switch_locked: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.policies.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.policies.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.policies.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.policies.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.policies.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.policies.edit(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        allow_mode_switch: true,
        allow_updates: true,
        allowed_to_leave: true,
        auto_connect: 0,
        captive_portal: 180,
        description: 'Policy for test teams.',
        disable_auto_fallback: true,
        enabled: true,
        exclude_office_ips: true,
        match: 'user.identity == "test@cloudflare.com"',
        name: 'Allow Developers',
        precedence: 100,
        service_mode_v2: { mode: 'proxy', port: 3000 },
        support_url: 'https://1.1.1.1/help',
        switch_locked: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.policies.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.policies.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
