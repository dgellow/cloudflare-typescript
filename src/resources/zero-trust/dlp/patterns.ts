// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PatternsAPI from 'cloudflare/resources/zero-trust/dlp/patterns';
import * as OwnershipAPI from 'cloudflare/resources/logpush/ownership';

export class Patterns extends APIResource {
  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the
   * regular expression is too complex or can match an unbounded-length string. Your
   * regex will be rejected if it uses the Kleene Star -- be sure to bound the
   * maximum number of characters that can be matched.
   */
  validate(
    params: PatternValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipAPI.OwnershipValidation | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/patterns/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OwnershipAPI.OwnershipValidation | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PatternValidateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The regex pattern.
   */
  regex: string;
}

export namespace Patterns {
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
}
